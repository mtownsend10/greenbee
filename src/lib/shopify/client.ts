/**
 * Single-file swap point: when real Storefront API credentials are wired up,
 * replace the body of these functions with GraphQL fetches against
 * https://{shop}.myshopify.com/api/{api-version}/graphql.json.
 *
 * The component layer never imports `mock.ts` directly — it only goes through
 * the functions exported here, so the rest of the app stays unchanged.
 */

import { MOCK_PRODUCTS } from "./mock";
import type { Product } from "./types";

const USE_MOCK = !process.env.SHOPIFY_STORE_DOMAIN;

export async function getAllProducts(): Promise<Product[]> {
  if (USE_MOCK) return MOCK_PRODUCTS;
  // TODO: real Storefront API GraphQL query against `products(first: 100)`
  return MOCK_PRODUCTS;
}

export async function getProductByHandle(
  handle: string,
): Promise<Product | null> {
  if (USE_MOCK) {
    return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;
  }
  // TODO: real Storefront API GraphQL `productByHandle(handle: $handle)`
  return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const all = await getAllProducts();
  return all.slice(0, limit);
}
