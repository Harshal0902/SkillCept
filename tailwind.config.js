module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2431",
        secondary: "#016795",
        tertiary: "#1E488F",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '128': '40rem',
        '256': '80rem',
      },
      'animation': {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'sansSerif': ['Source Sans Pro', 'sans-serif']
    }
  },
  plugins: [],
}
