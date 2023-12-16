/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN
  }
}

module.exports = nextConfig
