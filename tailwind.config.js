module.exports = {
  mode: "jit",
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_400: "#c4c4c4",
        gray_900: "#1a141f",
        white_A700: "#ffffff",
      },
      fontFamily: { poppins: "Poppins" },
      fontSize: {
        fs18: "18px",
        fs19: "19px",
        fs22: "22px",
        fs25: "25px",
        fs30: "30px",
        fs40: "40px",
        fs43: "43px",
        fs50: "50px",
        fs56: "56px",
        fs67: "67px",
      },
      borderWidth: { bw: "none" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
