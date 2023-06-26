import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//new configuration for alias
import { fileURLToPath, URL } from 'node:url'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      //new configuration for alias
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  plugins: [react()]
})
