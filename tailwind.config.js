/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0C064E',
        secondary: '#D6D5E1',
        tertiary: '#342F6B',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

