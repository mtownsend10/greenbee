import Link from "next/link";
import Image from "next/image";
import { Bee } from "@/components/illustrations/Bee";
import { Honeycomb } from "@/components/illustrations/Honeycomb";
import { Underline } from "@/components/illustrations/Underline";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { buttonVariants } from "@/components/ui/Button";
import { StickerBadge } from "@/components/ui/StickerBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 bg-honeycomb opacity-60 pointer-events-none" />
      <div className="absolute -top-12 -right-16 w-[500px] h-[500px] rounded-full bg-honey/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-leaf/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 relative z-10">
          <StickerBadge tone="cream" rotate={-3} className="mb-6">
            <span className="size-1.5 rounded-full bg-coral" />
            Keeps food fresh, naturally
          </StickerBadge>

          <h1 className="font-display font-black tracking-tighter text-[clamp(3rem,8vw,7rem)] leading-[0.92]">
            Wrap. <br />
            <span className="relative inline-block">
              <span className="italic font-light text-forest">Wash.</span>
              <Underline
                variant="swoop"
                className="absolute -bottom-3 left-0 w-full text-honey"
              />
            </span>{" "}
            <br />
            <span className="text-coral">Reuse.</span>
          </h1>

          <p className="mt-8 font-body text-lg sm:text-xl max-w-xl leading-relaxed text-ink/80">
            Handmade beeswax food wraps that keep bread, cheese, and produce
            fresh with a breathable seal. Organic cotton, beeswax, damar resin,
            and plant oils. That&apos;s it. That&apos;s the whole list.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Shop the wraps
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/about"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              How they&apos;re made
            </Link>
          </div>

          {/* tiny proof row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-body text-ink/70">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🌱</span>
              Five natural ingredients, 100% compostable
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🐝</span>
              Made in small batches in Bend, Oregon
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative aspect-square max-w-[560px] mx-auto w-full">
          {/* Honey backdrop */}
          <div className="absolute inset-4 bg-honey rounded-[2.5rem] border-2 border-ink shadow-[10px_10px_0_0_var(--ink)] rotate-[4deg] overflow-hidden">
            <Honeycomb cellSize={56} rows={8} cols={8} className="text-ink/15 absolute inset-0" />
          </div>

          {/* Hero product image */}
          <div className="absolute inset-10 rounded-3xl overflow-hidden border-2 border-ink shadow-[6px_6px_0_0_var(--ink)] bg-paper -rotate-2">
            <Image
              src="/products/photos/hero-bowl.png"
              alt="Hands pressing a Light Garden beeswax wrap over a bowl of salad"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Floating bees */}
          <div
            className="absolute -top-6 -left-6 animate-float text-ink"
            style={{ ["--r" as string]: "-12deg" }}
          >
            <Bee size={110} withTrail />
          </div>
          <div
            className="absolute -bottom-2 -right-4 animate-float text-ink"
            style={{ ["--r" as string]: "18deg", animationDelay: "1.4s" }}
          >
            <Bee size={80} />
          </div>

          {/* Sticker callout */}
          <StickerBadge
            tone="coral"
            rotate={8}
            className="absolute top-2 right-0 sm:right-4 text-base !px-5 !py-2.5"
          >
            Reusable for years
          </StickerBadge>

          {/* Leaf sprig */}
          <LeafSprig className="absolute top-1/3 -right-6 w-12 rotate-[28deg]" />
        </div>
      </div>
    </section>
  );
}
