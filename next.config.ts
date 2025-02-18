import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { dirs: ["/src"], ignoreDuringBuilds: true },
  output: "standalone",
  distDir: "build", // Changes the build output directory to `build`
};

export default nextConfig;
