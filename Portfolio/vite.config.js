import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages (project site): https://fatec-sjc-dsm-portfolio.github.io/ra1461392321033/
  base: "/ra1461392321033/",
});
