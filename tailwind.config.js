/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'sy-bg-gray': '#222222',
        'sy-text-gray': '#aeaeb2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
