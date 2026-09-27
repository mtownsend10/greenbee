import type { Metadata } from "next";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { buttonVariants } from "@/components/ui/Button";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Green Bee Wraps is looking for wholesale partners across the US. Handmade beeswax wraps for thoughtful independent shops, co-ops, and boutiques.",
};

const REASONS = [
  {
    title: "Handmade, not mass-made",
    body: "Every wrap is pressed by hand in small batches in Bend, Oregon. It's a product with a real story your customers can feel good about.",
    tone: "bg-honey-light",
  },
  {
    title: "Not an Amazon brand",
    body: "We'd rather grow with independent shops than chase a marketplace listing. When you carry Green Bee, you're supporting a small maker, not a warehouse.",
    tone: "bg-leaf/30",
  },
  {
    title: "Easy to love, easy to gift",
    body: "Bright patterns, a simple story, and a clear plastic-free swap. Wraps practically sell themselves at the register and make an easy gift.",
    tone: "bg-sky",
  },
  {
    title: "Years of know-how",
    body: "Nicole has been making beeswax wraps for the better part of a decade. You're getting a product that's been tested in real kitchens for years.",
    tone: "bg-rose",
  },
];

const SHOP_TYPES = [
  "Grocery stores & co-ops",
  "Zero-waste & refill shops",
  "Gift & home boutiques",
  "Kitchen & cookware stores",
  "Farm stands & markets",
  "Cafés & bakeries",
];

export default function WholesalePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-honeycomb">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 text-center">
          <p className="font-hand text-2xl text-coral mb-4">for thoughtful shops everywhere</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.92] max-w-4xl mx-auto">
            Let&apos;s be wholesale{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">partners.</span>
              <Underline variant="swoop" className="absolute top-full mt-2 left-0 w-full text-honey" />
            </span>
          </h1>
          <p className="mt-14 font-body text-xl text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Green Bee isn&apos;t an Amazon brand, and we never want to be. We&apos;re a small,
            handmade business, and we&apos;d much rather see our wraps on the shelves of
            thoughtful independent stores, the kind of place where someone knows the story
            behind every product. If that sounds like your shop, we&apos;d love to be
            considered.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <StickerBadge tone="honey" rotate={-4}>Wholesale partners wanted</StickerBadge>
            <StickerBadge tone="forest" rotate={3}>Anywhere in the US</StickerBadge>
            <StickerBadge tone="coral" rotate={-2}>Handmade in Bend, OR</StickerBadge>
          </div>
          <Bee size={100} className="absolute top-10 right-10 rotate-12 hidden md:block" />
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <header className="mb-12 max-w-2xl">
          <p className="font-hand text-2xl text-coral mb-2">why stock green bee</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
            Small maker. <span className="italic text-forest">Big-hearted shops.</span>
          </h2>
        </header>
        <ul className="grid sm:grid-cols-2 gap-6">
          {REASONS.map((r) => (
            <li
              key={r.title}
              className={`${r.tone} border-2 border-ink rounded-2xl p-6 shadow-[6px_6px_0_0_var(--ink)]`}
            >
              <h3 className="font-display font-bold text-2xl leading-tight">{r.title}</h3>
              <p className="mt-3 font-body text-ink/80 leading-relaxed">{r.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* WHO */}
      <section className="bg-cream-deep border-y-2 border-ink py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="font-hand text-2xl text-coral mb-2">who we&apos;d love to hear from</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter leading-[0.95]">
            Shops of every shape, <span className="italic text-forest">all across the US.</span>
          </h2>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {SHOP_TYPES.map((t) => (
              <li
                key={t}
                className="bg-paper border-2 border-ink rounded-full px-5 py-2.5 font-display font-semibold shadow-[3px_3px_0_0_var(--ink)]"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-lg text-ink/75">
            Don&apos;t see your kind of shop? Reach out anyway. If it&apos;s a good fit for
            plastic-free kitchens, we&apos;re interested.
          </p>
          <LeafSprig className="absolute -top-6 left-4 w-14 -rotate-12 hidden md:block" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center bg-forest text-cream border-2 border-ink rounded-3xl p-10 sm:p-14 shadow-[8px_8px_0_0_var(--ink)]">
          <p className="font-hand text-2xl text-honey-light mb-2">let&apos;s talk</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tighter">
            Interested in carrying Green Bee?
          </h2>
          <p className="mt-5 font-body text-lg text-cream/85 max-w-xl mx-auto">
            Email us with your store name, location, and website or Instagram, and tell us a
            little about your shop. We&apos;ll get back to you with wholesale pricing and
            details.
          </p>
          <p className="mt-6 font-display text-2xl sm:text-3xl break-all">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Wholesale%20inquiry`}
              className="underline underline-offset-4 decoration-honey decoration-4 hover:text-honey"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-8 inline-block">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Wholesale%20inquiry`}
              className={buttonVariants({ variant: "honey", size: "lg" })}
            >
              Email us about wholesale →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
