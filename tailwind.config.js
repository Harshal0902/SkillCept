module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeImg:  '#DCE4F7',
        ARbg: '#203864',
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'dancingScript': ['Dancing Script'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
