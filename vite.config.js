import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({ 
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variable.scss";`
      }
    }
  },
  //打包後的路徑
  base: '/HW_week2/'
 
})
