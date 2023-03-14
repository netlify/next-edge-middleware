/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'images.ctfassets.net'],
    formats: ['image/avif'],
  },
}

module.exports = nextConfig
