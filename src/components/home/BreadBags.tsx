import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { getAllProducts, isBreadBag } from "@/lib/shopify/client";

const BREAD_STEPS = [
  {
    title: "Slide your loaf in",
    body: "Sourdough boule, sandwich loaf, baguette or banana bread. Most loaves fit with room to spare.",
  },
  {
    title: "Fold & press shut",
    body: "Fold the top over and press with warm hands. The beeswax grips and holds it closed.",
  },
  {
    title: "Keep it on the counter",
    body: "Beeswax lets bread breathe, so the crust stays crusty and the crumb stays soft for days. No soggy plastic.",
  },
  {
    title: "Shake, rinse, repeat",
    body: "Shake out the crumbs, rinse with cool water and mild soap, air dry. Good for years, then compost it.",
  },
];

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
            href="/shop/bread-bags"
            className="font-display font-semibold text-lg underline underline-offset-4 decoration-honey-dark decoration-4 hover:text-forest whitespace-nowrap"
          >
            Shop bread bags →
          </Link>
        </header>

        {/* What a bread bag is, and how to use it */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center mb-20">
          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
            <div className="absolute inset-0 bg-honey border-wobble-2 border-2 border-ink shadow-[8px_8px_0_0_var(--ink)] rotate-2" />
            <div className="absolute inset-5 rounded-3xl overflow-hidden border-2 border-ink bg-paper">
              <Image
                src="/products/photos/bread-bag-loaf.jpg"
                alt="A sourdough loaf tucked inside a Flower Galaxy beeswax bread bag"
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover"
              />
            </div>
            <StickerBadge tone="cream" rotate={-6} className="absolute -bottom-4 -left-2 !px-4 !py-2">
              12 × 17 in · $28
            </StickerBadge>
          </div>

          <div>
            <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-tight">
              What&apos;s a bread bag?
            </h3>
            <p className="mt-3 font-body text-lg text-ink/80 max-w-xl leading-relaxed">
              It&apos;s our beeswax wrap, made into a roomy bag just for bread. The same organic
              cotton, beeswax, resin and oils, just big enough to hold the whole loaf instead of
              half a lemon.
            </p>
            <ol className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {BREAD_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="shrink-0 size-10 rounded-full bg-paper border-2 border-ink shadow-[3px_3px_0_0_var(--ink)] inline-flex items-center justify-center font-display font-bold tabular-nums">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-xl leading-tight">{step.title}</p>
                    <p className="mt-1 font-body text-ink/75 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-y-16">
          {bags.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
