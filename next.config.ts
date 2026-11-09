import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Wraps and bread bags live on separate category pages; the old combined /shop goes to wraps.
  async redirects() {
    return [{ source: "/shop", destination: "/shop/wraps", permanent: false }];
  },
  images: {
    // Product photos come from Shopify's CDN. Only Shopify's own files path is allowed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;
