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

This is a **headless storefront marketing site** for Green Bee Wraps (handmade beeswax wraps). It is an App Router site with a mocked Shopify data layer; the cart is client-side only and checkout is a placeholder until real Shopify Storefront API credentials are wired in.

### Data layer — `src/lib/shopify/`

- `client.ts` is the **single swap point**. It exports `getAllProducts`, `getProductByHandle`, `getFeaturedProducts`. When `SHOPIFY_STORE_DOMAIN` is unset (always, today) it returns `MOCK_PRODUCTS`. Replacing the bodies with Storefront GraphQL fetches is the only file change needed to go live.
- **Components must never import `mock.ts` directly** — always go through `client.ts`. Keeping that boundary intact is the whole point of the abstraction.
- `types.ts` mirrors the Shopify Storefront GraphQL shape (`Product`, `ProductVariant`, `Money`, `Cart`, `CartLine`). It also adds three marketing-only extensions on `Product`: `patternColor`, `patternAccent`, `highlights`. These have no Shopify equivalent and will need to live in metafields or a CMS once real data is wired up.

### Cart — `src/lib/cart/context.tsx`

- Provider mounted in `src/app/layout.tsx`; consumed via `useCart()`.
- State is a `useReducer` over `LocalLine[]`, persisted to `localStorage` under `gbw.cart.v1` (hydrated post-mount to avoid SSR mismatch).
- `checkoutUrl` is a hard-coded placeholder (`/checkout-placeholder`). When Shopify is wired up this should become the real `cart.checkoutUrl` from a Storefront `cartCreate`/`cartLinesAdd` mutation.
- `addItem` opens the cart drawer as a side effect — intentional UX, don't strip it.

### Routes — `src/app/`

- `/` (home), `/shop`, `/shop/[handle]`, `/about`, `/faq`, `/contact`.
- Product page uses `generateStaticParams` over `getAllProducts()` for SSG, and **Next 15+ async `params`** (`type Params = Promise<{ handle: string }>` — must be awaited).
- `sitemap.ts` and `robots.ts` are MetadataRoute route handlers; the sitemap pulls product handles dynamically.
- `next.config.ts` enables `dangerouslyAllowSVG` for `next/image` — this is only safe because images come from `/public`. Do **not** loosen `remotePatterns` without a CSP review.

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
