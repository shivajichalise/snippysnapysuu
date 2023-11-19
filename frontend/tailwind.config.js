/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark mode
        100: "#1D1F21",
        200: "#2c2e30",
        300: "#444648",

        primary: "#FF6600",
        "primary-200": "#ff983f",
        "primary-300": "#ffffa1",

        accent: "#F5F5F5",
        "accent-200": "#929292",

        text: "#FFFFFF",
        "text-200": "#e0e0e0",

        // light mode
        "bg-light": "#F7EEDD",
        "bg-light-200": "#ede4d3",
        "bg-light-300": "#c4bcab",

        "primary-light": "#FF7F50",
        "primary-light-200": "#dd6236",
        "primary-light-300": "#8f1e00",

        "accent-light": "#8B4513",
        "accent-light-200": "#ffd299",

        "text-light": "#000000",
        "text-light-200": "#2c2c2c",
      },
    },
  },
  plugins: [],
};
