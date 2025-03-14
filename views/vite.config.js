import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite recognizes the correct root directory
  base: "./", // Use relative paths for deployment
  build: {
    outDir: "build", // Output build files to "build" directory
    emptyOutDir: true, // Clean the build folder before building
  },
});
