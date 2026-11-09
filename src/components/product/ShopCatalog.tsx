import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { getAllProducts, isBreadBag } from "@/lib/shopify/client";
import type { Product } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";

export type ShopCategory = "all" | "wraps" | "bread-bags";

const CATEGORIES: Record<
  ShopCategory,
  { href: string; tab: string; kicker: string; lead: string; accent: string; tail: string; blurb: string }
> = {
  all: {
    href: "/shop",
    tab: "All",
    kicker: "the whole bunch",
    lead: "Shop every",
    accent: "pattern",
    tail: "we make.",
    blurb:
      "Every 3-pack is $22, or grab single wraps from $6 and a 12 × 17\" bread bag for your loaf. Everything ships anywhere in the US. Mix patterns. Match moods.",
  },
  wraps: {
    href: "/shop/wraps",
    tab: "Wraps",
    kicker: "for bowls, cheese & half-lemons",
    lead: "Beeswax",
    accent: "wraps",
    tail: "for everything.",
    blurb:
      "Every 3-pack is $22 — small, medium and large — or grab single wraps from $6. Mix patterns. Match moods. They're all the same wraps under the hood.",
  },
  "bread-bags": {
    href: "/shop/bread-bags",
    tab: "Bread bags",
    kicker: "for the whole loaf",
    lead: "Bread bags",
    accent: "for every",
    tail: "loaf.",
    blurb:
      "A roomy 12 × 17 in, $28 each. If a sandwich loaf fits (and it does), so will your sourdough boule, baguette or banana bread. Keeps crust crusty without the plastic.",
  },
};

const GRID = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16";

function Grid({ products, offset = 0 }: { products: Product[]; offset?: number }) {
  return (
    <div className={GRID}>
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i + offset} />
      ))}
    </div>
  );
}

export async function ShopCatalog({ category }: { category: ShopCategory }) {
  const products = await getAllProducts();
  const wraps = products.filter((p) => !isBreadBag(p));
  const breadBags = products.filter(isBreadBag);
  const counts: Record<ShopCategory, number> = { all: products.length, wraps: wraps.length, "bread-bags": breadBags.length };
  const copy = CATEGORIES[category];

  return (
    <div className="relative">
      <header className="relative bg-honeycomb border-b-2 border-ink overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
          <div>
            <p className="font-hand text-3xl text-coral mb-2">{copy.kicker}</p>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.92]">
              {copy.lead} <br />
              <span className="italic text-forest">{copy.accent}</span>{" "}
              <span className="relative inline-block">
                {copy.tail}
                <Underline variant="swoop" className="absolute -bottom-3 left-0 w-full text-honey" />
              </span>
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80 max-w-xl">{copy.blurb}</p>
          </div>
          <div className="self-center justify-self-end hidden md:block">
            <Bee size={180} className="text-ink rotate-[-10deg]" />
          </div>
        </div>
      </header>

      <nav aria-label="Shop categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 flex flex-wrap gap-2">
        {(Object.keys(CATEGORIES) as ShopCategory[]).map((key) => (
          <Link
            key={key}
            href={CATEGORIES[key].href}
            aria-current={key === category ? "page" : undefined}
            className={cn(
              "px-4 py-2 rounded-full border-2 border-ink font-display font-semibold transition-colors",
              key === category ? "bg-honey shadow-[3px_3px_0_0_var(--ink)]" : "bg-paper hover:bg-honey-light",
            )}
          >
            {CATEGORIES[key].tab}
            <span className="ml-2 font-body font-normal text-sm text-ink/70 tabular-nums">{counts[key]}</span>
          </Link>
        ))}
      </nav>

      {category === "all" ? (
        <>
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter">Wraps</h2>
              <Link
                href="/shop/wraps"
                className="font-display font-semibold underline underline-offset-4 decoration-honey decoration-4 hover:text-forest whitespace-nowrap"
              >
                Just wraps →
              </Link>
            </div>
            <Grid products={wraps} />
          </section>

          {breadBags.length > 0 && (
            <section id="bread-bags" className="scroll-mt-24 bg-honey-light border-y-2 border-ink">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-end justify-between gap-6 mb-10">
                  <div>
                    <p className="font-hand text-2xl text-forest mb-1">for the whole loaf</p>
                    <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter">Bread bags</h2>
                  </div>
                  <Link
                    href="/shop/bread-bags"
                    className="font-display font-semibold underline underline-offset-4 decoration-honey-dark decoration-4 hover:text-forest whitespace-nowrap"
                  >
                    Just bread bags →
                  </Link>
                </div>
                <Grid products={breadBags} offset={1} />
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Grid products={category === "wraps" ? wraps : breadBags} />
        </section>
      )}
    </div>
  );
}
