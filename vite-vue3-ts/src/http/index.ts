import axios from 'axios'

const AxiosInstance = axios.create({
  // baseURL: '',
  timeout: 30000,
  headers: {
    token: '00000',
  },
})

// 添加请求拦截器
AxiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
AxiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default AxiosInstance
