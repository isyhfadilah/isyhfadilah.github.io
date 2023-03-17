/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"38rem"
      },
      backdropBlur: {
        xs: '2px',
      },
      color: {
        dark: '#2C2A4A',
        mermud: '#FF6B6B',
        purple: '#6B5B95'
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif'],
      poppins:['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}