import { cn } from "@/lib/utils";

type BeeProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  /** Optional dotted flight path trailing the bee. */
  withTrail?: boolean;
};

export function Bee({
  size = 96,
  withTrail = false,
  className,
  ...props
}: BeeProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      width={size}
      height={(size * 80) / 120}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-ink", className)}
      aria-hidden="true"
      {...props}
    >
      {withTrail && (
        <path
          d="M2 70 Q 20 50 35 60 T 65 50"
          strokeDasharray="2 6"
          opacity={0.55}
        />
      )}
      {/* Wings */}
      <ellipse
        cx="62"
        cy="22"
        rx="14"
        ry="10"
        fill="rgba(185,219,229,0.55)"
        transform="rotate(-18 62 22)"
      />
      <ellipse
        cx="80"
        cy="22"
        rx="14"
        ry="10"
        fill="rgba(185,219,229,0.55)"
        transform="rotate(18 80 22)"
      />
      {/* Body */}
      <ellipse cx="72" cy="46" rx="28" ry="20" fill="#F4B324" />
      {/* Stripes */}
      <path d="M58 32 Q 60 50 64 64" />
      <path d="M76 30 Q 78 50 82 64" />
      {/* Head */}
      <circle cx="103" cy="44" r="9" fill="#1A1A1A" />
      {/* Antennae */}
      <path d="M105 36 Q 110 28 108 22" />
      <path d="M101 36 Q 96 28 98 22" />
      <circle cx="108" cy="22" r="1.6" fill="#1A1A1A" stroke="none" />
      <circle cx="98" cy="22" r="1.6" fill="#1A1A1A" stroke="none" />
      {/* Smile */}
      <path
        d="M100 47 Q 103 50 106 47"
        stroke="#FAF4E1"
        strokeWidth={1.6}
      />
      {/* Stinger */}
      <path d="M44 46 L 36 44 L 44 50 Z" fill="#1A1A1A" />
    </svg>
  );
}
