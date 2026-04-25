import { cn } from "@/lib/utils";

type Props = {
  items: React.ReactNode[];
  className?: string;
  /** Tailwind text color class for items */
  itemClassName?: string;
  /** Faster ribbon speed */
  fast?: boolean;
  /** Reverse direction */
  reverse?: boolean;
  /** Separator node */
  separator?: React.ReactNode;
};

export function Marquee({
  items,
  className,
  itemClassName,
  fast,
  reverse,
  separator,
}: Props) {
  // Duplicate the list so the loop is seamless
  const sequence = [...items, ...items];
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-10 whitespace-nowrap",
          fast ? "animate-marquee-fast" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {sequence.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className={cn("inline-flex items-center", itemClassName)}>
              {item}
            </span>
            {separator ?? (
              <span className="text-honey text-2xl" aria-hidden>
                ✻
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
