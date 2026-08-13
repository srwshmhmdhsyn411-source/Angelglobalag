import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Angelglobalag",
  assetPrefix: "/Angelglobalag/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
