import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable middleware support for Next.js 16
    proxyTimeout: 30_000,
  },
};

export default nextConfig;
