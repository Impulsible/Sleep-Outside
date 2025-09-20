import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src', // serve from src folder
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        product_listing: resolve(__dirname, 'src/product_listing/index.html'),
        product_detail: resolve(__dirname, 'src/product_detail/index.html'),
      }
    }
  }
});
