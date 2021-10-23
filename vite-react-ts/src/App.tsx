/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-23 11:05:46
 */
import React, { useCallback, useEffect, useState } from 'react'
import logo from '@/assets/resource/logo.svg'
import './App.css'
// import Index from '@/pages/Index/index.tsx'
import Index from './pages/Index'
import { Button } from 'antd'

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
      {/* <h2>{time}</h2>
      <h2>{count}</h2>
      <Button onClick={() => setCount(count + 1)}> changeCount</Button>
      <Index /> */}

      <Detail />
    </div>
  )
}

export default App
