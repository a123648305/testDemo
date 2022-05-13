import React, { useState } from 'react'
import { Button, Space, Modal } from 'antd'
import FilterDatePicker from '../DatePicker'
import FilterSortCondition from '../FilterSortConditin'
import AddFilterModal from '../AddFilterModal'
import './index.less'

type PropsType = {
  title: string | React.ReactNode
  screenList: Array<any>
  onFilter: (filterList: any) => void
  onExport: (filterList: any) => void
  onSortList: (filterList: any) => void
  onAddGraph: (payload: any) => void
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
  onSortList,
  onAddGraph,
}) => {
  const [addGraphVisible, setAddGraphVisible] = useState(false)
  const [addFilterVisible, setAddFilterVisible] = useState(true)
  const [conditionVisible, SetConditionVisible] = useState(false)
  const [dateVisible, SetDateVisible] = useState(false)

  return (
    <div className="dashBord-filter-wrap">
      <div className="dashBord-header">
        <div className="left-content">
          <div className="title">{title}</div>
          <i
            className="iconfont icon-liebiao"
            onClick={() => SetConditionVisible(true)}
          />
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
        onFilter={(filterList) => {
          SetConditionVisible(false)
          onFilter(filterList)
        }}
        onCancel={() => {
          SetConditionVisible(false)
        }}
        onSortList={onSortList}
      />

      <Modal
        title="添加图表"
        visible={addGraphVisible}
        onOk={onAddGraph}
        onCancel={() => setAddGraphVisible(false)}
        footer={null}
        wrapClassName="add-graph-modal"
      >
        <div className="add-graph-content">
          <div className="add-graph-new">+ 新建图表</div>
          <div className="add-graph-template">选择模板</div>
        </div>
      </Modal>

      <AddFilterModal visible={addFilterVisible} />
    </div>
  )
}
export default DashBoardFilter
