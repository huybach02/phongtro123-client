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
      },
      colors: {bluePrimary: "#1266dd", hover: "#ff6600"},
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
