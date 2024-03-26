/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('./img/background.jpg')"
      }
    },
  },
  plugins: [],
}

