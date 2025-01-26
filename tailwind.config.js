/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'hsl(210 17% 98% / 65%)',
        brandfill: 'rgb(31, 27, 24)',
        surfaceBg: '#e9ece5',
      },
    },
  },
  plugins: [],
}

