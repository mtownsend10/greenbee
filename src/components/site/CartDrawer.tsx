"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart/context";
import { buttonVariants } from "@/components/ui/Button";
import { formatPrice, cn } from "@/lib/utils";

export function CartDrawer() {
  const {
    isOpen,
    close,
    lines,
    totalQuantity,
    subtotal,
    currencyCode,
    updateQuantity,
    removeItem,
    checkoutUrl,
  } = useCart();

  return (
    <>
      {/* Scrim */}
      <div
        onClick={close}
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px] transition-opacity",
          isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
        )}
      />

      <aside
        role="dialog"
        aria-label="Cart"
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream border-l-2 border-ink shadow-[-8px_0_0_0_var(--ink)] flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="px-5 py-4 border-b-2 border-ink flex items-center justify-between bg-honey-light">
          <div>
            <p className="font-display text-2xl font-bold leading-none">Your basket</p>
            <p className="font-body text-sm text-ink/70 mt-1">
              {totalQuantity} item{totalQuantity === 1 ? "" : "s"}
            </p>
          </div>
          <button
            onClick={close}
            aria-label="Close cart"
            className="size-9 rounded-full border-2 border-ink bg-cream hover:bg-coral transition-colors inline-flex items-center justify-center"
          >
            <X size={16} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <div className="text-6xl">🐝</div>
              <p className="font-display text-2xl">Your basket is empty</p>
              <p className="font-body text-sm text-ink/70 max-w-xs">
                Pick a wrap pattern (or three) to get started.
              </p>
              <Link
                href="/shop"
                onClick={close}
                className={buttonVariants({ variant: "honey", size: "md" })}
              >
                Browse the shop
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {lines.map((line) => (
                <li
                  key={line.variantId}
                  className="flex gap-3 p-3 bg-paper border-2 border-ink rounded-xl shadow-[4px_4px_0_0_var(--ink)]"
                >
                  <div className="relative size-20 shrink-0 rounded-lg overflow-hidden border-2 border-ink bg-cream">
                    <Image
                      src={line.imageUrl}
                      alt={line.productTitle}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${line.productHandle}`}
                      onClick={close}
                      className="font-display font-semibold text-lg leading-tight hover:text-forest"
                    >
                      {line.productTitle}
                    </Link>
                    <p className="font-body text-xs text-ink/60 mt-0.5">
                      {line.variantTitle}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center border-2 border-ink rounded-full overflow-hidden">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(line.variantId, line.quantity - 1)
                          }
                          className="size-7 inline-flex items-center justify-center hover:bg-honey-light"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm font-semibold font-display tabular-nums w-7 text-center">
                          {line.quantity}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(line.variantId, line.quantity + 1)
                          }
                          className="size-7 inline-flex items-center justify-center hover:bg-honey-light"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-display font-bold tabular-nums">
                        {formatPrice(
                          parseFloat(line.unitPriceAmount) * line.quantity,
                          line.currencyCode,
                        )}
                      </span>
                    </div>
                    <button
                      onClick={() => removeItem(line.variantId)}
                      className="mt-1 text-xs text-ink/50 hover:text-coral underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t-2 border-ink px-5 py-4 bg-cream-deep">
            <div className="flex items-baseline justify-between font-display mb-3">
              <span className="text-lg">Subtotal</span>
              <span className="text-2xl font-bold tabular-nums">
                {formatPrice(subtotal, currencyCode)}
              </span>
            </div>
            <p className="text-xs text-ink/60 font-body mb-3">
              Shipping &amp; taxes calculated at checkout. Plastic-free packaging
              always.
            </p>
            <a
              href={checkoutUrl}
              className="block w-full text-center px-6 py-4 bg-forest text-cream rounded-full font-display font-semibold text-lg border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[2px_2px_0_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              Checkout via Shopify →
            </a>
          </footer>
        )}
      </aside>
    </>
  );
}
