import React from 'react'
import { Button, Space, Select, DatePicker } from 'antd'
const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'
import './index.less'

type PropsType = {
  visible: boolean
  screenList: Array<any>
  onFilter: () => void
  onCancel: () => void
}

const FilterSortCondition: React.FC<PropsType> = ({
  visible,
  screenList = [],
  onFilter,
  onCancel,
}) => {
  return visible ? (
    <div className="filter-wrap">
      <div className="filter-condition">
        {screenList.map((item) => (
          <div className="filter-condition-item">
            <div className="filter-label">
              <i className="iconfont icon-liebiao" />
              <span>{item.label}</span>
            </div>
            <div className="filter-component">
              {item.type === 'date' ? (
                <RangePicker format={dateFormat} />
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
          <Button type="default" onClick={() => onCancel()}>
            取消
          </Button>
          <Button type="primary" onClick={() => onFilter()}>
            查询
          </Button>
        </Space>
      </div>
    </div>
  ) : null
}

export default FilterSortCondition
