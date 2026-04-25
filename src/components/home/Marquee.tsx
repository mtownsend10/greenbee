import { Marquee } from "@/components/ui/Marquee";

const PHRASES = [
  "100% organic cotton",
  "Real beeswax + damar resin",
  "Jojoba & coconut oils",
  "Reusable for 12+ months",
  "Compostable to the core",
  "Plastic-free shipping",
  "Hand-pressed in Bend, Oregon",
];

export function HeroMarquee() {
  return (
    <div className="border-y-2 border-ink bg-honey text-ink py-3 -mt-4 lg:-mt-6 relative z-20">
      <Marquee
        items={PHRASES.map((p, i) => (
          <span
            key={i}
            className="font-display font-bold uppercase tracking-wider text-base sm:text-lg"
          >
            {p}
          </span>
        ))}
        separator={<span className="text-ink text-2xl">✺</span>}
      />
    </div>
  );
}
