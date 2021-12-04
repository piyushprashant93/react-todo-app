module.exports = {
  purge: [],
  
  darkMode:  'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns:{
       'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
    },
    container:{
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
