/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        "backgroundGrey": '#FAFAFA',
        "mainOrange": '#FF6B6B',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        slab: ['Roboto Slab', 'serif'],
      },
      width: {
        '45.3': '45.3rem',
        '152' : '38rem'
      }
    },
  },
  plugins: [],
}

