import type { NextConfig } from "next";

const repo = "AMKA";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
