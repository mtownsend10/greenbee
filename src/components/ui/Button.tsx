import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-display font-semibold leading-none transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey active:translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-cream rounded-full shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[2px_2px_0_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-ink",
        honey:
          "bg-honey text-ink rounded-full shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[2px_2px_0_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-ink",
        coral:
          "bg-coral text-ink rounded-full shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[2px_2px_0_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-ink",
        outline:
          "bg-transparent text-ink rounded-full border-2 border-ink hover:bg-ink hover:text-cream",
        ghost: "bg-transparent text-ink hover:underline underline-offset-4",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

/**
 * Same visual treatment as <Button> but renders an <a>. Use for navigation.
 * (Avoids the invalid `<button><a>...</a></button>` nesting.)
 */
export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonVariantProps {}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
LinkButton.displayName = "LinkButton";
