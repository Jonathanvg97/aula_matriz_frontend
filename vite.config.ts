import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  preview: {
    port: 80,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://localhost:5173",
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@features": "/src/features",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@types": "/src/types",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // separa dependencias pesadas
        },
      },
    },
  },
});
