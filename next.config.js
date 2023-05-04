/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
  },
  // images: {
  //   formats: ['image/webp'],
  //   loader: "custom",
  //   unoptimized: false,
  // },
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }) {

    return {
      '/': { page: '/' },
      '/works': {
        page: '/works',
      },
      // 'contact': { page: '/contact' },
    }
  },
  experimental: {
    optimizeImages: false,
    // experimental: {
    newNextLinkBehavior: false,
    // },
  },
}
