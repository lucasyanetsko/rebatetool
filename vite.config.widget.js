import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/widget.jsx',
      name: 'RebateLocator',
      fileName: 'widget',
      formats: ['iife']
    },
    outDir: 'dist-widget',
    rollupOptions: {
      output: {
        // Ensure all code is bundled into a single file
        inlineDynamicImports: true,
        assetFileNames: 'widget.[ext]',
      }
    },
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for debugging
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})

