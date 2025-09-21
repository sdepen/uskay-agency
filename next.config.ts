import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 🚀 TEMPORAIRE : accélérer le build
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
