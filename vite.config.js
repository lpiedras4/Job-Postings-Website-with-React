import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  
  server:{
    port:3000,
    // Proxy configuration to redirect API calls to the JSON server
    // This allows you to use relative paths in your fetch requests
    // instead of hardcoding the full URL
    // For example, you can use '/api/jobs' instead of 'http://localhost:
    proxy: {
      '/api':{
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
    
  }
})
//Configurations for the web server