declare type OptionItem = { value: string; label: string }

declare type RangeListItem = { value: number; label: string }

declare type RangeValItemType = number | string | null

declare type RangeValueType = Array<RangeValItemType> // 其中number 和 null 为范围类型时的类型值

declare type CheckValueType = Array<string>

declare type PropTypes = {
  type: string // 选项类型
  maxCount?: number //最多展示多少个 默认100
  searchVal?: string //搜索的值
  options?: Array<OptionItem> //选项列表
  value: RangeValueType //选中的值  范围时为number[]
  placeholder?: string //输入框的placeholder
  suffixLabel?: string //大于小于介于 后缀文字
  keyWordsLength?: number // 最多搜索5个客户名称，超过的客户名称不搜索
  onChange: (value: RangeValueType) => void
  onReset?: () => void // 重置
}

// 文本输入类型
declare type SelectTextPropTypes = {
  value: CheckValueType
  placeholder?: string // 输入框的placeholder
  keyWordsLength?: number // 最多搜索5个客户名称，超过的客户名称不搜索 默认5
  onChange: (value: CheckValueType) => void
  onReset?: () => void // 重置
}

// 范围选择类型
declare type SelectRangePropTypes = {
  value: RangeValueType
  suffixLabel: string //大于小于介于 后缀文字
  onChange: (value: RangeValueType) => void
  onReset?: () => void // 重置
}

// 单选 多选 类型
declare type SelectGroupPropTypes = {
  value: CheckValueType
  type: string // 选项类型
  maxCount?: number //最多展示多少个 默认100
  searchVal?: string //搜索的值
  options?: Array<OptionItem> //选项列表
  onChange: (value: CheckValueType) => void
  onReset?: () => void // 重置
}
