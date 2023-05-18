/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
    },
}

module.exports = nextConfig
