/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
         
        'max400': { 'max': '400px' }, // Max-width 400px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
