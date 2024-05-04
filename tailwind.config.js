/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: ["./components/**/*"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

