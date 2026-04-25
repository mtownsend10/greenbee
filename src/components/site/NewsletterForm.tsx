"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <div className="bg-cream text-ink rounded-2xl border-2 border-ink p-4 max-w-sm">
      <p className="font-display font-semibold mb-2">Get the newsletter</p>
      <p className="font-body text-sm text-ink/70 mb-3">
        Seasonal patterns, restock alerts, and the occasional honey-soaked
        recipe.
      </p>
      {done ? (
        <p className="font-hand text-xl text-forest">Welcome to the swarm 🐝</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="flex gap-2"
        >
          <input
            type="email"
            required
            placeholder="you@kitchen.com"
            className="flex-1 px-3 py-2 rounded-full border-2 border-ink bg-cream font-body text-sm focus:outline-none focus:bg-paper"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-coral text-ink font-display font-semibold text-sm border-2 border-ink"
          >
            Join
          </button>
        </form>
      )}
    </div>
  );
}
