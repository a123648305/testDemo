/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-13 14:45:14
 */
import TagsDialog from '../../components/TagsDialog'
import React, { useState } from 'react'
import { Button } from 'antd'

type PropsType = {}
const Index: React.FC<PropsType> = ({ ...props }) => {
  const [visible, setVisible] = useState(true)
  const test = (val: any) => {
    console.log(val, 'tset')
  }
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        show
      </Button>
      <TagsDialog
        tags={[]}
        onClose={() => {}}
        onConfirm={() => {}}
        visible={visible}
      />
    </div>
  )
}

export default Index
