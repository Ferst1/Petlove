import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
    },
  },
  base: command === 'serve' ? '/' : '/Petlove/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  publicDir: 'public',
}));
