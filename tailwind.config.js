/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'guzmans-bg': "url('../img/guzmansepticbackground.jpg')",
        'septic-cleaning': "url('../img/SepticCleaning.jpg')",
      }
    },
  },
  plugins: [],
}
