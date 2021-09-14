/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-01 15:08:37
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-06 11:49:26
 */

import path from 'path'

const defineConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 2021,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}

export default defineConfig
