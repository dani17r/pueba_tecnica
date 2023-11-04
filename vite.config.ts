import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/views/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/views/layouts', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/views/modules', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/views/pages', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
