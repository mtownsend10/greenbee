import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "horizontal" | "stacked";
  /** Use on dark backgrounds (e.g. footer). */
  tone?: "light" | "dark";
};

export function Logo({
  className,
  variant = "horizontal",
  tone = "light",
}: Props) {
  return (
    <Link
      href="/"
      aria-label="Green Bee Wraps — home"
      className={cn(
        "group inline-flex items-center gap-2 font-display tracking-tight",
        className,
      )}
    >
      <BeeMark className="size-9 transition-transform duration-300 group-hover:rotate-12" />
      <span
        className={cn(
          "leading-none",
          variant === "horizontal" ? "flex items-baseline gap-1.5" : "flex flex-col",
        )}
      >
        <span
          className={cn(
            "text-2xl font-bold",
            tone === "dark" ? "text-cream" : "text-forest",
          )}
        >
          Green&nbsp;Bee
        </span>
        <span
          className={cn(
            "text-xs uppercase tracking-[0.22em] font-bold font-body",
            tone === "dark" ? "text-honey-light" : "text-ink/70",
          )}
        >
          Wraps
        </span>
      </span>
    </Link>
  );
}

function BeeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {/* Honeycomb cell */}
      <path d="M24 2 L43 13 L43 35 L24 46 L5 35 L5 13 Z" fill="#2F4A2F" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      {/* Wings */}
      <ellipse cx="20" cy="17" rx="4.5" ry="7" fill="#FFFAEB" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(-25 20 17)" />
      <ellipse cx="27" cy="16.5" rx="4.5" ry="7" fill="#FFFAEB" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(20 27 16.5)" />
      {/* Stinger */}
      <path d="M13.5 28 L9.5 29 L13.5 30.5 Z" fill="#1A1A1A" />
      {/* Body */}
      <ellipse cx="23" cy="29" rx="10" ry="7" fill="#F4B324" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Stripes */}
      <path d="M20 22.5 Q 18.5 29 20 35.5" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      <path d="M26 22.4 Q 24.5 29 26 35.6" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      {/* Head */}
      <circle cx="35" cy="28" r="4" fill="#1A1A1A" />
    </svg>
  );
}
