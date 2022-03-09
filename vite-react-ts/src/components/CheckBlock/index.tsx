import React from 'react'
import SelectGroup from './SelectGroup'
import SelectText from './SelectText'
import SelectRange from './SelectRange'
import './index.less'

// 渲染对应的选择组件
const RenderSelect: { [key: string]: any } = {
  SINGLE: SelectGroup, // 单选
  MULTIPLE: SelectGroup, // 多选
  RANGE: SelectRange, // 范围
  TEXT: SelectText, // 文本
}

const CheckBlock: React.FC<PropTypes> = ({
  type,
  maxCount = 100,
  searchVal,
  value,
  suffixLabel,
  placeholder,
  options = [],
  onChange,
}) => {
  const list = searchVal
    ? options
        .filter((k) => new RegExp(searchVal).test(k.label))
        .slice(0, maxCount + 1)
    : options.slice(0, maxCount + 1)

  const childrenProps = {
    type,
    value,
    list,
    onChange,
    total: options.length,
    searchTotal: searchVal ? list.length : 0,
    suffixLabel,
    placeholder,
  }
  return (
    <div className="filter_check_group">
      {RenderSelect[type] ? (
        RenderSelect[type](childrenProps)
      ) : (
        <span>this is no match componet</span>
      )}
    </div>
  )
}

export default CheckBlock
