/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/sampletitle.ejs", "./views/index.ejs",],
  theme: {
    extend:{
      colors: {
        "nascarYellow": "#ffd659",
        "nascarRed": "#e4002b",
        "nascarBlue": "#007ac2"
      },
      fontFamily: {
        'RobotoMono': ['Roboto Mono'],
        "Sarabun": ['Sarabun']  
      }
    }
  },
  plugins: [],
}

