/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'green': '#00FF00',
        'yellow': '#E7DE79',
         purple: {
          900: '#22212C',
          700: '#302F3D',
          500: '#837E9F'
        },
        'pink': '#CB92B1'
      },
      fontFamily: {
        'sans': 'Merriweather Sans'
      },
      boxShadow: {
        'md': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
