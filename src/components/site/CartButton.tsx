"use client";

import { ShoppingBasket } from "lucide-react";
import { useCart } from "@/lib/cart/context";

export function CartButton() {
  const { totalQuantity, toggle } = useCart();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Open cart, ${totalQuantity} item${totalQuantity === 1 ? "" : "s"}`}
      className="relative inline-flex items-center justify-center size-10 sm:size-11 rounded-full bg-honey border-2 border-ink shadow-[3px_3px_0_0_var(--ink)] hover:shadow-[1px_1px_0_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
    >
      <ShoppingBasket size={18} strokeWidth={2.4} />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 inline-flex items-center justify-center rounded-full bg-coral text-cream border-2 border-ink text-[11px] font-bold font-display">
          {totalQuantity}
        </span>
      )}
    </button>
  );
}
