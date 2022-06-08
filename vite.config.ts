import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/loopstudios-landing-page/",
  plugins: [react()],
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
})
