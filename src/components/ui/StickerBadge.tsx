import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "honey" | "coral" | "forest" | "cream" | "ink";
  rotate?: number;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  honey: "bg-honey text-ink border-ink",
  coral: "bg-coral text-ink border-ink",
  forest: "bg-forest text-cream border-ink",
  cream: "bg-cream text-ink border-ink",
  ink: "bg-ink text-cream border-ink",
};

export function StickerBadge({
  tone = "honey",
  rotate = -4,
  className,
  children,
  style,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 font-display font-semibold uppercase tracking-wider text-xs shadow-[3px_3px_0_0_var(--ink)]",
        tones[tone],
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
