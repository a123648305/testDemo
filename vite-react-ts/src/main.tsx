/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 16:03:54
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter, Router, Routes, useRoutes } from 'react-router-dom'
import routeConfig from './router'
import './index.css'
import 'antd/dist/antd.css'
import './assets/iconfont/iconfont.css'
import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Router routes={routes} />, document.getElementById('root'))

// const App = () => {
//   let routes = useRoutes(routeConfig)
//   return routes
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
