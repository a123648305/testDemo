/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-02-10 18:30:05
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 18:32:48
 */
const axios = require('axios')

const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:3000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    timeout: 30000,
  },
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

module.exports.request = axiosInstance