import type { NextConfig } from "next";

const isProd = process.env.IS_PRODUCTION === "true";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
   output: "export",
   basePath: isProd ? `/${base}` : "",
   assetPrefix: isProd ? `/${base}/` : "",
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