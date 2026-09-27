/**
 * Minimal Storefront API GraphQL client. Server-side only — imported by
 * `client.ts` and the checkout route handler, never by components directly.
 */

const API_VERSION = "2026-07";

/** How often cached product data is refreshed from Shopify, in seconds. */
const REVALIDATE_SECONDS = 300;

export const isShopifyConfigured = Boolean(
  process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
);

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function storefrontFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  { cache = true }: { cache?: boolean } = {},
): Promise<T> {
  const res = await fetch(
    `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
      ...(cache ? { next: { revalidate: REVALIDATE_SECONDS } } : { cache: "no-store" as const }),
    },
  );

  if (!res.ok) {
    throw new Error(`Shopify Storefront API responded ${res.status}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(`Shopify Storefront API error: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  return json.data as T;
}
