import type { Metadata } from "next";
import { ShopCatalog } from "@/components/product/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Every handmade beeswax wrap pattern — $22 3-packs, singles from $6, and loaf-sized bread bags.",
};

export default function ShopPage() {
  return <ShopCatalog category="all" />;
}
