/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'aomediacodec.github.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
