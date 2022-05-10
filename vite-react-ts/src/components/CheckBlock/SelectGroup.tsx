import React, { useState, useEffect } from 'react'
import produce from 'immer'
// 单选 多选组
const SelectGroup: React.FC<SelectGroupPropTypes> = ({
  type,
  value,
  options = [],
  onChange,
  searchVal,
  maxCount = 100,
}) => {
  // 当前展示的 list
  const [list, setList] = useState<Array<OptionItem>>([])
  // 设置搜索选中的值
  const [searchChoosed, setSearchChoosed] = useState<Array<string>>([])
  // 全选亮起
  const [isAllChoosed, setIsAllChoosed] = useState<boolean>(false)

  useEffect(() => {
    if (searchVal) {
      // 带搜索 只展示搜索结果
      const newList = options.filter((k) => new RegExp(searchVal).test(k.label))

      // 筛选出已选中的
      const newVal = value.filter((k) => newList.find((d) => d.value === k))

      setList(newList)
      setSearchChoosed(newVal)
      setIsAllChoosed(newVal.length === 0 || newVal.length === newList.length)
    } else {
      // 如果没有搜索值，则把(maxcount 后面)选中的值排前面
      const newList = produce(options, (draft) => {
        const afterArr = draft.slice(maxCount)
        const selectedArr = afterArr.filter((k) => value.includes(k.value))
        if (selectedArr.length) {
          // 添加到前面去
          //   draft.unshift(...selectedArr)
          selectedArr.map((item) => {
            const afterItemIndex = draft.findIndex(
              (k) => k.value === item.value
            )
            // 前maxCount 个中找出第几个没选中的
            const beforeItemIndex: number = draft.findIndex(
              (j) => !value.includes(j.value)
            )
            // 交互位置
            let tem = draft[beforeItemIndex]
            draft[beforeItemIndex] = draft[afterItemIndex]
            draft[afterItemIndex] = tem
          })
        }
      })
      setList(newList)
      setSearchChoosed([])
      setIsAllChoosed(value.length === 0)
    }
  }, [value, searchVal, options, maxCount])

  // 点击选项
  const onTaggle = (item: OptionItem) => {
    let choosed = value
    if (type === 'SINGLE') {
      choosed = [item.value]
    }
    if (type === 'MULTIPLE') {
      if (value.includes(item.value)) {
        choosed = value.filter((val) => val !== item.value)
      } else {
        choosed =
          value.length + 1 === options.length ? [] : [...value, item.value]
      }
    }
    onChange(choosed)
  }

  // 全选
  const handleAll = () => {
    searchVal ? onChange(list as unknown as string[]) : onChange([])
    setIsAllChoosed(true)
  }

  return (
    <div className="select_group">
      {type === 'MULTIPLE' && (
        <div className="select_group_all">
          <span
            key="all"
            className={`select_item ${isAllChoosed && 'select_item_checked'}`}
            onClick={() => handleAll()}
          >
            全选
          </span>
        </div>
      )}
      <ul className="select_group_ul">
        {list.slice(0, maxCount).map((item) => (
          <span
            key={item.value}
            className={`select_item ${
              value.includes(item.value) &&
              !isAllChoosed &&
              'select_item_checked'
            }`}
            onClick={() => onTaggle(item)}
          >
            {item.label}
          </span>
        ))}
        {list.length > maxCount && (
          <span className="hide_hint">
            — 该数值展示不会超过{maxCount}条,需要查看更多请搜索
          </span>
        )}
      </ul>
    </div>
  )
}

export default SelectGroup
