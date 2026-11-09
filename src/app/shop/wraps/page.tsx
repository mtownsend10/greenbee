import type { Metadata } from "next";
import { ShopCatalog } from "@/components/product/ShopCatalog";

export const metadata: Metadata = {
  title: "Beeswax Wraps",
  description: "Handmade beeswax food wraps — $22 3-packs in small, medium and large, or singles from $6.",
};

export default function WrapsPage() {
  return <ShopCatalog category="wraps" />;
}
