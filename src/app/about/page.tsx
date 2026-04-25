import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Bee } from "@/components/illustrations/Bee";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { Stamp } from "@/components/illustrations/Stamp";
import { Underline } from "@/components/illustrations/Underline";
import { Honeycomb } from "@/components/illustrations/Honeycomb";
import { buttonVariants } from "@/components/ui/Button";
import { StickerBadge } from "@/components/ui/StickerBadge";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Hand-pressed beeswax wraps from a small kitchen in Bend, Oregon. Here's how we got here.",
};

const TIMELINE = [
  {
    year: "2019",
    title: "One half-onion too many",
    body: "Sage stares at a slice of onion wrapped in cling film for the fourth time that week. Decides this is no longer a life she will accept.",
  },
  {
    year: "2020",
    title: "First batch in the kitchen",
    body: "Twelve wraps. Some too waxy, some not waxy enough. All gifted to friends. All used until they fell apart.",
  },
  {
    year: "2022",
    title: "Moved into the barn",
    body: "We stopped doing this on the kitchen counter. Sourced organic cotton from a mill in NC and beeswax from three apiaries within 50 miles.",
  },
  {
    year: "2024",
    title: "1,200 kitchens",
    body: "We crossed 1,200 customers. Most of them tell us about it in postcards. We keep them all.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 bg-honeycomb opacity-50 pointer-events-none" />
        <div className="absolute -top-16 right-10 opacity-20">
          <Honeycomb cellSize={50} rows={4} cols={6} className="text-forest" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 text-center">
          <p className="font-hand text-2xl text-coral mb-4">made by hand · made on purpose</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.92] max-w-4xl mx-auto">
            We started this because of{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">one onion.</span>
              <Underline variant="double" className="absolute -bottom-3 left-0 w-full text-honey" />
            </span>
          </h1>
          <p className="mt-8 font-body text-xl text-ink/80 max-w-2xl mx-auto leading-relaxed">
            That&apos;s really the whole story. The rest is just five years of figuring out how to make
            wraps that don&apos;t crack, don&apos;t reek, and last longer than the produce they&apos;re wrapping.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <StickerBadge tone="honey" rotate={-4}>1,200+ kitchens</StickerBadge>
            <StickerBadge tone="forest" rotate={3}>Made in Bend, OR</StickerBadge>
            <StickerBadge tone="coral" rotate={-2}>0% plastic, ever</StickerBadge>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 bg-honey border-wobble-2 border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]" />
            <div className="absolute inset-6 rounded-3xl overflow-hidden border-2 border-ink bg-paper">
              <Image
                src="/products/photos/eclipse.png"
                alt="Beeswax wrap detail"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
            </div>
            <Bee
              size={120}
              className="absolute -top-8 -right-6 rotate-[20deg]"
            />
          </div>

          <div>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
              Five ingredients. <br />
              <span className="italic text-forest">No sixth one.</span>
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Organic cotton",
                  body: "Milled in North Carolina from US-grown organic fiber. Soft enough to fold, sturdy enough to wrap a watermelon half.",
                  color: "bg-cream",
                },
                {
                  title: "Real beeswax",
                  body: "From three small apiaries within 50 miles of Bend. We pay above market because the bees deserve it.",
                  color: "bg-honey-light",
                },
                {
                  title: "Damar resin",
                  body: "Adds the cling. Tree-derived, food-safe, and the reason a wrap remembers the shape of your bowl.",
                  color: "bg-leaf/30",
                },
                {
                  title: "Jojoba oil",
                  body: "Cold-pressed. Keeps the wraps soft, antimicrobial, and folds nice instead of cracking.",
                  color: "bg-rose",
                },
                {
                  title: "Coconut oil",
                  body: "Adds a touch of pliability and a barely-there sweetness. Helps the wraps mold around odd shapes without protest.",
                  color: "bg-sky",
                },
              ].map((i, idx) => (
                <li
                  key={i.title}
                  className={`${i.color} border-2 border-ink rounded-2xl p-5 shadow-[4px_4px_0_0_var(--ink)] flex gap-4 items-start`}
                >
                  <span className="font-display font-black text-3xl text-forest tabular-nums leading-none">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-2xl leading-none">
                      {i.title}
                    </p>
                    <p className="mt-2 font-body text-ink/80 leading-relaxed">
                      {i.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream-deep border-y-2 border-ink py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-16 max-w-2xl">
            <p className="font-hand text-2xl text-coral mb-2">how we got here</p>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
              Five years, four <em className="text-forest">good</em> milestones,
              one ridiculous amount of beeswax.
            </h2>
          </header>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((item, i) => (
              <li
                key={item.year}
                className="bg-paper border-2 border-ink rounded-2xl p-6 shadow-[6px_6px_0_0_var(--ink)] relative"
                style={{ transform: `rotate(${[-1.5, 1, -1, 1.5][i]}deg)` }}
              >
                <p className="font-hand text-3xl text-honey-dark">{item.year}</p>
                <h3 className="font-display font-bold text-2xl mt-1 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm text-ink/75 leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Stamp
          text="From the founders"
          size={140}
          innerLabel={<span className="text-honey-dark text-xl font-display">Sage<br/>+ Pete</span>}
          className="mx-auto text-honey-dark mb-8"
        />
        <p className="font-display text-3xl sm:text-4xl leading-snug max-w-3xl mx-auto">
          &ldquo;If you&apos;re reading this — thank you. Every wrap that goes out
          the door means a little less plastic in someone&apos;s drawer. That&apos;s
          the whole point.&rdquo;
        </p>
        <p className="mt-6 font-hand text-3xl text-coral">— Sage &amp; Pete</p>

        <div className="mt-16 flex justify-center">
          <Link
            href="/shop"
            className={buttonVariants({ variant: "primary", size: "xl" })}
          >
            Browse the wraps →
          </Link>
        </div>

        <LeafSprig className="absolute bottom-10 left-10 w-20 rotate-12 hidden md:block" />
        <LeafSprig className="absolute top-20 right-10 w-16 -rotate-12 hidden md:block" />
      </section>
    </div>
  );
}
