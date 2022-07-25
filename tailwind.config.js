const Colors = {
  'custom-blue': '#2176ae',
  'custom-white': '#E9F1F7',
  'custom-red': '#B74F6F',
  'custome-green': '#5C946E',
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'), ...Colors
    }),
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}
