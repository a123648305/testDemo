/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-24 15:59:30
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-24 16:27:32
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //   build: {
  //     rollupOptions: {
  //       input: [],
  //     },
  //   },
  //   optimizeDeps: {
  //     entries: [],
  //   },
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
})
