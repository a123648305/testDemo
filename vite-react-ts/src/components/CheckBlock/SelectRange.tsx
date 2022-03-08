import React from 'react'
import { InputNumber, Space } from 'antd'

// 范围 选择
const SelectRange: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  onChange,
}) => {
  // 点击选项
  const onTaggle = (item: OptionItem) => {
    console.log(item, 'item')
    onChange({ type, choosed: [item.id], value: '' })
  }

  const numberChange = (val: number | string, index: number) => {
    console.log(val, index, 'val')
    if (index === 1) {
      onChange({ type, choosed: [], value: [val, value[1]] })
    } else {
      onChange({ type, choosed: [], value: [value[0], val] })
    }
  }

  return (
    <ul className="select_group">
      {list.map((item) => (
        <span
          key={item.id}
          className={`select_item ${
            value.includes(item.id) && 'select_item_checked'
          }`}
          onClick={() => onTaggle(item)}
        >
          {item.label}
        </span>
      ))}
      <Space>
        <InputNumber
          size="small"
          controls={false}
          onChange={(val) => numberChange(val, 0)}
        />
        <span>-</span>
        <InputNumber
          size="small"
          controls={false}
          onChange={(val) => numberChange(val, 1)}
        />
      </Space>
    </ul>
  )
}

export default SelectRange
