import type { Metadata } from "next";
import { Bee } from "@/components/illustrations/Bee";
import { Underline } from "@/components/illustrations/Underline";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Drop us a note. We answer like real people.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-hand text-2xl text-coral mb-2">say hi</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl tracking-tighter leading-[0.92]">
            Tell us{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">everything.</span>
              <Underline
                variant="swoop"
                className="absolute -bottom-3 left-0 w-full text-honey"
              />
            </span>
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80 max-w-md leading-relaxed">
            Custom orders, wholesale questions, suggestions for new patterns,
            recipe stories — we read everything that lands in the inbox.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="font-display font-bold uppercase tracking-widest text-sm text-ink/60">
                Email
              </dt>
              <dd className="font-display text-2xl mt-1">
                hello@greenbeewraps.com
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold uppercase tracking-widest text-sm text-ink/60">
                Workshop
              </dt>
              <dd className="font-display text-2xl mt-1">
                A two-car garage in Bend, OR
              </dd>
            </div>
            <div>
              <dt className="font-display font-bold uppercase tracking-widest text-sm text-ink/60">
                Hours
              </dt>
              <dd className="font-body text-lg mt-1 text-ink/80">
                Mon–Fri, 9–4 ET. We&apos;re slow on weekends because we&apos;re
                outside.
              </dd>
            </div>
          </dl>

          <Bee size={120} className="absolute bottom-10 left-10 -rotate-12 hidden md:block" />
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
