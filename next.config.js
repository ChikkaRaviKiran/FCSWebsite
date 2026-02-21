/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip ESLint during production builds on the server to avoid failing CI/deploys.
    // Keep linting locally and in PR checks; optionally fix warnings/errors later.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
