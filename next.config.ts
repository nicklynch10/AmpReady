import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for deployment to any static host
  // Set to 'export' for static builds, or remove/comment for dynamic (SSR/ISR)
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,

  // Disable image optimization when exporting statically (required for static export)
  images: {
    unoptimized: process.env.STATIC_EXPORT === 'true',
  },

  // Trailing slashes for cleaner URLs in static export
  trailingSlash: process.env.STATIC_EXPORT === 'true',

  // Strict mode for React 19
  reactStrictMode: true,
};

export default nextConfig;
