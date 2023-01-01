/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mansalva: ["Mansalva"],
        Literata: ["Literata"],
        MPLUS2: ["M PLUS 2"],
        MPLUS1: ["M PLUS 1"],
      },
    },
  },

  plugins: [],
};
