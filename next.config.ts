import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Vercel deployment
  output: "export",

  // Image optimization
  images: {
    unoptimized: true,
  },

  // Ensure consistent URLs
  trailingSlash: false,
};

export default nextConfig;
