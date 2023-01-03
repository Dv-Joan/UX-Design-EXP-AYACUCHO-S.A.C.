/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mansalva: ["Mansalva"],
        Literata: ["Literata"],
        MPLUS2: ["M PLUS 2"],
        MPLUS1: ["M PLUS 1"],
        Roboto: ["Roboto"],
        ProstoOne: ["Prosto One"],
        Nunito: ["Nunito"],
      },
    },
  },

  plugins: [],
};
