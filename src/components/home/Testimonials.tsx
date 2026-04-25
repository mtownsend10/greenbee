import { Marquee } from "@/components/ui/Marquee";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  pattern: string;
};

const REVIEWS: Testimonial[] = [
  {
    quote:
      "I bought one. Then four. Then I made my mother-in-law buy two. The cling film drawer is officially decommissioned.",
    name: "Mara K.",
    city: "Portland, OR",
    pattern: "Garden",
  },
  {
    quote:
      "These have lasted nine months and they still smell faintly of honey when I pull them out. Witchcraft. Good witchcraft.",
    name: "Daniel R.",
    city: "Brooklyn, NY",
    pattern: "Eclipse",
  },
  {
    quote:
      "Wrapping a half-cucumber in something pretty has improved my mood about leftovers by a measurable amount.",
    name: "Priya S.",
    city: "Austin, TX",
    pattern: "Hearts",
  },
  {
    quote:
      "Look — I am not a crunchy person. But I am a person who hates throwing things away, and these have stopped that.",
    name: "Jules T.",
    city: "Chicago, IL",
    pattern: "Green Geo",
  },
  {
    quote:
      "Got the Green Garden as a gift. Cried a little. Wrapped a sandwich in it. Cried less.",
    name: "Aisha B.",
    city: "Boulder, CO",
    pattern: "Green Garden",
  },
];

const TILTS = [-2, 1, -1, 2, -1.5];
const TONES = ["bg-honey-light", "bg-rose", "bg-sky", "bg-cream", "bg-honey-light"];

export function Testimonials() {
  const items = REVIEWS.map((r, i) => (
    <article
      key={i}
      className={`${TONES[i % TONES.length]} border-2 border-ink rounded-2xl p-6 shadow-[6px_6px_0_0_var(--ink)] w-[320px] sm:w-[380px] flex flex-col gap-4 whitespace-normal`}
      style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-honey-dark text-xl">★★★★★</span>
        <span className="font-hand text-honey-dark text-lg">{r.pattern}</span>
      </div>
      <p className="font-display text-xl leading-snug break-words">
        &ldquo;{r.quote}&rdquo;
      </p>
      <p className="mt-auto font-body text-sm text-ink/70">
        — <span className="font-semibold">{r.name}</span>, {r.city}
      </p>
    </article>
  ));

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <p className="font-hand text-2xl text-coral mb-2">unsolicited postcards</p>
        <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95] max-w-3xl">
          Things people keep telling us, <span className="italic text-forest">unprompted.</span>
        </h2>
      </header>

      <div className="py-4">
        <Marquee
          items={items}
          itemClassName="px-3"
          separator={<span className="w-6" aria-hidden />}
        />
      </div>
    </section>
  );
}
