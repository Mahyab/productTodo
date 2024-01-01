/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    colors:{
      "custom_brown":"#807366",
      "custom_blue":"#66B88F",
      "custom_cerem":"#E6CC99",
      "custom_warning":"#FF6666",
      "white":"#fff",
      "custom_orange":"#FA7B1D",
      "black":"#000",
      "yellow": "#FFFF00"
    },
    screens:{
      "xm":"576px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1600px"
    },
    
    extend: {
        gridTemplateColumns:{
        "product-form":"repeat(16, minmax(0, 1fr))"
      },
    },
    borderRadius:{
      "custom_border_radius":"10px"
    },
  },
  plugins: [],
}

