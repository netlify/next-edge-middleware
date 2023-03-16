/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'images.ctfassets.net', 'app.thefeedfactory.nl'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
