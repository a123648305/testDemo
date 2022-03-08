import React from 'react'
import SelectGroup from './SelectGroup'
import SelectText from './SelectText'
import SelectRange from './SelectRange'
import './index.less'

enum typeList {
  SINGLE = 'SINGLE', // 单选
  MULTIPLE = 'MULTIPLE', // 多选
  RANGE = 'RANGE', // 范围
  TEXT = 'TEXT', // 文本
}

// 渲染对应的选择组件
// const RenderSelect = {
//   SINGLE: SelectGroup, // 单选
//   MULTIPLE: SelectGroup, // 多选
//   RANGE: SelectRange, // 范围
//   TEXT: SelectText, // 文本
// }

const RenderSelect = (type: string, argsObj: any) => {
    'SINGLE': SelectGroup, // 单选
    'MULTIPLE': SelectGroup, // 多选
    'RANGE': SelectRange, // 范围
    'TEXT': SelectText, // 文本

//   switch (type) {
//     case 'SINGLE':
//       return SelectGroup({ ...argsObj })
//     case 'MULTIPLE':
//       return SelectGroup({ ...argsObj })
//     case 'RANGE':
//       return SelectRange({ ...argsObj })
//     case 'TEXT':
//       return SelectText({ ...argsObj })
//     default:
//       return <span>type is no match Component</span>
//   }
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
      {RenderSelect(type, {
        type,
        value,
        list,
        onChange,
        total: options.length,
      })}
    </div>
  )
}

export default CheckBlock
