import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for portfolio site
  output: "export",

  // Image optimization
  images: {
    unoptimized: true, // Static export requires this
  },

  // Ensure trailing slashes for consistent URLs
  trailingSlash: false,
};

export default nextConfig;
