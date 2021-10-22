/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-22 10:42:15
 */
import TagsDialog from '../../components/TagsDialog'
import React, { useState } from 'react'
import { Button } from 'antd'
// import qq from '/test'
import ColumFilter from '../../components/ColumFilter'

import AddbicTag from '../../components/AddbicTag'

type PropsType = {}
const Index: React.FC<PropsType> = ({ ...props }) => {
  const [visible, setVisible] = useState(true)
  const test = (val: any) => {
    console.log(val, 'tset')
  }
  //   console.log(qq, '555')
  const data = [
    { id: 1, name: '0000' },
    { id: 2, name: '1000' },
    { id: 3, name: '2000' },
    { id: 4, name: '0000' },
    { id: 5, name: '1000' },
    { id: 6, name: '2000' },
    { id: 7, name: '0000' },
    { id: 8, name: '1000' },
    { id: 9, name: '2000' },
    { id: 10, name: '0000' },
    { id: 12, name: '1000' },
    { id: 13, name: '2000' },
  ]
  return (
    <div>
      <img src="logo.png" alt="00" />
      <i className="iconfont icon-liebiao" />
      <Button type="primary" onClick={() => setVisible(!visible)}>
        show
      </Button>
      {/* <TagsDialog
        tags={[]}
        onClose={() => setVisible(false)}
        onConfirm={() => {}}
        visible={visible}
      /> */}
      {/* {visible && <span>000</span> && console.log(222)} */}
      <ColumFilter data={data} />

      <AddbicTag
        onCancel={() => setVisible(false)}
        onOk={() => {}}
        visible={visible}
        options={data}
      />
    </div>
  )
}

export default Index
