import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
