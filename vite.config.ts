import { rmSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from './package.json';

rmSync('dist', { recursive: true, force: true });

export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: 'app/electron/main/index.ts',
        vite: {
          build: {
            sourcemap: true,
            outDir: 'dist/electron/main',
          },
          plugins: [],
        },
      },
      preload: {
        input: {
          index: path.join(__dirname, 'app/electron/preload/index.ts'),
        },
        vite: {
          build: {
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          },
        },
      },
      renderer: {},
    }),
  ],
  server: {
    host: pkg.debug.env.VITE_DEV_SERVER_HOSTNAME,
    port: pkg.debug.env.VITE_DEV_SERVER_PORT,
  },
});
