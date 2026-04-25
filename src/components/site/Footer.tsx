import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { Bee } from "@/components/illustrations/Bee";
import { Honeycomb } from "@/components/illustrations/Honeycomb";
import { Marquee } from "@/components/ui/Marquee";

const FOOTER_LINKS = {
  Shop: [
    { href: "/shop", label: "All wraps" },
    { href: "/shop/assorted-3-pack", label: "Assorted 3-Pack" },
    { href: "/shop/garden-3-pack", label: "Garden 3-Pack" },
    { href: "/shop/eclipse-3-pack", label: "Eclipse 3-Pack" },
  ],
  Help: [
    { href: "/faq", label: "FAQ" },
    { href: "/care", label: "Care guide" },
    { href: "/shipping", label: "Shipping" },
    { href: "/returns", label: "Returns" },
  ],
  Company: [
    { href: "/about", label: "Our story" },
    { href: "/contact", label: "Contact" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/privacy", label: "Privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-24 bg-forest text-cream border-t-2 border-ink overflow-hidden">
      {/* Marquee ribbon */}
      <div className="border-y-2 border-ink bg-honey text-ink py-3">
        <Marquee
          fast
          items={[
            "Wrap. Wash. Reuse.",
            "Plastic-free since day one",
            "Compostable to the core",
            "Made by hand in small batches",
            "100% organic cotton",
          ].map((s, i) => (
            <span key={i} className="font-display font-bold uppercase tracking-wider text-lg">
              {s}
            </span>
          ))}
          separator={<span className="text-ink text-2xl">✺</span>}
        />
      </div>

      {/* Honeycomb decoration */}
      <div className="absolute -top-10 -right-10 w-72 opacity-20 pointer-events-none">
        <Honeycomb cellSize={36} rows={6} cols={6} className="text-honey" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-[2fr_3fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 font-display text-2xl leading-snug max-w-sm">
            Tiny wraps. <em className="text-honey">Big</em> impact on what
            ends up in your kitchen drawer.
          </p>
          <div className="mt-6 inline-block">
            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-display text-honey-light text-sm uppercase tracking-[0.2em] mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5 font-body">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="hover:text-honey transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-cream/20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-cream/70">
        <p>© {new Date().getFullYear()} Green Bee Wraps Co. — Made by hand.</p>
        <p className="font-hand text-base text-honey">Thanks for keeping it natural ✿</p>
      </div>

      {/* Big bee in the corner */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 opacity-90 pointer-events-none">
        <Bee size={120} className="text-cream" />
      </div>
    </footer>
  );
}
