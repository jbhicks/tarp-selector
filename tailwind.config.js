/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*"],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      // Add other variants as needed
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    daisyui: {
      themes: ["light", "dark"],
    },
  },
}

