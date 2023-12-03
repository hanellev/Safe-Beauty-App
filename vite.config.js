import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };

  return {
    root: './src',
    publicDir: '../public',
    server: {
      hmr: false,
    },
    build: {
      outDir: '../dist',
      modulePreload: false,
    },
    plugins: [react()],
    define: {
      // vitejs does not support process.env so we have to redefine it
      'process.env': process.env,
    },
  };
});
