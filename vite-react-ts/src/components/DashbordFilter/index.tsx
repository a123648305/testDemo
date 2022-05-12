import React from 'react'
import { Button, Space } from 'antd'
import DatePicker from '../DatePicker'
import './index.less'

type PropsType = {
  title: string | React.ReactNode
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
  onFilter,
  onExport,
}) => {
  return (
    <div className="dashBord-filter-wrap">
      <div className="dashBord-header">
        <div className="left-content">
          <div className="title">{title}</div>
          <i className="iconfont icon-liebiao" />
          <Space>
            <Button type="primary" onClick={() => onFilter(Math.random())}>
              <i className="iconfont icon-liebiao" />
              <span>添加图表</span>
            </Button>
            <Button type="default" onClick={() => onFilter(Math.random())}>
              <i className="iconfont icon-liebiao" />
              <span>添加筛选</span>
            </Button>
          </Space>
        </div>
        <div className="right-content">
          <Space>
            <DatePicker
              // ref={(ref) => (this.timePicker = ref)}
              changeFilter={() => {}}
              show={true}
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
            </DatePicker>
            <Button type="default" onClick={onExport}>
              导出
            </Button>
          </Space>
        </div>
      </div>
      <span className="dashBord-hr"></span>
      <div className="dashBord-content">
        sss
        <div className="footer-button">
          <Space>
            <Button type="default" onClick={() => onFilter(Math.random())}>
              取消
            </Button>
            <Button type="primary" onClick={() => onFilter(Math.random())}>
              查询
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default DashBoardFilter
