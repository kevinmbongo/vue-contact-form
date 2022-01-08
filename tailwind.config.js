module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: '#003145',
      darkblue: '#092436',
      red: '#D52B1E',
      yellow: '#fbc434',
      orange: '#f79c17',
      darkred: '#B32419',
      white: '#FFF',
      darkgray: '#b7b7b7',
      lightgray: '#e5e5e5',
      black: '#000',
      gray: '#F6F7FB',
      paleblue: '#00a0e9',
      palebluedark: '#0081bb',
      deepblue: '#004e9e',
      transparent: 'transparent',
      green: '#28a745',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
