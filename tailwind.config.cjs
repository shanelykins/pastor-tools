/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'christian-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9deff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c8aff',
          600: '#006ce8',
          700: '#0055b5',
          800: '#054995',
          900: '#0a3f7a',
        },
      },
    },
  },
  plugins: [],
}

