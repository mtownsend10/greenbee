import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { StickerBadge } from "@/components/ui/StickerBadge";
import type { Product } from "@/lib/shopify/types";

type Props = {
  product: Product;
  /** Visual variant — index helps stagger card tilts. */
  index?: number;
  className?: string;
};

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];

export function ProductCard({ product, index = 0, className }: Props) {
  const tilt = TILTS[index % TILTS.length];
  const price = product.priceRange.minVariantPrice;
  const compare = product.compareAtPriceRange?.minVariantPrice;
  const tagBadge = product.tags?.[0];

  return (
    <Link
      href={`/shop/${product.handle}`}
      className={cn(
        "group relative block transition-transform duration-300 hover:-translate-y-1",
        tilt,
        "hover:rotate-0",
        className,
      )}
    >
      <div
        className="relative bg-paper border-2 border-ink rounded-3xl overflow-hidden shadow-[6px_6px_0_0_var(--ink)] group-hover:shadow-[10px_10px_0_0_var(--ink)] transition-shadow"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, ${product.patternColor}22 0%, transparent 60%)`,
        }}
      >
        {tagBadge && (
          <div className="absolute top-4 left-4 z-10">
            <StickerBadge tone={tagBadge === "bestseller" ? "honey" : tagBadge === "new" ? "coral" : "forest"} rotate={-6}>
              {tagBadge}
            </StickerBadge>
          </div>
        )}

        <div className="aspect-square relative">
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 border-t-2 border-ink bg-cream flex items-center justify-between gap-3">
          <div>
            <p className="font-display font-bold text-xl leading-none">
              {product.title}
            </p>
            <p className="font-body text-xs text-ink/60 mt-1">
              3-pack · S / M / L
            </p>
          </div>
          <div className="text-right">
            {compare && parseFloat(compare.amount) > parseFloat(price.amount) && (
              <p className="font-body text-xs text-ink/50 line-through tabular-nums">
                {formatPrice(compare.amount, compare.currencyCode)}
              </p>
            )}
            <p className="font-display font-bold text-xl tabular-nums">
              {formatPrice(price.amount, price.currencyCode)}
            </p>
          </div>
        </div>

        <span className="absolute top-4 right-4 size-10 rounded-full bg-honey border-2 border-ink inline-flex items-center justify-center shadow-[3px_3px_0_0_var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={18} strokeWidth={2.6} />
        </span>
      </div>
    </Link>
  );
}
