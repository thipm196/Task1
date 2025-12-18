import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build:{
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/app/js/[hash].js',
        entryFileNames: 'static/app/js/[hash].js',
        assetFileNames: 'static/app/[ext]/[hash].[ext]',
      },
    },
  },
})
