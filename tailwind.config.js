/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { dots: "dots 3s linear infinite" },
      keyframes: {
        dots: {
          "0%": {
            content: "''",
          },
          "33%": {
            content: "'.'",
          },
          "67%": {
            content: "'..'",
          },
          "100%": {
            content: "'...'",
          },
        },
      },
    },
  },
  plugins: [],
};
