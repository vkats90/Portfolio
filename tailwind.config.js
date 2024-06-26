/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Glory", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#417300",
        backg: "#E7F3F7",
      },
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        Glory: ["Glory", "sans-serif"],
      },
    },
  },
  plugins: [],
};
