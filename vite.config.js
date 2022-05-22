// vite.config.js
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path');

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'src')
    },
  },
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
