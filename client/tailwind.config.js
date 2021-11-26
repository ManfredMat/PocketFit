module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
      '38': '38rem',
      },
      backgroundImage: {
        'login-background': "url('./assets/img/loginbackground.png')",
      },
      colors: {
        green: {
          base: '#6AE056'
        },
        yellow: {
          base:'#DFFC52'
        },
        darkGray: {
          base:'#020E12',
          medium: '#041D25'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
