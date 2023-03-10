const path = require('path')

// .env variables
const IS_DEV = process.env.NODE_ENV === 'development'
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared')]
  },
  env: {
    GOOGLE_CLIENT_ID,
    SERVER_URL,
    IS_DEV,
    WEBSOCKET_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com',
        port: ''
      }
    ],
    domains: ['lh3.googleusercontent.com', SERVER_HOST || 'localhost']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
