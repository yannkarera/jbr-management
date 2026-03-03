import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './src',
  publicDir: './public',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [react()],
})
