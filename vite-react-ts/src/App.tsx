/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 15:22:29
 */
import React, { useCallback, useEffect, useState } from 'react'
import logo from '@/assets/resource/logo.svg'
import './App.css'
// import Index from '@/pages/Index/index.tsx'
import Index from './pages/Index'
import Demo from './pages/Demo'
import { Button, Space } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

import Detail from './pages/detail'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState('')
  useEffect(() => {
    // timeStart()
  }, [])

  const timeStart = useCallback(() => {
    return setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])
  console.log(Button, 'Button 组件')
  return (
    <div className="App">
      <Space>
        <Link to="/">to index</Link>
        <Link to="detail">to detail</Link>
      </Space>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
