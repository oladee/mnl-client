/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        montserrat : ["Montserrat", "serif"],
        poppins : ["Poppins", "serif"]
      },
      colors : {
        black : {
          100 : '#000',
          'Title-Text' : '#151515',
          'Body-Text' : '#373737'
        },
        accent : '#FFC300'
      },
      backgroundImage : {
        mariBg : "url('./src/assets/maribg.png')"
      }
    },
  },
  plugins: [],
}

