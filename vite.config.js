import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Ensures the server listens on all interfaces
  },
  // Use relative paths for assets in production
  base: './',
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['utkri.st', 'www.utkri.st']
  }
})
