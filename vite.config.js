// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Homepage
        main: resolve(__dirname, 'index.html'),
        // Product listing page
        product_listing: resolve(__dirname, 'src/product_listing/index.html'),
        // Product detail page
        product_detail: resolve(__dirname, 'src/product_detail/index.html'),
      },
    },
  },
  server: {
    open: true, // auto-open browser on dev start
    fs: {
      // Allow serving files from project root
      allow: ['..'],
    },
  },
});
