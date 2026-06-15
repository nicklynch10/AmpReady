import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for deployment to any static host
  output: 'export',

  // Disable image optimization when exporting statically (required for static export)
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs in static export
  trailingSlash: true,

  // Strict mode for React 19
  reactStrictMode: true,
};

export default nextConfig;
