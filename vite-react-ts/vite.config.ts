/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-13 14:48:27
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
export default defineConfig({
  root: '',
  base: '/', // 开发或生产环境服务的公共基础路径。
  mode: 'development', // 'development'（开发模式），'production'（生产模式）
  plugins: [reactRefresh()],
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
  build: {
    target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'
    outDir: 'dist', // 指定输出路径（相对于 项目根目录).
    assetsDir: 'assets', // 指定生成静态资源的存放路径（相对于 build.outDir）
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
    sourcemap: 'hidden', // 构建后是否生成 source map 文件。   boolean | 'inline' | 'hidden'
    // 库模式
    // lib: {
    //   entry: path.resolve(__dirname, 'lib/main.js'),
    //   name: 'MyLib',
    //   fileName: (format) => `my-lib.${format}.js`,
    // },
    // 此处配置rollup 打包配置
    rollupOptions: {
      // 多页面打包入口 只需指定多个 .html 文件作为入口点
      // 在解析输入路径时，__dirname 的值将仍然是 vite.config.js 文件所在的目录。因此，你需要把对应入口文件的 root 的路径添加到 resolve 的参数中
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // nested: path.resolve(__dirname, 'nested/index.html'),
      },
      // 确保外部化处理那些你不想打包进库的依赖 如vue react
      external: ['React'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
