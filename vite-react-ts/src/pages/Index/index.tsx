/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-15 17:41:25
 */
import React, { useState, useRef } from 'react'
import { Button, Rate } from 'antd'
import ChildNode from './childNode'
import './index.less'

type PropsType = {}
const Index: React.FC<PropsType> = ({ ...props }) => {
  console.log('Index render')
  const [visible, setVisible] = useState(Math.random())
  const [obj, setObj] = useState({ id: 1, name: 50, time: +new Date() })
  let ob = Math.random()

  const onChange = (val: any, index: number) => {
    console.log(val, 'Getval', ob)
    ob = 500
    setObj(val)
  }
  console.log(obj, 'matrxDatamatrxData', visible, ob)

  return (
    <div>
      <i className="iconfont icon-liebiao" />
      <Button
        type="primary"
        onClick={() => setObj({ ...obj, time: +new Date() })}
      >
        search
      </Button>
      <Button type="primary" onClick={() => setVisible(Math.random())}>
        222
      </Button>
      <p>........</p>
      <ChildNode onChange={onChange} obj={obj} visible={visible} />
    </div>
  )
}

export default Index
