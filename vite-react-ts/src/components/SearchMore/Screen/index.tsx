/*
 * @Author: chenwu
 * @Date: 2021-10-12 16:44:20
 * @LastEditTime: 2021-10-28 11:13:14
 * @LastEditors: wujian
 */
import React, { useState } from 'react'
import { Select, Button } from 'antd'
import { fieldEnum, dateTimes } from './utils'
import './index.less'
import Views from '../Units/index'

import _ from 'lodash'
interface PropsType {
  changeScreenVisible: (val: any) => void
  screensList: any[]
  filtersList: any[]
  handlefiltersList: (val: any) => void
  handleScreenList: (val?: any) => void
  updatafiltersList: (val?: any) => void
}
const { Option } = Select

const Screen: React.FC<PropsType> = (props) => {
  const {
    changeScreenVisible,
    screensList,
    filtersList,
    handlefiltersList,
    handleScreenList,
    updatafiltersList,
  } = props
  const chooseTimeType = (e, index) => {
    const filtersLists = _.cloneDeep(filtersList)
    filtersLists[index].timeType = e
    filtersLists[index].value = undefined
    handlefiltersList(filtersLists)
  }
  const delItem = (index) => {
    const filtersLists = _.cloneDeep(filtersList)
    filtersLists.splice(index, 1)
    handlefiltersList(filtersLists)
  }
  const addItem = () => {
    const filtersLists = _.cloneDeep(filtersList).concat([{ type: 'TEXT' }])
    handlefiltersList(filtersLists)
  }
  const chooseField = (e, val, index) => {
    const filtersLists = _.cloneDeep(filtersList)
    const screensLists = _.cloneDeep(screensList)
    const indx = filtersLists.findIndex((i) => i.id === e)
    const temp =
      indx >= 0
        ? filtersLists.splice(index, 1, filtersLists[indx])
        : filtersLists.splice(index, 1, screensLists[val.key])
    indx >= 0 && filtersLists.splice(indx, 1, temp[0])
    handlefiltersList(filtersLists)
  }

  return (
    <div className="workorder_screen">
      <div className="screen_header">
        <span className="header_title">设置筛选条件</span>
        {filtersList.length > 1 && (
          <span className="header_desc">符合以下所有条件</span>
        )}
      </div>
      <div className="screen_content">
        {filtersList.map((it: any, index) => {
          it.func = updatafiltersList
          return (
            <div key={index} className="screen_content_item">
              <Select
                value={it.name}
                placeholder="请选择"
                style={{ width: '120px', marginRight: '50px' }}
                onChange={(e, val) => {
                  chooseField(e, val, index)
                }}
              >
                {screensList.map((i: any, indx) => {
                  return (
                    <Option value={i.id} key={indx} type={i.type}>
                      {i.name}
                    </Option>
                  )
                })}
              </Select>
              {dateTimes.includes(it.type) ? (
                <Select
                  value={it.timeType}
                  placeholder="请选择"
                  style={{ width: '70px', marginRight: '10px' }}
                  onChange={(e) => {
                    chooseTimeType(e, index)
                  }}
                >
                  {it.type &&
                    fieldEnum[it.type].enum.map((i, index) => {
                      return (
                        <Option value={i.value} key={index}>
                          {i.name}
                        </Option>
                      )
                    })}
                </Select>
              ) : null}
              {it.timeType === 'be'
                ? Views['RangePicker'](it)
                : Views[fieldEnum[it.type].type](it)}
              <i
                className="icon-cem_cancel"
                style={{ marginLeft: '10px', color: '#BEBEBE' }}
                onClick={() => {
                  delItem(index)
                }}
              />
            </div>
          )
        })}
        <div className="add-item">
          <i className="icon-cem_add-to" />
          <span onClick={addItem}>添加筛选条件</span>
        </div>
      </div>
      <div className="screen_bottom">
        <Button
          onClick={() => {
            changeScreenVisible(false)
          }}
        >
          取消
        </Button>
        <Button
          type="primary"
          onClick={() => {
            handleScreenList()
            changeScreenVisible(false)
          }}
        >
          确定
        </Button>
      </div>
    </div>
  )
}
export default Screen
