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
      fontSize: {
        'h1' : '4rem',
        'h2' : '3rem',
        'h3' : '2.5rem',
        'h4' : '2rem',
        'h5' : '1.5rem',
        'h6' : '1.25rem',
        'b1' : '1rem',
        'b2' : '0.75rem',
        'b3' : '0.625rem',
      },
    },
  },
  plugins: [],
}
