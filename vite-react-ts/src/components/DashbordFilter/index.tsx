import React, { useState } from 'react'
import { Button, Space } from 'antd'
import FilterDatePicker from '../DatePicker'
import FilterSortCondition from '../FilterSortConditin'
import './index.less'

type PropsType = {
  title: string | React.ReactNode
  screenList: Array<any>
  onFilter: (value: any) => void
  onExport: () => void
}

const filterDateFilter = {
  from: '2022-05-11 15:40:46',
  to: '2022-05-12 15:40:46',
  quickChoice: '近24小时',
  dateGroupType: 'DAY',
  remoteName: 'cTime',
  numOfDays: 1,
  currSelector: 0,
}

const DashBoardFilter: React.FC<PropsType> = ({
  title,
  screenList = [],
  onFilter,
  onExport,
}) => {
  const [conditionVisible, SetConditionVisible] = useState(false)
  const [dateVisible, SetDateVisible] = useState(false)

  return (
    <div className="dashBord-filter-wrap">
      <div className="dashBord-header">
        <div className="left-content">
          <div className="title">{title}</div>
          <i className="iconfont icon-liebiao" />
          <Space>
            <Button type="primary" onClick={() => onFilter(Math.random())}>
              <i className="iconfont icon-liebiao" />
              <span onClick={() => SetConditionVisible(true)}>添加图表</span>
            </Button>
            <Button type="default" onClick={() => onFilter(Math.random())}>
              <i className="iconfont icon-liebiao" />
              <span onClick={() => SetDateVisible(true)}>添加筛选</span>
            </Button>
          </Space>
        </div>
        <div className="right-content">
          <Space>
            <FilterDatePicker
              // ref={(ref) => (this.timePicker = ref)}
              changeFilter={() => {}}
              show={dateVisible}
              onChange={() => {}}
              filterDateFilter={filterDateFilter}
              dateFilter={filterDateFilter}
            >
              <Button type="default" onClick={onExport}>
                <i className="iconfont icon-liebiao" />
                <span className="date-picker-lable">
                  2022/03/05 - 2022/04/05
                </span>
              </Button>
            </FilterDatePicker>
            <Button type="default" onClick={onExport}>
              导出
            </Button>
          </Space>
        </div>
      </div>
      <span className="dashBord-hr"></span>
      <FilterSortCondition
        visible={conditionVisible}
        screenList={screenList}
        onFilter={() => {
          throw new Error('Function not implemented.')
          SetConditionVisible(false)
        }}
        onCancel={() => {
          SetConditionVisible(false)
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}
export default DashBoardFilter
