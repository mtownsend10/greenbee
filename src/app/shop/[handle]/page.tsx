import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Leaf, Recycle, Sun } from "lucide-react";
import { getAllProducts, getProductByHandle } from "@/lib/shopify/client";
import { AddToCart } from "@/components/product/AddToCart";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { JsonLd, productSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";

type Params = Promise<{ handle: string }>;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return { title: "Not found" };
  const url = `${SITE_URL}/shop/${product.handle}`;
  const ogImage = `${SITE_URL}${product.featuredImage.url}`;
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${product.title} — Green Bee Wraps`,
      description: product.description,
      url,
      siteName: "Green Bee Wraps",
      images: [{ url: ogImage, width: 1600, height: 1600, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — Green Bee Wraps`,
      description: product.description,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) notFound();

  const all = await getAllProducts();
  const others = all.filter((p) => p.handle !== handle).slice(0, 3);

  const price = product.priceRange.minVariantPrice;
  const compare = product.compareAtPriceRange?.minVariantPrice;

  return (
    <article className="relative">
      <JsonLd data={productSchema(product)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Breadcrumbs */}
        <nav className="font-body text-sm text-ink/60 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">·</span>
          <Link href="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">·</span>
          <span className="text-ink">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery
            title={product.title}
            images={product.images}
            patternColor={product.patternColor}
          />

          {/* Detail */}
          <div className="relative">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((t) => (
                <StickerBadge
                  key={t}
                  tone={t === "bestseller" ? "honey" : t === "new" ? "coral" : "forest"}
                  rotate={-3}
                >
                  {t}
                </StickerBadge>
              ))}
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
              {product.title}
            </h1>

            <div className="mt-5 flex items-baseline gap-4">
              <span className="font-display font-black text-4xl tabular-nums">
                {formatPrice(price.amount, price.currencyCode)}
              </span>
              {compare && parseFloat(compare.amount) > parseFloat(price.amount) && (
                <span className="font-body text-lg text-ink/50 line-through tabular-nums">
                  {formatPrice(compare.amount, compare.currencyCode)}
                </span>
              )}
              <span className="font-hand text-xl text-honey-dark">
                3-pack · S/M/L
              </span>
            </div>

            <p className="mt-6 font-body text-lg leading-relaxed text-ink/80">
              {product.description}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
              <p className="font-body text-xs text-ink/55 mt-3 text-center sm:text-left">
                Free shipping on orders $30+ · Checkout securely via Shopify
              </p>
            </div>

            {/* Highlights */}
            <ul className="mt-10 grid sm:grid-cols-2 gap-3 text-sm font-body">
              {(product.highlights ?? []).map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 bg-paper border-2 border-ink rounded-xl px-3 py-2.5"
                >
                  <Check
                    size={16}
                    strokeWidth={3}
                    className="mt-0.5 text-forest shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Care icons */}
            <section className="mt-10 pt-8 border-t-2 border-dashed border-ink/30">
              <h2 className="font-display font-bold text-lg mb-4 uppercase tracking-wider text-ink/70">
                Care &amp; keeping
              </h2>
              <ul className="grid grid-cols-3 gap-3 text-center">
                <li className="bg-honey-light border-2 border-ink rounded-xl p-3">
                  <Sun className="mx-auto" size={22} strokeWidth={2.4} />
                  <p className="text-xs font-body mt-2 leading-tight">
                    Body heat <br />
                    softens it
                  </p>
                </li>
                <li className="bg-sky border-2 border-ink rounded-xl p-3">
                  <Leaf className="mx-auto" size={22} strokeWidth={2.4} />
                  <p className="text-xs font-body mt-2 leading-tight">
                    Cool wash, <br />
                    no dishwasher
                  </p>
                </li>
                <li className="bg-rose border-2 border-ink rounded-xl p-3">
                  <Recycle className="mx-auto" size={22} strokeWidth={2.4} />
                  <p className="text-xs font-body mt-2 leading-tight">
                    Compost when <br />
                    its time is up
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* You might also like */}
        <section className="mt-24">
          <header className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter">
              While you&apos;re at it…{" "}
              <span className="font-hand text-honey-dark text-3xl">try one of these</span>
            </h2>
            <Link
              href="/shop"
              className="font-display font-semibold underline underline-offset-4 decoration-honey decoration-4 whitespace-nowrap"
            >
              See all →
            </Link>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
            {others.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
