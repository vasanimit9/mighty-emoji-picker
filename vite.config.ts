import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      react: "@preact/compat",
      "react-dom": "@preact/compat",
    },
  },
  build: {
    lib: {
      entry: ["./src/main.tsx", "./src/mighty-emoji.tsx"],
      name: "mighty-emoji-picker",
      formats: ["es"]
    },
  },
});
