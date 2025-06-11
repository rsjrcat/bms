import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      util: 'util/',
      stream: 'stream-browserify'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend API server
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
