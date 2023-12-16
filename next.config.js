/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN
  }
}

module.exports = nextConfig
