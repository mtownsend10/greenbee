"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart/context";
import type { Product } from "@/lib/shopify/types";
import { cn, formatPrice } from "@/lib/utils";

export function AddToCart({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const compare = variant.compareAtPrice;

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="font-display font-black text-4xl tabular-nums">
          {formatPrice(variant.price.amount, variant.price.currencyCode)}
        </span>
        {compare && parseFloat(compare.amount) > parseFloat(variant.price.amount) && (
          <span className="font-body text-lg text-ink/50 line-through tabular-nums">
            {formatPrice(compare.amount, compare.currencyCode)}
          </span>
        )}
      </div>

      {product.variants.length > 1 && (
        <fieldset className="mt-6">
          <legend className="font-display font-bold text-sm uppercase tracking-widest text-ink/70 mb-3">
            Size
          </legend>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                aria-pressed={v.id === variant.id}
                onClick={() => setVariantId(v.id)}
                disabled={!v.availableForSale}
                className={cn(
                  "px-4 py-2 rounded-full border-2 border-ink font-display font-semibold transition-colors disabled:opacity-40",
                  v.id === variant.id
                    ? "bg-honey shadow-[3px_3px_0_0_var(--ink)]"
                    : "bg-paper hover:bg-honey-light",
                )}
              >
                {v.title}
                <span className="ml-2 font-body font-normal text-sm text-ink/70 tabular-nums">
                  {formatPrice(v.price.amount, v.price.currencyCode)}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="inline-flex items-center bg-cream border-2 border-ink rounded-full overflow-hidden self-start sm:self-stretch">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="size-12 inline-flex items-center justify-center hover:bg-honey-light transition-colors"
          >
            <Minus size={16} strokeWidth={2.6} />
          </button>
          <span className="w-10 text-center font-display font-bold text-lg tabular-nums">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="size-12 inline-flex items-center justify-center hover:bg-honey-light transition-colors"
          >
            <Plus size={16} strokeWidth={2.6} />
          </button>
        </div>

        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={() => addItem(product, variant, qty)}
          disabled={!variant.availableForSale}
          className="flex-1"
        >
          <ShoppingBasket size={18} strokeWidth={2.6} />
          {variant.availableForSale ? "Add to basket" : "Sold out"}
        </Button>
      </div>
    </div>
  );
}
