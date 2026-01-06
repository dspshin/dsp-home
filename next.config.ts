import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tower.dsp.ai.kr',
      },
      {
        protocol: 'https',
        hostname: 'saju.dsp.ai.kr',
      }
    ],
  },
};

export default nextConfig;
