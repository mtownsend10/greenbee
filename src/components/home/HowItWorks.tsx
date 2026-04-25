import { Arrow } from "@/components/illustrations/Arrow";
import { Bee } from "@/components/illustrations/Bee";

const STEPS = [
  {
    n: "01",
    title: "Wrap",
    body:
      "Warm the wrap in your hands — body heat softens the beeswax. Press it around your bowl, sandwich, or that lonely lemon half.",
    accent: "bg-honey",
    icon: (
      <svg viewBox="0 0 100 100" className="size-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="50" cy="60" rx="36" ry="10" fill="#FCD66B" stroke="#1A1A1A" />
        <path d="M14 60 Q 30 25 50 25 Q 70 25 86 60" fill="#F4B324" stroke="#1A1A1A" />
        <path d="M44 25 Q 50 18 56 25" stroke="#1A1A1A" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Wash",
    body:
      "Cool water, mild soap, a soft cloth. Skip the dishwasher — heat is the only thing that breaks them.",
    accent: "bg-sky",
    icon: (
      <svg viewBox="0 0 100 100" className="size-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 22 L 70 22 L 64 78 L 36 78 Z" fill="#B9DBE5" stroke="#1A1A1A" />
        <path d="M50 30 Q 56 38 50 46 Q 44 38 50 30 Z" fill="#FFFAEB" stroke="#1A1A1A" />
        <circle cx="44" cy="58" r="3" fill="#1A1A1A" />
        <circle cx="58" cy="64" r="2" fill="#1A1A1A" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Reuse",
    body:
      "Hang to dry, fold for next time. Each wrap lasts 12+ months. When it's done, snip it up and toss it in the compost.",
    accent: "bg-leaf",
    icon: (
      <svg viewBox="0 0 100 100" className="size-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 50 A 30 30 0 1 1 50 80" fill="none" stroke="#1A1A1A" />
        <path d="M50 80 L 38 75 L 44 90 Z" fill="#1A1A1A" />
        <path d="M38 38 Q 50 28 62 38" stroke="#5B8A3A" />
        <path d="M40 50 Q 50 42 60 50" stroke="#5B8A3A" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 bg-cream-deep border-y-2 border-ink overflow-hidden">
      <div className="absolute -top-10 right-10 rotate-12 opacity-40 pointer-events-none">
        <Bee size={140} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-hand text-2xl text-coral mb-2">it&apos;s really this simple</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl leading-[0.95] tracking-tighter">
            Three steps. <br />
            <span className="italic text-forest">A whole lot less plastic.</span>
          </h2>
        </header>

        <ol className="grid md:grid-cols-3 gap-12 md:gap-6 relative">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative text-center">
              <div className="inline-flex flex-col items-center">
                <div className={`${step.accent} size-32 rounded-full border-2 border-ink shadow-[6px_6px_0_0_var(--ink)] inline-flex items-center justify-center mb-6 text-ink`}>
                  {step.icon}
                </div>
                <p className="font-display font-bold text-honey-dark tabular-nums text-lg tracking-widest">
                  {step.n}
                </p>
                <h3 className="font-display font-black text-4xl mt-1 mb-3">{step.title}</h3>
                <p className="font-body text-base text-ink/75 max-w-xs leading-relaxed">
                  {step.body}
                </p>
              </div>

              {/* Connector arrows between steps */}
              {i < STEPS.length - 1 && (
                <Arrow
                  variant="wiggle"
                  className="hidden md:block absolute top-12 -right-10 w-20 text-ink/40 rotate-[-10deg]"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
