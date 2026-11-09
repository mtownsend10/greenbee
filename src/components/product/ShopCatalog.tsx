import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { getAllProducts, isBreadBag } from "@/lib/shopify/client";
import type { Product } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";

export type ShopCategory = "wraps" | "bread-bags";

const CATEGORIES: Record<
  ShopCategory,
  { href: string; tab: string; kicker: string; lead: string; accent: string; tail: string; blurb: string }
> = {
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
  const counts: Record<ShopCategory, number> = { wraps: wraps.length, "bread-bags": breadBags.length };
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
          {category === "bread-bags" ? (
            <BreadBagCollage />
          ) : (
            <div className="self-center justify-self-end hidden md:block">
              <Bee size={180} className="text-ink rotate-[-10deg]" />
            </div>
          )}
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Grid products={category === "wraps" ? wraps : breadBags} />
      </section>
    </div>
  );
}

/** Bread bag in use, with the packaged bag tucked in front and the bee buzzing past. */
function BreadBagCollage() {
  return (
    <div className="relative mx-auto lg:mx-0 lg:justify-self-end w-full max-w-xs sm:max-w-sm mt-6 lg:mt-0">
      <div className="relative aspect-[4/5]">
        <div className="absolute inset-0 bg-coral border-wobble-2 border-2 border-ink shadow-[8px_8px_0_0_var(--ink)] rotate-3" />
        <div className="absolute inset-4 rounded-3xl overflow-hidden border-2 border-ink bg-paper -rotate-2">
          <Image
            src="/products/photos/bread-bag-in-use.jpg"
            alt="A sourdough loaf tucked inside a Cosmic Skyway beeswax bread bag"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 24rem"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute -bottom-8 -left-6 sm:-left-10 w-28 sm:w-32 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-ink bg-paper shadow-[4px_4px_0_0_var(--ink)] rotate-[-8deg]">
        <Image
          src="/products/photos/bread-bag-packaged.jpg"
          alt="A Sky Parade beeswax bread bag in its paper label"
          fill
          sizes="8rem"
          className="object-cover"
        />
      </div>
      <StickerBadge tone="honey" rotate={8} className="absolute -top-4 -right-2 !px-4 !py-2">
        Fits the whole loaf!
      </StickerBadge>
      <Bee size={84} className="absolute -top-10 -left-8 text-ink rotate-[-14deg] animate-float hidden sm:block" />
    </div>
  );
}
