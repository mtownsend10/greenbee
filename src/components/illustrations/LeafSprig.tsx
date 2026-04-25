import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement>;

export function LeafSprig({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-leaf", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M40 110 Q 40 60 40 10" />
      <path d="M40 90 Q 20 80 14 60 Q 30 64 40 78" fill="currentColor" fillOpacity={0.18} />
      <path d="M40 70 Q 60 60 66 40 Q 50 44 40 58" fill="currentColor" fillOpacity={0.18} />
      <path d="M40 50 Q 22 40 18 22 Q 32 26 40 38" fill="currentColor" fillOpacity={0.18} />
      <path d="M40 32 Q 56 24 60 8 Q 48 12 40 22" fill="currentColor" fillOpacity={0.18} />
    </svg>
  );
}
