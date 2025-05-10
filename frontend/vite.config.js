import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/Songs": {
        target: "http://localhost:30594",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
