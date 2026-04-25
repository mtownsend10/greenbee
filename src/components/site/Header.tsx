"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CartButton } from "./CartButton";
import { CartDrawer } from "./CartDrawer";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Tiny "wax-paper" announcement bar */}
      <div className="bg-forest text-cream border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] sm:text-xs font-body tracking-wider uppercase flex items-center justify-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-honey animate-pulse" />
          Free shipping on orders $30+ · Plastic-free, always
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 font-display text-base">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-semibold text-ink hover:text-forest transition-colors after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[3px] after:bg-honey after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CartButton />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden size-10 inline-flex items-center justify-center rounded-full border-2 border-ink"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          className={cn(
            "md:hidden overflow-hidden border-t-2 border-ink bg-cream transition-[max-height] duration-300",
            mobileOpen ? "max-h-80" : "max-h-0",
          )}
        >
          <nav className="px-4 py-4 flex flex-col font-display text-2xl">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 border-b border-ink/10 last:border-0 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <CartDrawer />
    </>
  );
}
