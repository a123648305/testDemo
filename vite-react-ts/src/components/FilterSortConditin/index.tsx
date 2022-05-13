import React, { useEffect, useMemo } from 'react'
import { Button, Space, Select, DatePicker } from 'antd'
import Sortable from 'sortablejs'
import './index.less'

const listId = '12000'
const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'

type PropsType = {
  visible: boolean
  screenList: Array<any>
  onFilter: (filterList: Array<any>) => void
  onCancel: (filterList: Array<any>) => void
  onSortList: (list: Array<any>) => void
}

const FilterSortCondition: React.FC<PropsType> = ({
  visible,
  screenList = [],
  onFilter,
  onCancel,
  onSortList,
}) => {
  const curScreenList = useMemo(() => [...screenList], [screenList])

  useEffect(() => {
    const dom = document.querySelector(`#filter-sort-condition`)
    dom &&
      Sortable.create(dom, {
        group: listId,
        animation: 150,
        // ghostClass: 'blue-background-class',
        // dragClass: 'sortable-drag-test',
        forceFallback: true,
        swapClass: 'highlight',
        handle: '.icon-liebiao',
        fallbackOnBody: true,
        invertSwap: true,
        delay: 5,
        onEnd: ({ newIndex, oldIndex }) => {
          console.log(newIndex, oldIndex, 'cc')
          if (newIndex === oldIndex) {
            return
          }
          const oldItem = curScreenList[oldIndex]
          curScreenList.splice(oldIndex, 1) //删除要拖动的元素
          curScreenList.splice(newIndex, 0, oldItem)
          onSortList && onSortList(curScreenList)
        },
      })
  })

  return visible ? (
    <div className="filter-wrap">
      <div className="filter-condition" id="filter-sort-condition">
        {curScreenList.map((item) => (
          <div className="filter-condition-item" key={item.id}>
            <div className="filter-label">
              <i className="iconfont icon-liebiao" />
              <span>{item.label}</span>
            </div>
            <div className="filter-component">
              {item.type === 'date' ? (
                <RangePicker picker={item.dateType} />
              ) : (
                <Select defaultValue="全部" style={{ width: 200 }}>
                  <Select.Option value="全部">全部</Select.Option>
                </Select>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-button">
        <Space>
          <Button type="default" onClick={() => onCancel(curScreenList)}>
            取消
          </Button>
          <Button type="primary" onClick={() => onFilter(curScreenList)}>
            查询
          </Button>
        </Space>
      </div>
    </div>
  ) : null
}

export default FilterSortCondition
