/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom"
  },
  outDir: 'docs',
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/works': { page: '/works' },
    }
  },
}
