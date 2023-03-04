/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray-font': '#444B59',
        'dark': '#121212',
        'card-bg': '#252013',
        'yellow-400': '#FBC948',
        'orange-400': '#F9A824',
        'orange-500': '#F47F17',
        'gray-footer': '#1B1B1B',
        'light-txt': '#FCD87C',
      },
    },
  },
  plugins: [],
}
