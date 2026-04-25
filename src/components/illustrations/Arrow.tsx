import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement> & {
  variant?: "loop" | "swoop" | "wiggle";
};

export function Arrow({ variant = "loop", className, ...props }: Props) {
  const paths: Record<typeof variant, React.ReactNode> = {
    loop: (
      <>
        <path d="M10 60 Q 60 -10 120 30 Q 90 50 100 90" />
        <path d="M92 78 L100 90 L112 84" />
      </>
    ),
    swoop: (
      <>
        <path d="M5 20 Q 60 80 110 30" />
        <path d="M100 22 L110 30 L106 42" />
      </>
    ),
    wiggle: (
      <>
        <path d="M5 50 Q 30 20 55 50 T 105 50" />
        <path d="M96 42 L106 50 L96 58" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-ink", className)}
      aria-hidden="true"
      {...props}
    >
      {paths[variant]}
    </svg>
  );
}
