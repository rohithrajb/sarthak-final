/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
console.log(isProd)

const nextConfig = {
  basePath: isProd ? '/sarthak-final' : '',
  assetPrefix: isProd ? '/sarthak-final/' : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
