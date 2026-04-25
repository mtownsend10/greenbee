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
          Wraps&nbsp;Co.
        </span>
      </span>
    </Link>
  );
}

function BeeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#F4B324" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M14 18 Q 24 26 34 18" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M12 26 Q 24 34 36 26" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M14 32 Q 24 38 34 32" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <ellipse cx="16" cy="14" rx="6" ry="4" fill="#FFFAEB" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(-30 16 14)" />
      <ellipse cx="32" cy="14" rx="6" ry="4" fill="#FFFAEB" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(30 32 14)" />
    </svg>
  );
}
