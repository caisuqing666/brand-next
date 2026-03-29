import type { NextConfig } from "next";

// 本地开发时启用 Cloudflare 平台模拟（仅本地，Vercel 环境跳过）
if (process.env.NODE_ENV === "development") {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { setupDevPlatform } = require("@cloudflare/next-on-pages/next-dev");
    setupDevPlatform();
  } catch {
    // Vercel 或未安装时跳过
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
