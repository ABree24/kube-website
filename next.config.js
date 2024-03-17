/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios-glyphs/**',
      },
      {
        protocol: 'https',
        hostname: 'files.slack.com',
        port: '',
        pathname: '/files-tmb/**',
      },
    ],
  },
}

module.exports = nextConfig
