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
    "Hand-pressed beeswax wraps from Bend, Oregon, made by someone with years of wrap-making behind her.",
};

const LESSONS = [
  {
    label: "lesson 01",
    title: "The cotton matters",
    body: "Tightly woven organic cotton takes the wax evenly and holds it. Cheap fabric flakes, cracks, and gives up early.",
  },
  {
    label: "lesson 02",
    title: "It's all in the blend",
    body: "Too much wax and it cracks. Too little resin and it won't cling. Getting the balance right is most of the craft.",
  },
  {
    label: "lesson 03",
    title: "Care is everything",
    body: "Cool water, mild soap, no heat. Treat a wrap that way and it'll keep working for years.",
  },
  {
    label: "lesson 04",
    title: "Small batches win",
    body: "Pressing by hand means every single wrap gets looked at before it leaves the garage. No shortcuts.",
  },
  {
    label: "lesson 05",
    title: "Every wrap counts",
    body: "One good wrap quietly replaces roll after roll of cling film. Multiply that by a kitchen, then a neighborhood.",
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
            Less plastic,{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">one wrap at a time.</span>
              <Underline variant="swoop" className="absolute top-full mt-3 left-0 w-full text-honey" />
            </span>
          </h1>
          <p className="mt-14 font-body text-xl text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Nicole has spent the better part of a decade making beeswax wraps and watching them
            work — keeping food fresh, lasting for years, and quietly replacing roll after roll of
            cling film. Green Bee is everything she&apos;s learned, pressed by hand in Bend, Oregon.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <StickerBadge tone="honey" rotate={-4}>10 years of wrap-making</StickerBadge>
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
                  body: "Domestic, all-natural beeswax — nothing synthetic, nothing blended in. It's what gives every wrap its gentle grip and faint honey smell.",
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
            <p className="font-hand text-2xl text-coral mb-2">what the years taught us</p>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
              Five <em className="text-forest">hard-won</em> lessons,
              one ridiculous amount of beeswax.
            </h2>
          </header>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {LESSONS.map((item, i) => (
              <li
                key={item.label}
                className="bg-paper border-2 border-ink rounded-2xl p-6 shadow-[6px_6px_0_0_var(--ink)] relative"
                style={{ transform: `rotate(${[-1.5, 1, -1, 1.5, -1][i]}deg)` }}
              >
                <p className="font-hand text-3xl text-honey-dark">{item.label}</p>
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
          text="From the founder"
          size={140}
          innerLabel={<span className="text-honey-dark text-xl font-display">Nicole</span>}
          className="mx-auto text-honey-dark mb-8"
        />
        <p className="font-display text-3xl sm:text-4xl leading-snug max-w-3xl mx-auto">
          &ldquo;If you&apos;re reading this — thank you. Every wrap that goes out
          my garage door means a little less plastic in someone&apos;s drawer.
          That&apos;s the whole point.&rdquo;
        </p>
        <p className="mt-6 font-hand text-3xl text-coral">— Nicole</p>

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
