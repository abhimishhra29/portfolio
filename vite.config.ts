
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoBasePath = "/portfolio/"; // GitHub Pages serves the app from https://<user>.github.io/portfolio/

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use the repo name as the base path only for production builds so dev stays at "/"
  base: mode === "development" ? "/" : repoBasePath,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
