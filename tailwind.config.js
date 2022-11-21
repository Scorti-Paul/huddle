/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    boxShadow: {
      '2xl': '0px 1px 10px 1px rgba(0, 0, 0, 0.2)',
    },
    colors: {
      Pink: 'hsl(322, 100%, 66%)',
      lightPink: 'hsl(321, 100%, 78%)',
      lightRed: 'hsl(0, 100%, 63%)',
      veryDarkCyan: 'hsl(192, 100%, 9%)',
      veryPaleBlue: 'hsl(207, 100%, 98%)',
    },
    extend: {},
  },
  plugins: [],
}