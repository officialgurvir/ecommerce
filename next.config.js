/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "picsum.photos", "stimg.cardekho.com"]
  }
}

module.exports = nextConfig
