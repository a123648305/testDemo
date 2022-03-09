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
    const newVal = value.filter((k) => list.find((d) => d.value === k))
    searchTotal ? setSearchChoosed(newVal) : setSearchChoosed([])
  }, [searchTotal])

  // 点击选项
  const onTaggle = (item: OptionItem) => {
    let choosed = value
    if (type === 'SINGLE') {
      choosed = [item.value]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.value)) {
        choosed = value.filter((val) => val !== item.value)

        // 搜索列表下 点击已选中 的切换状态
        const newSearch = searchChoosed.filter(
          (val: string) => val !== item.value
        )
        searchTotal && setSearchChoosed(newSearch)
      } else if (searchTotal && searchTotal < total) {
        // 查询出的数量小于总数量
        choosed = [...value, item.value]
        const newSearch = searchChoosed.filter(
          (val: string) => val !== item.value
        )
        setSearchChoosed([...newSearch, item.value])
      } else {
        choosed = value.length + 1 === total ? [] : [...value, item.value]
      }
    }
    onChange(choosed)
  }
  return (
    <ul className="select_group">
      {type === 'MULTIPLE' && (
        <span
          key="all"
          className={`select_item ${
            (value.length === 0 ||
              (searchTotal && searchChoosed.length === searchTotal)) &&
            'select_item_checked'
          }`}
          onClick={() => onChange([])}
        >
          全选
        </span>
      )}
      {list.map((item) => (
        <span
          key={item.value}
          className={`select_item ${
            value.includes(item.value) &&
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
