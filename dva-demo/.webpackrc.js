/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 14:35:59
 */
export default {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
};
