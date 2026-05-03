import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://agent-booking.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
