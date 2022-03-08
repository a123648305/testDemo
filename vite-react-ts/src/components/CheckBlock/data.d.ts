type OptionItem = { id: string; label: string }
type PropTypes = {
  type: string // 选项类型
  maxCount?: number //最多展示多少个 默认100
  searchVal?: string //搜索的值
  options: Array<OptionItem> //选项列表
  value: Array<string> //选中的值
  onChange: (value: {
    type: string
    choosed: Array<string>
    value: number[] | string | number
  }) => void
  onReset: () => void // 重置
}

type SelectPropTypes = {
  type: string
  value: Array<string>
  total: number
  list: Array<OptionItem>
  onChange: (value: {
    type: string
    choosed: Array<string>
    value: number[] | string | number
  }) => void
}
