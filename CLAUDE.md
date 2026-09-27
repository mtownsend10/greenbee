# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Stack & commands

- Next.js **16.2.4** (App Router) on React **19**, TypeScript strict, Tailwind **v4**, ESLint **9** flat config.
- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build (also the way to surface type errors; there is no separate `tsc` script)
- `npm run lint` — ESLint via `eslint-config-next` (core-web-vitals + typescript presets)
- No test runner is configured.
- Path alias: `@/*` → `./src/*`.

> Per AGENTS.md, before touching Next.js APIs read the relevant guide in `node_modules/next/dist/docs/`. Next 16 + React 19 have breaking changes from older training data — async `params`, the `Image` defaults, metadata, route handler signatures, etc.

## Architecture

This is a **headless storefront marketing site** for Green Bee Wraps (handmade beeswax wraps). It is an App Router site backed by the Shopify Storefront API (Headless channel); the basket lives client-side and checkout hands off to Shopify's hosted checkout. Without Shopify env vars it falls back to a mock catalog.

### Data layer — `src/lib/shopify/`

- `client.ts` is the **single swap point**. It exports `getAllProducts`, `getProductByHandle`, `getFeaturedProducts`, `createCheckout`. When `SHOPIFY_STORE_DOMAIN` + `SHOPIFY_STOREFRONT_ACCESS_TOKEN` are set (in `.env.local` locally, and in Vercel env vars) it queries the Storefront API via `storefront.ts` (API version `2026-07`, product data revalidates every 5 min); otherwise it returns `MOCK_PRODUCTS`.
- `normalize()` in `client.ts` sorts the 3-pack variant first (it's the default size and the price shown on cards), cleans `descriptionHtml`, and attaches the marketing extras from `PATTERN_EXTRAS` (keyed by handle).
- Store: `gepczw-uf.myshopify.com`. Products use a `Size` option: `3-Pack (S/M/L)` $22, `Small` $6, `Medium` $10, `Large` $13. Only products published to the Headless channel appear.
- **Components must never import `mock.ts` directly** — always go through `client.ts`. Keeping that boundary intact is the whole point of the abstraction.
- `types.ts` mirrors the Shopify Storefront GraphQL shape (`Product`, `ProductVariant`, `Money`, `Cart`, `CartLine`). It also adds three marketing-only extensions on `Product`: `patternColor`, `patternAccent`, `highlights`. These have no Shopify equivalent and will need to live in metafields or a CMS once real data is wired up.

### Cart — `src/lib/cart/context.tsx`

- Provider mounted in `src/app/layout.tsx`; consumed via `useCart()`.
- State is a `useReducer` over `LocalLine[]`, persisted to `localStorage` under `gbw.cart.v2` (hydrated post-mount to avoid SSR mismatch; bumped from v1 when variant IDs switched from mock to real Shopify GIDs).
- `checkout()` POSTs the basket to `src/app/api/checkout/route.ts`, which runs Storefront `cartCreate` and returns `cart.checkoutUrl`; the browser then redirects there. Shopify builds that URL on the store's **primary domain** (set in Shopify admin → Settings → Domains), so that domain must stay pointed at Shopify.
- `addItem` opens the cart drawer as a side effect — intentional UX, don't strip it.

### Routes — `src/app/`

- `/` (home), `/shop`, `/shop/[handle]`, `/about`, `/faq`, `/contact`, `/shipping` (shipping & returns), `/wholesale`, `/privacy`, and the `/api/checkout` route handler.
- Product page uses `generateStaticParams` over `getAllProducts()` for SSG, and **Next 15+ async `params`** (`type Params = Promise<{ handle: string }>` — must be awaited).
- `sitemap.ts` and `robots.ts` are MetadataRoute route handlers; the sitemap pulls product handles dynamically.
- `next.config.ts` allows remote images only from `https://cdn.shopify.com/s/files/**` (Shopify product photos). SVG optimization is off; don't re-enable `dangerouslyAllowSVG` alongside remote patterns without a CSP review.

### SEO — `src/lib/seo.ts` + `src/components/seo/JsonLd.tsx`

- `SITE_NAME`, `SITE_URL`, `SITE_TAGLINE`, `SITE_DESCRIPTION`, `SOCIAL` are the canonical strings — re-use them, don't hardcode.
- `SITE_URL` reads `NEXT_PUBLIC_SITE_URL` at build time and falls back to `https://greenbeewraps.com`.
- `JsonLd` + `organizationSchema` / `websiteSchema` mount in the root layout; `productSchema` mounts on product pages. Per-page Open Graph + Twitter metadata is generated in `generateMetadata`.

### Design system — `src/app/globals.css` + `src/components/`

- Tailwind v4: `@import "tailwindcss";` then an `@theme inline` block that exposes brand colors (`bg-honey`, `text-forest`, `bg-cream`, `bg-paper`, `bg-coral`, …) and font families (`font-display`, `font-body`, `font-hand`). Use these utilities — do **not** add raw hex values inline.
- Fonts (`Fraunces`, `Nunito`, `Caveat`) are loaded via `next/font/google` in `layout.tsx` and bound to the CSS vars `--font-fraunces` / `--font-nunito` / `--font-caveat`.
- The aesthetic is "editorial farmer's market" — illustrated, tilted, hand-drawn. Custom utilities to know about: `border-wobble`, `tilt-l`/`tilt-r`, `underline-wobble`, `bg-honeycomb`, `bg-dots`, `animate-buzz`, `animate-marquee`, `animate-float`. Reach for these before inventing new ones.
- Component buckets:
  - `components/site/` — chrome (`Header`, `Footer`, `CartDrawer`, `Logo`, forms)
  - `components/home/` — homepage sections (one file per section, composed by `app/page.tsx`)
  - `components/product/` — product surfaces (`ProductCard`, `ProductGallery`, `AddToCart`)
  - `components/illustrations/` — inline SVG components (`Bee`, `Honeycomb`, `Underline`, etc.)
  - `components/ui/` — primitives (`Button`, `StickerBadge`, `Marquee`)

### Utilities — `src/lib/utils.ts`

- `cn(...)` — `clsx` + `tailwind-merge`. Use this for any conditional className composition; it correctly de-duplicates conflicting Tailwind utilities.
- `formatPrice(amount, currency)` — Intl currency formatting; drops cents when the value is a whole number. Use this everywhere prices render.
