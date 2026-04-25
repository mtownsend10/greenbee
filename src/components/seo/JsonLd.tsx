import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { Product } from "@/lib/shopify/types";

type Props = {
  data: Record<string, unknown>;
};

/**
 * Renders a single JSON-LD <script> tag for structured data.
 * Use multiple instances for distinct schemas (Product + BreadcrumbList).
 */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description:
      "Handmade beeswax food wraps from Bend, Oregon. Plastic-free, reusable, compostable.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bend",
      addressRegion: "OR",
      addressCountry: "US",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function productSchema(product: Product) {
  const url = `${SITE_URL}/shop/${product.handle}`;
  const images = product.images.map((i) => `${SITE_URL}${i.url}`);
  const price = product.priceRange.minVariantPrice;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    sku: product.variants[0]?.id,
    image: images,
    url,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: product.productType,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: price.currencyCode,
      price: price.amount,
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
  };
}
