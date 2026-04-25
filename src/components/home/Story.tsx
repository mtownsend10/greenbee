import Image from "next/image";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { Stamp } from "@/components/illustrations/Stamp";
import { Underline } from "@/components/illustrations/Underline";
import { StickerBadge } from "@/components/ui/StickerBadge";

const STATS = [
  { n: "1,200+", label: "kitchens served" },
  { n: "47k", label: "feet of cling film replaced" },
  { n: "100%", label: "compostable" },
  { n: "12mo+", label: "lifespan per wrap" },
];

export function Story() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative aspect-[5/6] max-w-md mx-auto w-full">
          <div className="absolute inset-0 bg-leaf border-wobble-2 border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]" />
          <div className="absolute -top-4 -left-4 size-32 bg-honey rounded-full border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] flex items-center justify-center font-display font-bold text-2xl text-ink rotate-[-12deg]">
            Est.
            <br />
            2019
          </div>
          <div className="absolute inset-6 rounded-3xl overflow-hidden border-2 border-ink bg-paper">
            <Image
              src="/products/photos/green-garden.png"
              alt="Green Garden wraps"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <StickerBadge
            tone="cream"
            rotate={6}
            className="absolute -bottom-4 right-2 !px-4 !py-2"
          >
            From our kitchen, to yours
          </StickerBadge>
          <LeafSprig className="absolute -top-8 right-8 w-16 rotate-12" />
        </div>

        {/* Copy */}
        <div className="relative">
          <p className="font-hand text-2xl text-coral mb-2">the short version</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
            Started with a{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">half-onion.</span>
              <Underline
                variant="double"
                className="absolute -bottom-2 left-0 w-full text-honey"
              />
            </span>
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/80 max-w-xl">
            One day in 2019, our founder Nicole stared at a slice of red onion
            wrapped in its fourteenth piece of cling film and decided that was
            enough of <em>that</em>. A pot of beeswax, some old fabric scraps,
            and a hot iron later — Green Bee was a thing.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink/80 max-w-xl">
            Nicole still presses every wrap by hand out of her garage in Bend,
            in small batches that smell like a beehive in a citrus grove.
            We&apos;re weirdly into it.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 max-w-md">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display font-black text-4xl text-forest tabular-nums">
                  {s.n}
                </dt>
                <dd className="font-body text-sm text-ink/65 mt-0.5">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="absolute -top-6 -right-6 hidden lg:block text-honey-dark">
            <Stamp
              text="Made by hand"
              size={120}
              innerLabel={
                <span className="text-honey-dark font-display text-xl">
                  Bee
                  <br />
                  Made
                </span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
