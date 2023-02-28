import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path"

export default defineConfig({
  server: {
    port: 3000,
  },
  base: '/',
  plugins: [
    react(),
    svgr(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})