import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  /** Inner content (icon or label) */
  innerLabel?: React.ReactNode;
  size?: number;
};

/**
 * Circular text stamp / wax-seal style badge.
 * Text wraps along the circle perimeter, contents sit in the middle.
 */
export function Stamp({
  text,
  innerLabel,
  size = 140,
  className,
  ...props
}: Props) {
  const id = `stamp-${text.replace(/\W+/g, "")}`;
  const radius = size / 2 - 14;

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <path
            id={id}
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 2}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 8}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeDasharray="2 4"
        />
        <text
          fontFamily="var(--font-fraunces)"
          fontSize={size * 0.092}
          fontWeight={600}
          letterSpacing={size * 0.018}
          fill="currentColor"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`} startOffset="0">
            {text} • {text} •
          </textPath>
        </text>
      </svg>
      {innerLabel && (
        <div className="absolute inset-0 flex items-center justify-center font-display text-center leading-none">
          {innerLabel}
        </div>
      )}
    </div>
  );
}
