import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { dirs: ["/src"], ignoreDuringBuilds: true },
  output: "standalone",
};

export default nextConfig;
