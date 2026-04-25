import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Underline } from "@/components/illustrations/Underline";
import { getAllProducts } from "@/lib/shopify/client";

export async function FeaturedProducts() {
  const products = await getAllProducts();
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-hand text-2xl text-coral mb-2">six patterns, one mission</p>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-none">
              Find your{" "}
              <span className="relative inline-block">
                <span className="italic text-forest">fave</span>
                <Underline
                  variant="scribble"
                  className="absolute -bottom-3 left-0 w-full text-honey-dark"
                />
              </span>
              .
            </h2>
            <p className="mt-4 font-body text-lg text-ink/70 max-w-xl">
              Every 3-pack comes in three sizes — small for half-onions, medium
              for sandwiches, large for that sourdough boule you keep telling
              people you baked.
            </p>
          </div>
          <Link
            href="/shop"
            className="font-display font-semibold text-lg underline underline-offset-4 decoration-honey decoration-4 hover:text-forest whitespace-nowrap"
          >
            See all 6 patterns →
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-y-16">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
