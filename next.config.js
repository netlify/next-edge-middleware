/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'assets.ctfassets.net'],
    formats: ['image/avif'],
  },
}

module.exports = nextConfig
