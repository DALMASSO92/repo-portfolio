import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export 100 % statique : déployable sur le VPS OVH derrière Nginx,
  // sans process Node à maintenir.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
