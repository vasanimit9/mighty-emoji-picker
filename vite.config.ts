import { defineConfig } from 'vite'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
