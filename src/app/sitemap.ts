import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/shopify/client";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1, lastModified },
    { url: `${SITE_URL}/shop`, changeFrequency: "weekly", priority: 0.9, lastModified },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.6, lastModified },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5, lastModified },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.handle}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified,
  }));

  return [...staticRoutes, ...productRoutes];
}
