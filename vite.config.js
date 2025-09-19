import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        product_listing: 'src/product_listing/index.html',
      }
    }
  }
});
