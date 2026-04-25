import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement> & {
  variant?: "swoop" | "double" | "scribble";
};

export function Underline({
  variant = "swoop",
  className,
  ...props
}: Props) {
  const paths: Record<typeof variant, React.ReactNode> = {
    swoop: (
      <path
        d="M2 14 Q 80 -2 200 8 T 398 6"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
      />
    ),
    double: (
      <>
        <path
          d="M2 8 Q 100 1 200 6 T 398 4"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 18 Q 110 12 200 16 T 390 14"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
        />
      </>
    ),
    scribble: (
      <path
        d="M2 16 Q 30 4 60 14 T 120 12 T 180 14 T 240 10 T 300 14 T 360 12 T 398 14"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={cn("text-honey", className)}
      aria-hidden="true"
      {...props}
    >
      {paths[variant]}
    </svg>
  );
}
