import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './app',
  build: {
    outDir: '../dist/build'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/src')
    }
  }
});
