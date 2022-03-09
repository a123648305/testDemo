declare type OptionItem = { value: string; label: string }

declare type RangeListItem = { value: number; label: string }

declare type RangeValItemType = number | string | null

declare type RangeValueType = Array<RangeValItemType> // 其中number 和 null 为范围类型时的类型值

declare type CheckValueType = Array<string | number>

declare type PropTypes = {
  type: string // 选项类型
  maxCount?: number //最多展示多少个 默认100
  searchVal?: string //搜索的值
  options?: Array<OptionItem> //选项列表
  value: RangeValueType //选中的值  范围时为number[]
  placeholder?: string //输入框的placeholder
  suffixLabel?: string //大于小于介于 后缀文字
  onChange: (value: RangeValueType) => void
  onReset?: () => void // 重置
}

declare type SelectPropTypes = {
  type: string
  value: RangeValueType
  total: number
  list: Array<OptionItem>
  searchTotal: number
  placeholder?: string //输入框的placeholder
  suffixLabel?: string //大于小于介于 后缀文字
  onChange: (value: RangeValueType) => void
}
