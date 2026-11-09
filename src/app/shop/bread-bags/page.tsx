import type { Metadata } from "next";
import { ShopCatalog } from "@/components/product/ShopCatalog";

export const metadata: Metadata = {
  title: "Beeswax Bread Bags",
  description: "Roomy 12 × 17 in beeswax bread bags, $28 — fits a sandwich loaf, sourdough boule or baguette and keeps crust crusty without plastic.",
};

export default function BreadBagsPage() {
  return <ShopCatalog category="bread-bags" />;
}
