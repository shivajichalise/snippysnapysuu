/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark mode
        100: "#444648",
        200: "#2C2E30",
        300: "#1D1F21",

        primary: "#FFFFA1",
        "primary-200": "#FF983F",
        "primary-300": "#FF6600",

        secondary: "#474A4C",
        "secondary-200": "#2C2E30",
        "secondary-300": "#1D1F21",

        accent: "#F5F5F5",
        "accent-200": "#D5D5D5",
        "accent-300": "#929292",

        neutral: "#444648",
        "neutral-200": "#2C2E30",
        "neutral-300": "#1D1F21",

        text: "#FFFFFF",
        "text-200": "#E0E0E0",
        "text-300": "#C0C0C0",

        // Info Colors
        info: "#5fa8e2",
        "info-200": "#3498db",
        "info-300": "#1d6fa5",

        // Error Colors
        error: "#e74c3c",
        "error-200": "#ea6554",
        "error-300": "#9f3627",

        // Warning Colors
        warning: "#f7b656",
        "warning-200": "#f39c12",
        "warning-300": "#c17f0e",

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
}
