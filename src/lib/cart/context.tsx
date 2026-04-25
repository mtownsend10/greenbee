"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { Product, ProductVariant } from "@/lib/shopify/types";

type LocalLine = {
  variantId: string;
  productHandle: string;
  productTitle: string;
  variantTitle: string;
  imageUrl: string;
  unitPriceAmount: string;
  currencyCode: string;
  quantity: number;
};

type CartState = {
  lines: LocalLine[];
};

type Action =
  | { type: "add"; product: Product; variant: ProductVariant; quantity: number }
  | { type: "set-quantity"; variantId: string; quantity: number }
  | { type: "remove"; variantId: string }
  | { type: "clear" }
  | { type: "hydrate"; state: CartState };

const STORAGE_KEY = "gbw.cart.v1";

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "add": {
      const existing = state.lines.find(
        (l) => l.variantId === action.variant.id,
      );
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.variantId === action.variant.id
              ? { ...l, quantity: l.quantity + action.quantity }
              : l,
          ),
        };
      }
      return {
        lines: [
          ...state.lines,
          {
            variantId: action.variant.id,
            productHandle: action.product.handle,
            productTitle: action.product.title,
            variantTitle: action.variant.title,
            imageUrl: action.product.featuredImage.url,
            unitPriceAmount: action.variant.price.amount,
            currencyCode: action.variant.price.currencyCode,
            quantity: action.quantity,
          },
        ],
      };
    }
    case "set-quantity": {
      if (action.quantity <= 0) {
        return {
          lines: state.lines.filter((l) => l.variantId !== action.variantId),
        };
      }
      return {
        lines: state.lines.map((l) =>
          l.variantId === action.variantId
            ? { ...l, quantity: action.quantity }
            : l,
        ),
      };
    }
    case "remove":
      return {
        lines: state.lines.filter((l) => l.variantId !== action.variantId),
      };
    case "clear":
      return { lines: [] };
    case "hydrate":
      return action.state;
    default:
      return state;
  }
}

type CartContextValue = {
  lines: LocalLine[];
  totalQuantity: number;
  subtotal: number;
  currencyCode: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  addItem: (
    product: Product,
    variant: ProductVariant,
    quantity?: number,
  ) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clear: () => void;
  /**
   * In production this returns Shopify's hosted checkout URL (cart.checkoutUrl).
   * For the mock layer we surface a placeholder so the UI flow is testable.
   */
  checkoutUrl: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        dispatch({ type: "hydrate", state: parsed });
      }
    } catch {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage full or blocked — silently ignore
    }
  }, [state, hydrated]);

  const totalQuantity = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.quantity, 0),
    [state.lines],
  );

  const subtotal = useMemo(
    () =>
      state.lines.reduce(
        (sum, l) => sum + parseFloat(l.unitPriceAmount) * l.quantity,
        0,
      ),
    [state.lines],
  );

  const currencyCode = state.lines[0]?.currencyCode ?? "USD";

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    (product: Product, variant: ProductVariant, quantity = 1) => {
      dispatch({ type: "add", product, variant, quantity });
      setIsOpen(true);
    },
    [],
  );

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    dispatch({ type: "set-quantity", variantId, quantity });
  }, []);

  const removeItem = useCallback((variantId: string) => {
    dispatch({ type: "remove", variantId });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const value: CartContextValue = {
    lines: state.lines,
    totalQuantity,
    subtotal,
    currencyCode,
    isOpen,
    open,
    close,
    toggle,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    checkoutUrl: "/checkout-placeholder",
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");
  return ctx;
}
