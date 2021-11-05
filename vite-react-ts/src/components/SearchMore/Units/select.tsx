/*
 * @Author: chenwu
 * @Date: 2021-10-13 17:42:30
 * @LastEditTime: 2021-10-28 12:06:11
 * @LastEditors: wujian

 */

import React from 'react'
import { Select } from 'antd'
import { fieldEnum } from '../Screen/utils'
const { Option } = Select
function View(props: any) {
  const { value, type, currentValue, func } = props
  const nodes = currentValue ? JSON.parse(currentValue) : []
  nodes.unshift({ key: 'EMPTY', value: '空白' })
  const selectMode = fieldEnum[type].mode
  const hanleValue = (value) => {
    props.value = value
    func()
  }
  return (
    <Select
      mode={selectMode}
      value={value}
      style={{ width: '371px' }}
      placeholder="请选择"
      onChange={hanleValue}
    >
      {nodes &&
        nodes.map((item) => {
          return (
            <Option value={item.value} key={item.key}>
              {item.value}
            </Option>
          )
        })}
    </Select>
  )
}

export default View
