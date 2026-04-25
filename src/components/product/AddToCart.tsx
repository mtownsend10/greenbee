"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart/context";
import type { Product } from "@/lib/shopify/types";

export function AddToCart({ product }: { product: Product }) {
  const variant = product.variants[0];
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
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
  );
}
