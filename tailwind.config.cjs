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
          100: "#DCE2E6",
          200: "#DEDEDE",
          300: "#E9E9F0",
          400: "#617480",
          500: "#F3F5F6",
          700: "#5D5D6D",
        },
        white: {
          400: "#F5F5FA",
          500: "#FFFFFF",
        },
        orange: "#FFA585",
        green: "#51B853",
        red: "#DE3838",
        blue: "#115D8C",
        black: {
          200: "#A8A8B3",
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
