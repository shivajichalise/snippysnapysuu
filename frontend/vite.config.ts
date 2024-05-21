import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import "dotenv/config"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: "../",
    define: {
        "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    },
    preview: {
        port: 5173,
        strictPort: true,
    },
    server: {
        port: 5173,
        strictPort: true,
        host: true,
        origin: "http://127.0.0.1:5173",
    },
})
