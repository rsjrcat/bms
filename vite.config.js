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
        target: 'https://bms-2-te1h.onrender.com', // Your backend API server
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
