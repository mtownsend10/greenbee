import Link from "next/link";
import { Honeycomb } from "@/components/illustrations/Honeycomb";
import { Bee } from "@/components/illustrations/Bee";
import { buttonVariants } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-12">
      <div className="mx-auto max-w-7xl relative bg-forest text-cream rounded-[2.5rem] border-2 border-ink shadow-[10px_10px_0_0_var(--ink)] overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <Honeycomb cellSize={48} rows={6} cols={20} className="text-honey" />
        </div>
        <div className="absolute -bottom-8 -right-8 rotate-12 opacity-90 pointer-events-none">
          <Bee size={180} className="text-cream" />
        </div>

        <div className="relative px-8 sm:px-14 py-16 sm:py-20 grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
          <div>
            <p className="font-hand text-2xl text-honey-light mb-2">
              your move, cling film
            </p>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.95]">
              Trade three sheets of <em className="text-honey">honey-soaked cotton</em> for a year of plastic.
            </h2>
            <p className="mt-6 font-body text-lg text-cream/80 max-w-xl">
              Free shipping on orders $30+ · 30-day happiness guarantee · Compostable
              packaging from the box to the wrap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              href="/shop"
              className={buttonVariants({ variant: "honey", size: "xl" })}
            >
              Shop the wraps →
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                variant: "outline",
                size: "xl",
                className: "border-cream text-cream hover:bg-cream hover:text-ink",
              })}
            >
              Read the story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
