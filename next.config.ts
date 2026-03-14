import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
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