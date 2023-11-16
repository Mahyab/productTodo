/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "custom_brown":"#807366",
      "custom_blue":"#66B88F",
      "custom_cerem":"#E6CC99",
      "custom_warning":"#FF6666",
    },
    extend: {},
    borderRadius:{
      "custom_border_radius":"10px"
    },
  },
  plugins: [],
}

