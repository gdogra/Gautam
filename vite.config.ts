import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  build: {
    outDir: "public", // Build to public directory for Netlify
    emptyOutDir: false // Preserve static assets like images during build
  },
  plugins: [
  react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));