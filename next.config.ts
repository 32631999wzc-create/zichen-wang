import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization handled by Vercel
  images: {
    unoptimized: true,
  },

  // Ensure consistent URLs
  trailingSlash: false,
};

export default nextConfig;
