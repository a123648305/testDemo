/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-24 13:30:06
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-24 13:48:25
 */
import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
const { Option } = Select
import './index.less'

type PropsType = {
  options: Array<any>
  style?: object
  defaultVal?: Array<string>
  placeholder: string
  onChange: () => void
}

const CustomTagSelect: React.FC<PropsType> = ({
  options,
  style,
  placeholder,
}) => {
  return (
    <>
      <Select placeholder={placeholder} mode="tags" style={style} showArrow>
        {options &&
          options.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
      </Select>
    </>
  )
}

export default CustomTagSelect
