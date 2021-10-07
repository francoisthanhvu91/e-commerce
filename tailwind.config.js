module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "base": "Poppins, sans-serif",
        "krona": "Krona One, sans-serif"
      },
      colors: {
        "dark": "#1d3557",
        "teal": "#40514E",        
        "light-teal": "#a8dadc",        
        "light": "#f1faee",        
        "red": "#e63946",        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
