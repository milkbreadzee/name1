/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'earth-red' : '#e85e56',
        'earth-beige' : '#f4e9dc',
        'earth-black' : '#494949'
      }
    },
  },
  plugins: [],
}
