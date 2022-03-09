import React, { useState, useEffect } from 'react'
// 单选 多选组
const SelectGroup: React.FC<SelectPropTypes> = ({
  type,
  value,
  list,
  total,
  searchTotal,
  onChange,
}) => {
  const [searchChoosed, setSearchChoosed] = useState<any>(
    value.filter((k) => list.includes(k))
  )
  useEffect(() => {
    const newVal = value.filter((k) => list.includes(k))
    searchTotal ? setSearchChoosed(newVal) : setSearchChoosed([])
  }, [searchTotal])

  // 点击选项
  const onTaggle = (item: OptionItem) => {
    console.log(item, 'item', total, value)
    let choosed = value
    if (type === 'SINGLE') {
      choosed = [item.id]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.id)) {
        choosed = value.filter((val) => val !== item.id)
      } else if (searchTotal && searchTotal < total) {
        // 查询出的数量小于总数量
        choosed = [...value, item.id]
        setSearchChoosed([...searchChoosed, item.id])
      } else {
        choosed = value.length + 1 === total ? [] : [...value, item.id]
      }
    }
    onChange(choosed)
  }
  console.log(
    value,
    searchChoosed,
    'value',
    searchTotal,
    value.length === 0 || searchChoosed.length === searchTotal
  )
  return (
    <ul className="select_group">
      {type === 'MULTIPLE' && (
        <span
          key="all"
          className={`select_item ${
            (value.length === 0 || searchChoosed.length === searchTotal) &&
            'select_item_checked'
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
            value.includes(item.id) &&
            (!searchTotal || searchChoosed.length < searchTotal) &&
            'select_item_checked'
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
