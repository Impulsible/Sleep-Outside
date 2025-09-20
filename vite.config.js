import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src/product_listing'), // points to folder with index.html
  build: {
    outDir: path.resolve(__dirname, 'dist'), // output folder for the build
    emptyOutDir: true,                        // clears previous build
    rollupOptions: {
      input: path.resolve(__dirname, 'src/product_listing/index.html') // entry file
    }
  }
})
