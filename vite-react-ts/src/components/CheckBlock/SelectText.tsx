// 文本 选择
import React from 'react'
import { Input } from 'antd'

const SelectText: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  onChange,
}) => {
  const textChange = (e: any) => {
    console.log(val, 'val')
  }
  return <Input onChange={textChange} style={{ width: 220 }} />
}

export default SelectText
