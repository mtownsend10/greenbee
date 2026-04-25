import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement> & {
  flip?: boolean;
};

export function WaveDivider({ flip, className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn("block w-full h-12 md:h-20", flip && "rotate-180", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 40 C 180 0 360 80 540 40 S 900 0 1080 40 S 1440 80 1440 80 L 1440 80 L 0 80 Z"
        fill="currentColor"
      />
    </svg>
  );
}
