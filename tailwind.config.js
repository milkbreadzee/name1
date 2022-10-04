/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'earth-red' : '#e85e56',
        'earth-beige' : '#1D2538',
        'earth-black' : '#494949',
        'office-white' : '#E0E1DC'
      }
    },
  },
  plugins: [],
}
