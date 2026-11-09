import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { getAllProducts, isBreadBag } from "@/lib/shopify/client";

export async function BreadBags() {
  const bags = (await getAllProducts()).filter(isBreadBag);
  if (!bags.length) return null;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-honey-light border-y-2 border-ink">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <StickerBadge tone="coral" rotate={-6}>New</StickerBadge>
              <p className="font-hand text-2xl text-forest">for the whole loaf</p>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-none">
              Beeswax{" "}
              <span className="relative inline-block">
                <span className="italic text-forest">bread bags</span>
                <Underline
                  variant="swoop"
                  className="absolute -bottom-3 left-0 w-full text-honey-dark"
                />
              </span>
              .
            </h2>
            <p className="mt-4 font-body text-lg text-ink/70 max-w-xl">
              A roomy 12 × 17 in — if a sandwich loaf fits (and it does), so will
              your sourdough boule, baguette or banana bread. Keeps crust crusty
              without the plastic.
            </p>
          </div>
          <Link
            href="/shop#bread-bags"
            className="font-display font-semibold text-lg underline underline-offset-4 decoration-honey-dark decoration-4 hover:text-forest whitespace-nowrap"
          >
            Shop bread bags →
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-y-16">
          {bags.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
