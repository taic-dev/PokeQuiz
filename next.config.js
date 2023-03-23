/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [''], //ここにドメインを指定
  },
}

module.exports = nextConfig
