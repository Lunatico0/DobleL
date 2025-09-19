import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@data': path.resolve(__dirname, './src/data'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hero': path.resolve(__dirname, './src/components/sections/Hero'),
      '@projects': path.resolve(__dirname, './src/components/Proyects'),
    }
  }
})
