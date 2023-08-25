/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'burnt-1':'#5a0300',
        'burnt-2':'#d4611b',
        'sitheyes-1':'#f23030',
        'sitheyes-2':'#ff8000',
        'sitheyes-3':'#d7b835',
        'fire-1':'#ee4611',
        'fire-2':'#c33a0e',
        'fire-3':'#992d0b',
        'fire-4':'#6e2108',
        'watermelon-1':'#dff0d1',
        'watermelon-2':'#e5ffcf',
      }
    },
  },
  plugins: [],
}