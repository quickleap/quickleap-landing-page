const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        '3xl':'1920px',
        '4xl':'2400px'
      },
      maxWidth:{
        '4xl':'2000px',
        '3xl':'1920px',
        
      }
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light: '#149B32',
        DEFAULT: '#257C16',
        dark: '#0b7a24',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}