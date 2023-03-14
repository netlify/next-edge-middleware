/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'assets.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
