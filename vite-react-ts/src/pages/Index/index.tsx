/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-24 13:37:45
 */
import TagsDialog from '../../components/TagsDialog'
import React, { useState, useRef } from 'react'
import { Button } from 'antd'
// import qq from '/test'
import ColumFilter from '../../components/ColumFilter'

import AddbicTag from '../../components/AddbicTag'
import BatchAdd from '../../components/BatchAdd'
import CustomTagSelect from '../../components/customTagSelect'

type PropsType = {}
const Index: React.FC<PropsType> = ({ ...props }) => {
  const [visible, setVisible] = useState(false)
  const test = (val: any) => {
    console.log(val, 'tset')
  }
  const formData = {
    id: '2042aec693e14d65a6a130b5868bb4a7',
    name: '爱好2shg33',
    code: 'hofggesbby11',
    type: 'CHECKBOX',
    value: [
      {
        key: '56e4489f36a140898b44243cf8ca1d05',
        value: '篮球',
      },
      {
        key: '3aed786dcefa486b9d092b368cd06786',
        value: '足球2',
      },
    ],
    schemaList: ['篮球', '足球'],
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

  const batchRef = useRef()
  return (
    <div>
      <img src="logo.png" alt="00" />
      <i className="iconfont icon-liebiao" />
      <Button type="primary" onClick={() => setVisible(!visible)}>
        show
      </Button>
      <Button type="primary" onClick={() => batchRef.current.show()}>
        upload{' '}
      </Button>
      {/* <TagsDialog
        tags={[]}
        onClose={() => setVisible(false)}
        onConfirm={() => {}}
        visible={visible}
      /> */}
      {/* {visible && <span>000</span> && console.log(222)} */}
      <ColumFilter data={data} />

      {/* <AddbicTag
        onCancel={() => setVisible(false)}
        onOk={() => {}}
        visible={visible}
        options={data}
        formData={formData}
      /> */}

      <BatchAdd ref={batchRef} />
    </div>
  )
}

export default Index
