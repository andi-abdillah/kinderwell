/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007a6a",
        secondary: "#3d37cc",
        // tertiary: "#da3d27",
        tertiary: "#6457d5",
      },
      fontFamily: {
        boogaloo: ["Boogaloo", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      boxShadow: {
        health_card: ["3px 12px 10px rgba(0, 0, 0, 0.5)"],
        health_icon: ["5px 10px 8px rgba(0, 0, 0, 0.3)"],
        card: ["0 10px 8px rgba(0, 0, 0, 0.3)"],
      },
      dropShadow: {
        icon: "0 12px 5px  rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};
