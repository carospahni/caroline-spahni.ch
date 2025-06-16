import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Correct configuration for GitHub Pages project site
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html'
      }
    }
  }
});
