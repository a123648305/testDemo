import React, { useState } from 'react'
import { InputNumber, Space } from 'antd'

const list: Array<RangeListItem> = [
  { id: 0, label: '全部' },
  { id: 1, label: '大于' },
  { id: 2, label: '小于' },
  { id: 3, label: '介于' },
]

const getCalcType = (value: RangeValueType): number => {
  const len = value.length
  if (len === 0) {
    return 0
  }
  const [first, last] = value
  if (first) {
    return last ? 3 : 1 //存在两个有效值为介于 否则为大于
  }
  return 2 // 剩下的只有小于
}

// 范围 选择
const SelectRange: React.FC<SelectPropTypes> = ({
  value,
  suffixLabel,
  onChange,
}) => {
  const [calcType, seTcalcType] = useState(getCalcType(value))
  const [fistValue, setFirstVal] = useState<RangeValItemType>(
    value[0] || value[1] || null
  )
  const [lastValue, setLastVal] = useState<RangeValItemType>(value[1] || null)
  // 点击选项
  const onTaggle = (item: RangeListItem) => {
    const { id } = item
    if (id === calcType) return
    seTcalcType(id)
    // 0--[]  其他--[first,last]
    const newCurentVal = id === 0 ? [] : [null, null]
    setFirstVal(null)
    setLastVal(null)
    onChange(newCurentVal)
  }

  const numberChange = (val: number | string, type: string) => {
    console.log(val, type, 'val')
    let newCurentVal = []
    if (type === 'first') {
      // 1--大于  2--小于  3--介于
      newCurentVal = calcType === 2 ? [null, val] : [val, lastValue]
      setFirstVal(val)
    } else {
      newCurentVal = [fistValue, val]
      setLastVal(val)
    }
    console.log(newCurentVal, 'newCurentVal')
    onChange(newCurentVal)
  }

  return (
    <ul className="select_group select_range">
      {list.map((item) => (
        <span
          key={item.id}
          className={`select_item ${
            calcType === item.id && 'select_item_checked'
          }`}
          onClick={() => onTaggle(item)}
        >
          {item.label}
        </span>
      ))}
      {calcType > 0 && (
        <Space>
          <InputNumber
            size="small"
            controls={false}
            value={fistValue || ''}
            max={lastValue || Number.MAX_SAFE_INTEGER}
            onChange={(val) => numberChange(val, 'first')}
          />
          {calcType === 3 && (
            <>
              <span>-</span>
              <InputNumber
                size="small"
                controls={false}
                value={lastValue || ''}
                min={fistValue || Number.MIN_SAFE_INTEGER}
                onChange={(val) => numberChange(val, 'last')}
              />
            </>
          )}
          <span>{suffixLabel}</span>
        </Space>
      )}
    </ul>
  )
}

export default SelectRange
