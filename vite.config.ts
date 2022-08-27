import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': resolve(__dirname, './src/hooks'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils'),
      '@icons': resolve(__dirname, './src/icons'),
      '@graphql': resolve(__dirname, './src/graphql'),
      '@interface': resolve(__dirname, './src/interface'),
      '@generated': resolve(__dirname, './src/generated'),
      '@components': resolve(__dirname, './src/components'),
      '@sections': resolve(__dirname, './src/sections'),
      '@services': resolve(__dirname, './src/services'),
      '@imgs': resolve(__dirname, './src/imgs'),
      '@modules': resolve(__dirname, './src/modules'),
      '@validation': resolve(__dirname, './src/validation'),
      '@assets': resolve(__dirname, './src/assets'),
      '@data': resolve(__dirname, './src/data'),
      '@routes': resolve(__dirname, './src/routes')
    }
  }
})
