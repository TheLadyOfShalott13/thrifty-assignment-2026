import type { NextConfig } from "next";

const repoName = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
   output: "export",
   basePath: repoName ? `/${repoName}` : "",
   assetPrefix: repoName ? `/${repoName}/` : "",
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