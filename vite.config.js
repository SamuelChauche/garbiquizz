import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Le repo est servi sur https://samuelchauche.github.io/garbiquizz/
// donc le base path en prod doit être /garbiquizz/. En dev on garde /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/garbiquizz/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: false,
  },
}));
