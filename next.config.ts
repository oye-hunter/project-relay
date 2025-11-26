
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Enable middleware support for Next.js 16
    proxyTimeout: 30_000,
  },
};

export default nextConfig;
