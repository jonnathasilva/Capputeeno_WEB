/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      SairaStencilOne: ["Saira Stencil One", "cursive"],
    },
    extend: {
      colors: {
        gray: {
          300: "#DEDEDE",
          400: "#737380",
          500: "#F3F5F6",
          700: "#5D5D6D",
        },
        white: "#FFFFFF",
        orange: "#FFA585",
        black: {
          300: "#737380",
          400: "#41414D",
          500: "#09090A",
        },
        backgroundColor: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
