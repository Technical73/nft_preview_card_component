/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFamily: ["'Outfit"],
      },
      backgroundColor: {
        mainBg: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
      },
      colors: {
        lineColor: "hsl(215, 32%, 27%)",
        customWhite: "hsl(0, 0%, 100%)",
        softBlue: " hsl(215, 51%, 70%)",
        customCyan: "hsl(178, 100%, 50%)",
      },
      fontSize: {
        customFontPara: "12px",
      },
    },
  },
  plugins: [],
};
