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
    require('daisyui'),
    // other plugins...
  ],
  daisyui: {
    daisyui: {
      themes: ["light", "dark", "cupcake", "synthwave", "halloween", "bumblebee", "emerald", "corporate", "lofi", "dracula"],
    },
  },
}

