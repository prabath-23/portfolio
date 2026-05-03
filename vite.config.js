import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    // Generate a 404.html copy for GitHub Pages SPA routing
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
