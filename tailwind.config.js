/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc700",
        secondary: "#383838",
        accent: "#9c801c",
        extra: "#b08d23"
      },
      fontFamily: {
        century: ["Century Gothic", "sans-serif"],
        centuryBold: ["Century Gothic Bold", "sans-serif"]
      },
    },
  },
  plugins: [],
};
