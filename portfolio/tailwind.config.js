const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_image: "url('/assets/Sunset-trees.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
      fontFamily: {
        pacifica: ["pacifica", "sans"],
        rumor: ["rumor", "serif"],
      },
      colors: {
        primary: colors.slate["50"],
        secondary: colors.emerald["300"],
      },
    },
  },
  plugins: [],
};
