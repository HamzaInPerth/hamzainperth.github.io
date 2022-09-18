/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    unoptimized: true,
  },
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/works': {
        page: '/works',
      },
      // 'contact': { page: '/contact' },
    }
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}
