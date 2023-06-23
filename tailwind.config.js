/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "600px",
        aboutWidth: "800px",
        imgWidth: "500px",
        tableImgW: "100px",
      },
      height: {
        imgHeight: "500px",
      },
      fontSize: {
        customSize: "3.5rem",
        textSize: "20px",
        customTextSize: "25px",
        standardTextSize: "18px",
      },
      colors: {
        ivory: "#EEEDE7",
        rose: "#EED490",
      },
      padding: {
        "custom-x": "100px",
      },
      gap: {
        customGap: "150px",
      },
    },
  },
  plugins: [require("daisyui")],
};
