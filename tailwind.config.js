/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        bluePrimary: "#1266dd",
        greyPrimary: "#f5f5f5",
        redPrimary: "#f73859",
        input: "#e8f0fe",
        yellowPrimary: "#febb02",
        greyButton: "#f1f1f1",
        list: "#fff9f3",
      },
      colors: {
        bluePrimary: "#1266dd",
        hover: "#ff6600",
        greyPrimary: "#65676b",
        redPrimary: "#e13427",
        greenPrimary: "#16c784",
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
