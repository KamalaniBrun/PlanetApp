// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   leagueSpartan: [
      //     '"League Spartan"',
      //     ...defaultTheme.fontFamily.leagueSpartan,
      //   ],
      // },
      backgroundImage: {
        stars: "url('./assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
