/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom"
  },
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/works': {
        page: '/works', query: { title: 'works' },
      }
    },
}
