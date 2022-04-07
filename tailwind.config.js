const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Rubik', 'sans-serif'],
    },
    colors: {
      primary: colors.slate,
      ...colors,
    },
  },
  plugins: [],
}
