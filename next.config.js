/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'images.unsplash.com'],
    formats: ['image/avif'],
  },
}

module.exports = nextConfig
