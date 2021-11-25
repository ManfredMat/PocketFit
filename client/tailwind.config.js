module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        base: '#6AE056'
      },
      yellow: {
        base:'#DFFC52'
      },
      darkGray: {
        base:'#020E12',
      }
    },
    extend: {
      spacing: {
      '38': '38rem',
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
