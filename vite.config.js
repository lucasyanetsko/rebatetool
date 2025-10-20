import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Serve the widget files during development
    fs: {
      allow: ['..']
    }
  },
  publicDir: 'public',
})
