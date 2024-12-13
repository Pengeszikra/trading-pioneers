import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, "game"), // Point to your app directory
  build: {
    outDir: path.join(__dirname, "dist"), // Specify your desired output directory
    emptyOutDir: false, // Clean the output directory before each build
    copyPublicDir: true, // Copies over assets
    sourcemap: false, // Enable sourcemaps
  },
});
