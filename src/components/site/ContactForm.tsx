"use client";

import { useState } from "react";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-paper border-2 border-ink rounded-3xl p-8 shadow-[10px_10px_0_0_var(--ink)] relative"
    >
      <LeafSprig className="absolute -top-6 right-6 w-16 rotate-12" />

      {submitted ? (
        <div className="py-10 text-center">
          <p className="text-5xl mb-4">🐝</p>
          <p className="font-display text-3xl font-bold">Got it — thanks!</p>
          <p className="font-body text-ink/70 mt-3 max-w-sm mx-auto">
            We&apos;ll get back to you as soon as we&apos;ve washed the beeswax
            off our hands.
          </p>
        </div>
      ) : (
        <fieldset className="grid gap-5 border-0 p-0">
          <Field id="name" label="Your name" placeholder="Bee Knees" />
          <Field id="email" label="Email" placeholder="you@kitchen.com" type="email" />
          <Field id="subject" label="Subject" placeholder="A question about Hearts" />
          <div>
            <label
              htmlFor="message"
              className="block font-display font-bold text-sm uppercase tracking-widest text-ink/70 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell us a thing…"
              className="w-full px-4 py-3 rounded-2xl border-2 border-ink bg-cream font-body text-base focus:outline-none focus:bg-cream-deep resize-none"
            />
          </div>

          <Button type="submit" variant="primary" size="lg">
            Send it →
          </Button>
          <p className="text-xs font-body text-ink/55 text-center">
            We&apos;ll usually answer within a day.
          </p>
        </fieldset>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-display font-bold text-sm uppercase tracking-widest text-ink/70 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-full border-2 border-ink bg-cream font-body text-base focus:outline-none focus:bg-cream-deep"
      />
    </div>
  );
}
