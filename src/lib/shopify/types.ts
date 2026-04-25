/**
 * Types shaped after Shopify Storefront API GraphQL responses.
 * The mock client returns these so swapping in the real client is a one-file change.
 */

export type Money = {
  amount: string;
  currencyCode: "USD" | string;
};

export type Image = {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  compareAtPrice?: Money | null;
  selectedOptions: { name: string; value: string }[];
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  tags: string[];
  vendor: string;
  productType: string;
  availableForSale: boolean;
  priceRange: { minVariantPrice: Money; maxVariantPrice: Money };
  compareAtPriceRange?: { minVariantPrice: Money; maxVariantPrice: Money };
  featuredImage: Image;
  images: Image[];
  options: { id: string; name: string; values: string[] }[];
  variants: ProductVariant[];
  // Custom display extras for the marketing site
  patternColor?: string;
  patternAccent?: string;
  highlights?: string[];
};

export type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: Pick<Product, "handle" | "title" | "featuredImage">;
    price: Money;
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
  };
  lines: CartLine[];
};
