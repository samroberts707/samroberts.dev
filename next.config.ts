import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.photos'
      },
      {
        protocol: 'https',
        hostname: 'd2hq2vp6n3e7lp.cloudfront.net'
      }
    ],
  }
};

export default nextConfig;
