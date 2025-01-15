import { defineConfig } from 'vite'
import path from 'path';
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "ecars-web-lib",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@ecars": path.resolve(__dirname, "./src/@ecars"),
    },
  }
})