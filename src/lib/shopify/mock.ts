import type { Product } from "./types";

const usd = (amount: string) => ({ amount, currencyCode: "USD" as const });

const SIZES = [
  { key: "3pack", title: "3-Pack (S/M/L)", price: "22.00" },
  { key: "small", title: "Small", price: "6.00" },
  { key: "medium", title: "Medium", price: "10.00" },
  { key: "large", title: "Large", price: "13.00" },
];

const SIZE_OPTION = { id: "opt-size", name: "Size", values: SIZES.map((s) => s.title) };

/** One variant per size: the 3-pack first (the default), then singles. */
const sizeVariants = (productId: string, packCompareAt?: string) =>
  SIZES.map((size) => ({
    id: `${productId}-${size.key}`,
    title: size.title,
    availableForSale: true,
    price: usd(size.price),
    compareAtPrice: size.key === "3pack" && packCompareAt ? usd(packCompareAt) : null,
    selectedOptions: [{ name: "Size", value: size.title }],
  }));

const baseHighlights = [
  "100% organic cotton",
  "Beeswax + damar resin + jojoba & coconut oil",
  "Reusable for years with simple care",
  "Fully compostable",
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "gid://greenbee/product/assorted",
    handle: "assorted-3-pack",
    title: "The Assorted",
    description:
      "Our greatest hits in one pack — a wildflower medley, a sunny geometric, and a soft botanical. The perfect place to start.",
    tags: ["bestseller", "starter"],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    compareAtPriceRange: {
      minVariantPrice: usd("28.00"),
      maxVariantPrice: usd("28.00"),
    },
    featuredImage: {
      url: "/products/photos/assorted.png",
      altText: "Assorted 3-pack of beeswax wraps",
    },
    images: [
      { url: "/products/photos/assorted.png", altText: "Assorted 3-pack" },
      { url: "/products/photos/assorted-2.png", altText: "Assorted detail" },
      { url: "/products/photos/assorted-3.png", altText: "Assorted in use" },
      { url: "/products/photos/assorted-4.png", altText: "Assorted styling" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("assorted", "28.00"),
    patternColor: "#F4B324",
    patternAccent: "#5B8A3A",
    highlights: baseHighlights,
  },
  {
    id: "gid://greenbee/product/eclipse",
    handle: "eclipse-3-pack",
    title: "The Eclipse",
    description:
      "Moody crescents and warm amber halos. Inspired by long summer evenings and the moment the sun dips behind the trees.",
    tags: ["new"],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    featuredImage: {
      url: "/products/photos/eclipse.png",
      altText: "Eclipse pattern beeswax wraps",
    },
    images: [
      { url: "/products/photos/eclipse.png", altText: "Eclipse 3-pack" },
      { url: "/products/photos/eclipse-2.png", altText: "Eclipse detail" },
      { url: "/products/photos/eclipse-3.png", altText: "Eclipse in use" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("eclipse"),
    patternColor: "#1A1A1A",
    patternAccent: "#F4B324",
    highlights: baseHighlights,
  },
  {
    id: "gid://greenbee/product/garden",
    handle: "garden-3-pack",
    title: "The Garden",
    description:
      "Hand-illustrated florals on a cream base. Like wrapping your sandwich in a Sunday morning bouquet.",
    tags: ["bestseller"],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    featuredImage: {
      url: "/products/photos/garden.png",
      altText: "Garden pattern beeswax wraps",
    },
    images: [
      { url: "/products/photos/garden.png", altText: "Garden 3-pack" },
      { url: "/products/photos/garden-2.png", altText: "Garden detail" },
      { url: "/products/photos/garden-3.png", altText: "Garden in use" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("garden"),
    patternColor: "#FF6B5B",
    patternAccent: "#5B8A3A",
    highlights: baseHighlights,
  },
  {
    id: "gid://greenbee/product/green-garden",
    handle: "green-garden-3-pack",
    title: "Green Garden",
    description:
      "Deep forest leaves with little tucked-away bees. Our most-loved pattern for produce that keeps on giving.",
    tags: [],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    featuredImage: {
      url: "/products/photos/green-garden.png",
      altText: "Green Garden pattern beeswax wraps",
    },
    images: [
      { url: "/products/photos/green-garden.png", altText: "Green Garden 3-pack" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("green-garden"),
    patternColor: "#2F4A2F",
    patternAccent: "#F4B324",
    highlights: baseHighlights,
  },
  {
    id: "gid://greenbee/product/green-geo",
    handle: "green-geo-3-pack",
    title: "Green Geo",
    description:
      "A modern geometric — clean lines, soft sage, the right amount of nothing. Looks like a tea towel you'd actually keep on the counter.",
    tags: ["new"],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    featuredImage: {
      url: "/products/photos/green-geo.png",
      altText: "Green Geo pattern beeswax wraps",
    },
    images: [
      { url: "/products/photos/green-geo.png", altText: "Green Geo 3-pack" },
      { url: "/products/photos/green-geo-2.png", altText: "Green Geo detail" },
      { url: "/products/photos/green-geo-3.png", altText: "Green Geo in use" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("green-geo"),
    patternColor: "#5B8A3A",
    patternAccent: "#FFFAEB",
    highlights: baseHighlights,
  },
  {
    id: "gid://greenbee/product/hearts",
    handle: "hearts-3-pack",
    title: "The Hearts",
    description:
      "Tiny love notes for whoever's opening the lunchbox today. Hand-drawn hearts on a soft honey base.",
    tags: ["gift"],
    vendor: "Green Bee Wraps",
    productType: "Beeswax Wrap",
    availableForSale: true,
    priceRange: {
      minVariantPrice: usd("6.00"),
      maxVariantPrice: usd("22.00"),
    },
    featuredImage: {
      url: "/products/photos/hearts.jpg",
      altText: "Hearts pattern beeswax wraps",
    },
    images: [
      { url: "/products/photos/hearts.jpg", altText: "Hearts 3-pack" },
      { url: "/products/photos/hearts-2.png", altText: "Hearts detail" },
      { url: "/products/photos/hearts-3.png", altText: "Hearts in use" },
      { url: "/products/photos/hearts-4.png", altText: "Hearts styled" },
    ],
    options: [SIZE_OPTION],
    variants: sizeVariants("hearts"),
    patternColor: "#FF6B5B",
    patternAccent: "#FCD66B",
    highlights: baseHighlights,
  },
];
