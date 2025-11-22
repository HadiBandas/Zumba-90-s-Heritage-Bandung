/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-purple': '#6D28D9',
        'retro-pink': '#DB2777',
        'retro-yellow': '#FCD34D',
        'retro-cyan': '#22D3EE',
        'retro-lime': '#A3E635',
        'retro-bg': '#4c1d95',
      },
      boxShadow: {
        'retro': '6px 6px 0px 0px rgba(0,0,0,1)',
        'retro-sm': '3px 3px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}