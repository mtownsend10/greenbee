import Link from "next/link";
import Image from "next/image";
import { Bee } from "@/components/illustrations/Bee";
import { Honeycomb } from "@/components/illustrations/Honeycomb";
import { Stamp } from "@/components/illustrations/Stamp";
import { Underline } from "@/components/illustrations/Underline";
import { Arrow } from "@/components/illustrations/Arrow";
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
            Spring batch · just shipped
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
            <span className="font-hand text-honey-dark text-3xl sm:text-4xl ml-3 align-middle">
              forever &amp; ever
            </span>
          </h1>

          <p className="mt-8 font-body text-lg sm:text-xl max-w-xl leading-relaxed text-ink/80">
            Handmade beeswax food wraps that swap out a year of cling film for
            three sheets of organic cotton, beeswax, damar resin, and plant
            oils. That&apos;s it. That&apos;s the whole list.
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
              <span className="text-honey-dark text-lg">★★★★★</span>
              <span>4.9 from 1,200+ kitchens</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🐝</span>
              Made in small batches in Bend, Oregon
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative aspect-square max-w-[560px] mx-auto w-full">
          {/* Big honey blob */}
          <div className="absolute inset-0 bg-honey border-wobble border-4 border-ink shadow-[10px_10px_0_0_var(--ink)]" />

          {/* Honeycomb texture inside blob */}
          <div className="absolute inset-6 overflow-hidden border-wobble">
            <Honeycomb cellSize={56} rows={8} cols={8} className="text-ink/15 absolute inset-0" />
          </div>

          {/* Hero product image */}
          <div className="absolute inset-8 flex items-center justify-center">
            <div className="relative w-[88%] aspect-square rounded-3xl overflow-hidden border-2 border-ink shadow-[6px_6px_0_0_var(--ink)] bg-paper">
              <Image
                src="/products/photos/garden.png"
                alt="Garden 3-pack beeswax wraps"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating bees */}
          <div
            className="absolute -top-4 -left-6 animate-float text-ink"
            style={{ ["--r" as string]: "-12deg" }}
          >
            <Bee size={110} withTrail />
          </div>
          <div
            className="absolute bottom-2 -right-4 animate-float text-ink"
            style={{ ["--r" as string]: "18deg", animationDelay: "1.4s" }}
          >
            <Bee size={80} />
          </div>

          {/* Wax-seal stamp */}
          <div className="absolute -bottom-8 -left-8 animate-spin-slow text-forest">
            <Stamp
              text="Plastic-free"
              size={130}
              innerLabel={
                <span className="text-2xl font-bold text-forest leading-tight">
                  Bee
                  <br />
                  Loved
                </span>
              }
            />
          </div>

          {/* Sticker callout */}
          <StickerBadge
            tone="coral"
            rotate={8}
            className="absolute top-2 right-0 sm:right-4 text-base !px-5 !py-2.5"
          >
            $22 / 3-pack
          </StickerBadge>

          {/* Hand-drawn arrow */}
          <Arrow
            variant="swoop"
            className="absolute -bottom-12 right-12 w-32 text-ink hidden sm:block"
          />
          <span className="absolute -bottom-14 right-44 font-hand text-2xl text-ink hidden sm:block rotate-[-8deg]">
            try Hearts next ↗
          </span>

          {/* Leaf sprig */}
          <LeafSprig className="absolute top-1/3 -right-6 w-12 rotate-[28deg]" />
        </div>
      </div>
    </section>
  );
}
