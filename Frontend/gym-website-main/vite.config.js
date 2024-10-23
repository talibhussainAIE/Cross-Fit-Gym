import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This creates the alias for '@' to point to the 'src' directory
    },
  },
  assetsInclude: ['**/.mp4'], // This ensures mp4 files are included in the build
});
