/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'pantone-250':  '#dbb2d6',
        'wine1': '#1b0b0d',
        'wine2': '#2c1217',
        'wine3': '#3f161e',
        'wine4': '#531926',
        'honey1': '#c98762',
        'honey2': '#d08a5f',
        'honey3': '#d68d5b',
        'honey4': '#dc9057',
        'honey5': '#e29453',
        'honey6': '#e9974e',
        'honey7': '#ee9b47',
        'honey8': '#f49f40',
        'honey9': '#f9a337',
        'honey10': '#fea72c',
        'aesthetic1': '#f9e7cf',
        'aesthetic2': '#f3cfa0',
        'aesthetic3': '#ffb36e',
        'aesthetic4': '#ee975b',
        'autumn1': '#e0b95e',
        'autumn2':'#E9CA7C',

      }
    },
  },
  plugins: [],
}