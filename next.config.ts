import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,  // Top-level
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
};

export default nextConfig;
