/**
 * Public site URL — read from env at build time.
 * Falls back to a sensible local default so previews & dev still work.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenbeewraps.com"
).replace(/\/$/, "");

export const SITE_NAME = "Green Bee Wraps";
export const SITE_TAGLINE = "Keep food fresh, naturally.";
export const SITE_DESCRIPTION =
  "Handmade beeswax food wraps from Bend, Oregon. 100% organic cotton infused with beeswax, damar resin, jojoba and coconut oils. Wrap. Wash. Reuse.";

export const SOCIAL = {
  instagram: "https://instagram.com/greenbeewraps",
  twitter: "@greenbeewraps",
};
