/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        doppio:  "'Doppio One', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

