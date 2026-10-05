/**
 * Single swap point for product data. When the Storefront API env vars are set
 * (SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN) products come from
 * Shopify; otherwise the mock catalog is used so the site still runs locally.
 *
 * The component layer never imports `mock.ts` directly — it only goes through
 * the functions exported here, so the rest of the app stays unchanged.
 */

import { MOCK_PRODUCTS } from "./mock";
import { isShopifyConfigured, storefrontFetch } from "./storefront";
import type { Image, Money, Product, ProductVariant } from "./types";

/**
 * Marketing-only extras with no Shopify equivalent. Keyed by product handle;
 * anything not listed falls back to DEFAULT_EXTRAS. Could move to metafields later.
 */
const DEFAULT_HIGHLIGHTS = [
  "100% organic cotton",
  "Beeswax + damar resin + jojoba & coconut oil",
  "Reusable for years with simple care",
  "Fully compostable",
];

const DEFAULT_EXTRAS = { patternColor: "#F4B324", patternAccent: "#5B8A3A" };

const PATTERN_EXTRAS: Record<string, { patternColor: string; patternAccent: string }> = {
  hearts: { patternColor: "#F28B82", patternAccent: "#1A1A1A" },
  "light-garden": { patternColor: "#FCD66B", patternAccent: "#5B8A3A" },
  rainbow: { patternColor: "#B9DBE5", patternAccent: "#F4B324" },
  "green-garden": { patternColor: "#5B8A3A", patternAccent: "#F4B324" },
  "pink-arrow": { patternColor: "#F6C6C0", patternAccent: "#1A1A1A" },
  "green-geo": { patternColor: "#2F4A2F", patternAccent: "#FCD66B" },
};

const PRODUCT_FIELDS = `
  id
  handle
  title
  description
  descriptionHtml
  tags
  vendor
  productType
  availableForSale
  priceRange { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } }
  compareAtPriceRange { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } }
  featuredImage { url altText width height }
  images(first: 20) { nodes { url altText width height } }
  options { id name optionValues { name } }
  variants(first: 50) {
    nodes {
      id
      title
      availableForSale
      price { amount currencyCode }
      compareAtPrice { amount currencyCode }
      selectedOptions { name value }
    }
  }
`;

type ShopifyProduct = Omit<Product, "images" | "options" | "variants" | "featuredImage"> & {
  featuredImage: Image | null;
  images: { nodes: Image[] };
  options: { id: string; name: string; optionValues: { name: string }[] }[];
  variants: { nodes: ProductVariant[] };
};

const isPack = (v: ProductVariant) => /pack/i.test(v.title);

/**
 * Tidies description HTML written in the Shopify admin: drops pasted-in inline
 * styles, editor data-* attributes and bare <span> wrappers so the copy picks up
 * the site's typography, and strips anything executable as a precaution.
 */
function cleanDescriptionHtml(html: string | undefined): string | undefined {
  if (!html) return undefined;
  return html
    .replace(/<(script|style|iframe)[\s\S]*?<\/\1>/gi, "")
    .replace(/\s(?:style|data-[\w-]+|on\w+)=(?:"[^"]*"|'[^']*')/gi, "")
    .replace(/<\/?span>/gi, "");
}

function normalize(p: ShopifyProduct): Product {
  // Lead with the 3-pack so it's the default selection and the price shown on cards.
  const variants = [...p.variants.nodes].sort((a, b) => Number(isPack(b)) - Number(isPack(a)));
  const images = p.images.nodes;
  const zeroCompare = (m: Money | undefined) => !m || parseFloat(m.amount) === 0;

  return {
    ...p,
    descriptionHtml: cleanDescriptionHtml(p.descriptionHtml),
    featuredImage: p.featuredImage ?? images[0] ?? { url: "/products/photos/garden.png", altText: p.title },
    images,
    options: p.options.map((o) => ({ id: o.id, name: o.name, values: o.optionValues.map((v) => v.name) })),
    variants,
    compareAtPriceRange: zeroCompare(p.compareAtPriceRange?.maxVariantPrice) ? undefined : p.compareAtPriceRange,
    ...(PATTERN_EXTRAS[p.handle] ?? DEFAULT_EXTRAS),
    highlights: DEFAULT_HIGHLIGHTS,
  };
}

export async function getAllProducts(): Promise<Product[]> {
  if (!isShopifyConfigured) return MOCK_PRODUCTS;
  const data = await storefrontFetch<{ products: { nodes: ShopifyProduct[] } }>(
    `query AllProducts { products(first: 100, sortKey: CREATED_AT) { nodes { ${PRODUCT_FIELDS} } } }`,
  );
  return data.products.nodes.map(normalize);
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  if (!isShopifyConfigured) {
    return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;
  }
  const data = await storefrontFetch<{ product: ShopifyProduct | null }>(
    `query ProductByHandle($handle: String!) { product(handle: $handle) { ${PRODUCT_FIELDS} } }`,
    { handle },
  );
  return data.product ? normalize(data.product) : null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const all = await getAllProducts();
  return all.slice(0, limit);
}

/**
 * Creates a Shopify cart from the local basket and returns its hosted checkout URL.
 * Called from the /api/checkout route handler.
 */
export async function createCheckout(
  lines: { variantId: string; quantity: number }[],
): Promise<{ checkoutUrl: string } | { error: string }> {
  if (!isShopifyConfigured) return { checkoutUrl: "/checkout-placeholder" };

  const data = await storefrontFetch<{
    cartCreate: {
      cart: { checkoutUrl: string } | null;
      userErrors: { field: string[] | null; message: string }[];
    };
  }>(
    `mutation CreateCart($input: CartInput!) {
      cartCreate(input: $input) {
        cart { checkoutUrl }
        userErrors { field message }
      }
    }`,
    { input: { lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })) } },
    { cache: false },
  );

  const { cart, userErrors } = data.cartCreate;
  if (userErrors.length || !cart) {
    return { error: userErrors.map((e) => e.message).join("; ") || "Could not create checkout" };
  }
  return { checkoutUrl: cart.checkoutUrl };
}
