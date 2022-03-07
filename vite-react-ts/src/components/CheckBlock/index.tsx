import React from 'react'
import { Input, InputNumber, Space } from 'antd'
import './index.less'

enum typeList {
  SINGLE = 'SINGLE', // 单选
  MULTIPLE = 'MULTIPLE', // 多选
  RANGE = 'RANGE', // 范围
  TEXT = 'TEXT', // 文本
}

type OptionItem = { id: string; label: string }
type PropTypes = {
  type: string // 选项类型
  maxCount?: number //最多展示多少个 默认100
  searchVal?: string //搜索的值
  options: Array<OptionItem> //选项列表
  value: Array<string> //选中的值
  onChange: (value: Array<string>) => void
  onReset: () => void // 重置
}

type SelectPropTypes = {
  type: string
  value: Array<string>
  list: Array<OptionItem>
  onChange: (value: Array<string>) => void
}

// 单选 多选组
const SelectGroup: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  onChange,
}) => {
  // 点击选项
  const onTaggle = (item: OptionItem) => {
    console.log(item, 'item')
    let checkVal = value
    if (type === 'SINGLE') {
      checkVal = [item.id]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.id)) {
        checkVal = value.filter((val) => val !== item.id)
      } else {
        checkVal = [...value, item.id]
      }
    }
    onChange(checkVal)
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
    </ul>
  )
}

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
    let checkVal = value
    if (type === 'SINGLE') {
      checkVal = [item.id]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.id)) {
        checkVal = value.filter((val) => val !== item.id)
      } else {
        checkVal = [...value, item.id]
      }
    }
    onChange(checkVal)
  }

  const numberChange = (val: number | string, index: number) => {
    console.log(val, index, 'val')
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

// 文本 选择
const SelectText: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  onChange,
}) => {
  const textChange = (e: any) => {
    console.log(val, 'val')
  }
  return <Input onChange={textChange} />
}

// 渲染对应的选择组件
// const RenderSelect = {
//   SINGLE: SelectGroup, // 单选
//   MULTIPLE: SelectGroup, // 多选
//   RANGE: SelectRange, // 范围
//   TEXT: SelectText, // 文本
// }

const RenderSelect = (type: string, argsObj: any) => {
  console.log(type, 'type', argsObj)
  switch (type) {
    case 'SINGLE':
      return SelectGroup({ ...argsObj })
    case 'MULTIPLE':
      return SelectGroup({ ...argsObj })
    case 'RANGE':
      return SelectRange({ ...argsObj })
    case 'TEXT':
      return SelectText({ ...argsObj })
    default:
      return SelectGroup({ ...argsObj })
  }
}

const CheckBlock: React.FC<PropTypes> = ({
  type,
  maxCount = 100,
  searchVal = [],
  value,
  options,
  onChange,
}) => {
  const list = searchVal.length
    ? options.filter((k) => searchVal.includes(k.id)).slice(0, maxCount + 1)
    : options.slice(0, maxCount + 1)
  return (
    <div className="filter_check_group">
      {/* <SelectGroup value={value} list={list} onChange={onChange} type={type} /> */}
      {/* {RenderSelect[type](props)} */}
      {RenderSelect(type, { value, list, onChange })}
    </div>
  )
}

export default CheckBlock
