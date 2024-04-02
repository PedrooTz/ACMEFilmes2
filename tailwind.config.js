/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        topo: '#000000',
        baixo: '#BB0000'
      },
      backgroundImage: {
        'back': "url('./img/background.jpg')"
      }
    },
  },
  plugins: [],
}

