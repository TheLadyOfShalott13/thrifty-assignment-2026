import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
   basePath: '/thrifty-assignment-2026',
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: "https",
            hostname: "fcdn.thriftyuae.com",
         },
      ],
   },
};

export default nextConfig;