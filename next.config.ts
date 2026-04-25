import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product art ships as SVG. We trust our own /public assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
