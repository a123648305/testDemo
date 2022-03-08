import React from 'react'
// 单选 多选组
const SelectGroup: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  total,
  onChange,
}) => {
  // 点击选项
  const onTaggle = (item: OptionItem) => {
    console.log(item, 'item')
    let choosed = value
    if (type === 'SINGLE') {
      choosed = [item.id]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.id)) {
        choosed = value.filter((val) => val !== item.id)
      } else {
        choosed = value.length + 1 === total ? [] : [...value, item.id]
      }
    }
    onChange({ type, choosed, value: '' })
  }
  console.log(type === 'MULTIPLE', type, '0')
  return (
    <ul className="select_group">
      {type === 'MULTIPLE' && (
        <span
          key="all"
          className={`select_item ${
            value.length === 0 && 'select_item_checked'
          }`}
          onClick={() => onChange([])}
        >
          全选
        </span>
      )}
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

export default SelectGroup
