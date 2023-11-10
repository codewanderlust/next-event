/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      animation: {
        roll: "roll 5s infinite linear",
      },
      backgroundColor: {
        "primary-rgba": "rgba(60, 60, 60, 0.75)",
      },
      colors: {
        primary: "#F21565",
        secondary: "#7908AE",
        tertiary: "#E7A06C",
      },
    },
  },
  plugins: [],
};
