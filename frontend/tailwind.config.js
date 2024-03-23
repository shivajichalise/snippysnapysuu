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

                "primary-100": "#FFFFA1",
                "primary-200": "#FF983F",
                "primary-300": "#FF6600",

                "secondary-100": "#474A4C",
                "secondary-200": "#2C2E30",
                "secondary-300": "#1D1F21",

                "accent-100": "#F5F5F5",
                "accent-200": "#D5D5D5",
                "accent-300": "#929292",

                "neutral-100": "#444648",
                "neutral-200": "#2C2E30",
                "neutral-300": "#1D1F21",

                "text-100": "#FFFFFF",
                "text-200": "#E0E0E0",
                "text-300": "#C0C0C0",

                // Info Colors
                "info-100": "#5fa8e2",
                "info-200": "#3498db",
                "info-300": "#1d6fa5",

                // Error Colors
                "error-100": "#e74c3c",
                "error-200": "#ea6554",
                "error-300": "#9f3627",

                // Warning Colors
                "warning-100": "#f7b656",
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
