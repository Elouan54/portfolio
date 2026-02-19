import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,   // ← IMPORTANT
}

export default nextConfig