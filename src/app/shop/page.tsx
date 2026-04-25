import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { getAllProducts } from "@/lib/shopify/client";

export const metadata: Metadata = {
  title: "Shop",
  description: "All six handmade beeswax wrap patterns — every 3-pack $22.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="relative">
      <header className="relative bg-honeycomb border-b-2 border-ink overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
          <div>
            <p className="font-hand text-3xl text-coral mb-2">the whole bunch</p>
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.92]">
              Shop every <br />
              <span className="italic text-forest">pattern</span>{" "}
              <span className="relative inline-block">
                we make.
                <Underline
                  variant="swoop"
                  className="absolute -bottom-3 left-0 w-full text-honey"
                />
              </span>
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80 max-w-xl">
              Every 3-pack is $22 and ships free over $30. Mix patterns. Match
              moods. They&apos;re all the same wraps under the hood.
            </p>
          </div>
          <div className="self-center justify-self-end hidden md:block">
            <Bee size={180} className="text-ink rotate-[-10deg]" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
