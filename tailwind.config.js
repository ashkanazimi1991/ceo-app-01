const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
         
      
      text: {
        DEFAULT: "#000",
        light: "#6C7281",
      },
     
    
    extend: {
     
    },
  },
  plugins: [
    
  ],
}
