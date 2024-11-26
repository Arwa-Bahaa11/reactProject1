/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center: true
    },

    extend: {
      colors :{
        navColor   : '#2c3e50',
        homeColor  : "#1abc9c",
        layerColor : "#1abc9ce6"
      },
      screens:{
        "2xl":"1320px"
      }
    },
  },
  plugins: [],
}

