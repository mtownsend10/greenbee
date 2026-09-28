"use client";

import { useState } from "react";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/seo";

// Web3Forms access key (public by design — it only lets people email us).
// Get one at https://web3forms.com by entering the inbox that should receive messages.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }

    const form = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Green Bee Wraps website",
          subject: `Website message: ${form.get("subject") || "New message"}`,
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          botcheck: form.get("botcheck") === "on",
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      setStatus(res.ok && data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper border-2 border-ink rounded-3xl p-8 shadow-[10px_10px_0_0_var(--ink)] relative"
    >
      <LeafSprig className="absolute -top-6 right-6 w-16 rotate-12" />

      {status === "sent" ? (
        <div className="py-10 text-center">
          <p className="text-5xl mb-4">🐝</p>
          <p className="font-display text-3xl font-bold">Got it — thanks!</p>
          <p className="font-body text-ink/70 mt-3 max-w-sm mx-auto">
            We&apos;ll get back to you as soon as we&apos;ve washed the beeswax
            off our hands.
          </p>
        </div>
      ) : (
        <fieldset className="grid gap-5 border-0 p-0" disabled={status === "sending"}>
          <Field id="name" label="Your name" placeholder="Bee Knees" />
          <Field id="email" label="Email" placeholder="you@kitchen.com" type="email" />
          <Field id="subject" label="Subject" placeholder="A question about Hearts" required={false} />
          <div>
            <label
              htmlFor="message"
              className="block font-display font-bold text-sm uppercase tracking-widest text-ink/70 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell us a thing…"
              className="w-full px-4 py-3 rounded-2xl border-2 border-ink bg-cream font-body text-base focus:outline-none focus:bg-cream-deep resize-none"
            />
          </div>

          {/* Honeypot: hidden from people, bots tend to tick it. */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

          <Button type="submit" variant="primary" size="lg">
            {status === "sending" ? "Sending…" : "Send it →"}
          </Button>

          {status === "error" ? (
            <p role="alert" className="text-sm font-body text-coral text-center">
              Sorry, that didn&apos;t send. Please email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : (
            <p className="text-xs font-body text-ink/55 text-center">
              We&apos;ll usually answer within a day.
            </p>
          )}
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
  required = true,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
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
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-full border-2 border-ink bg-cream font-body text-base focus:outline-none focus:bg-cream-deep"
      />
    </div>
  );
}
