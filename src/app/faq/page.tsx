import type { Metadata } from "next";
import Link from "next/link";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Honest answers about beeswax wraps — what they do, what they don't, and how to keep them happy.",
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How long do they actually last?",
    a: "Twelve months of regular use, give or take. We've had customers run their first set 16+ months — the cling fades a little, but they keep working. When yours feels too tired, snip it up and toss it in the compost.",
  },
  {
    q: "Can I wrap raw meat with them?",
    a: "We don't recommend it. Beeswax wraps work beautifully for produce, cheese, bread, sandwiches, and covering bowls. For raw meat, stick to a sealed container.",
  },
  {
    q: "Are they actually compostable?",
    a: "Yes — every ingredient is plant or bee-derived. At the end of life, snip them into strips and add them to a backyard compost pile. They'll break down within a season.",
  },
  {
    q: "How do I clean them?",
    a: "Cool water, mild dish soap, a soft cloth. Hang to dry. Avoid the dishwasher and avoid hot water — heat is what melts the wax.",
  },
  {
    q: "What's in the wax blend?",
    a: "Beeswax (from three small apiaries near our Bend workshop), damar resin (for the cling), and jojoba + coconut oils (for flexibility and softness). All on top of 100% organic cotton. That's it.",
  },
  {
    q: "Do they smell?",
    a: "Faintly, yes — warm honey with the slightest sweet-resin note. Most people love it. The smell fades over a few weeks of use.",
  },
  {
    q: "Where do you ship?",
    a: "Anywhere in the US. International shipping is on the roadmap for late 2026. Free shipping on orders $30+.",
  },
  {
    q: "What if I don't love them?",
    a: "Reach out within 30 days and we'll make it right — refund, replacement, whatever feels fair. We've never had to argue about it.",
  },
];

export default function FaqPage() {
  return (
    <div className="relative">
      <section className="border-b-2 border-ink bg-honeycomb">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 text-center relative">
          <p className="font-hand text-2xl text-coral mb-3">honest answers, no fluff</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl tracking-tighter leading-[0.92]">
            Things you've{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">already wondered</span>
              <Underline variant="swoop" className="absolute -bottom-3 left-0 w-full text-honey" />
            </span>{" "}
            about beeswax wraps.
          </h1>
          <Bee size={100} className="absolute top-10 right-10 rotate-12 hidden md:block" />
          <Bee size={70} className="absolute bottom-4 left-12 -rotate-12 hidden md:block" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <ul className="flex flex-col gap-4">
          {FAQS.map((item, i) => (
            <li
              key={i}
              className="bg-paper border-2 border-ink rounded-2xl shadow-[6px_6px_0_0_var(--ink)] overflow-hidden"
            >
              <details className="group">
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 hover:bg-honey-light/50 transition-colors">
                  <span className="font-display font-bold text-xl sm:text-2xl leading-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="size-9 shrink-0 inline-flex items-center justify-center rounded-full bg-honey border-2 border-ink font-display font-bold text-xl group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 font-body text-ink/80 text-base leading-relaxed border-t-2 border-dashed border-ink/20 pt-4">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center bg-forest text-cream border-2 border-ink rounded-3xl p-10 shadow-[8px_8px_0_0_var(--ink)]">
          <p className="font-hand text-2xl text-honey-light mb-2">still have a question?</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl">We answer email like real people.</h2>
          <p className="mt-3 font-body text-cream/80">Usually within a day. Often the same hour.</p>
          <div className="mt-6 inline-block">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "honey", size: "lg" })}
            >
              Drop us a line →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
