
// @ts-nocheck
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { Server } from 'http';

export default defineConfig({
  server: {
    port: 3003, // Replace with your desired port number
  },
  plugins: [react()],
  resolve: {
    alias: {
        '@src': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
    },
}
});