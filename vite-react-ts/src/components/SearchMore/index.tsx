/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-19 15:57:33
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-28 11:40:51
 */
import React, { useState, useEffect } from 'react'
import { Popover } from 'antd'
import Screen from './Screen'
import './index.less'

type PropsType = {
  //onSearchMore: (payload) => void
  fetchSchemaList: () => void
}

import testData from './testData'
const chartData = [
  {
    id: '0b31613273194d9da7417d598830f6a7',
    name: '数字',
    code: 'keyword1566',
    type: 'NUMERIC',
    currentValue: '',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '701fae0a9b824e348266b8db376ac1ec',
    updator: 'e4de893fa1bf415ab32fc0910f5e1a2e',
    updatedAt: '2021-10-27T09:39:58',
  },
  {
    id: '1ad5e7f15fac4f12a58ae8c621b2ce45',
    name: '10个字段今天天气好',
    code: 'keyword1945',
    type: 'DATE_TIME',
    currentValue: '',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '701fae0a9b824e348266b8db376ac1ec',
    updator: '701fae0a9b824e348266b8db376ac1ec',
    updatedAt: '2021-10-26T15:54:52',
  },
  {
    id: '5d04c70675844237971ece7aff69a738',
    name: '多选',
    code: 'keyword1527',
    type: 'CHECKBOX',
    currentValue:
      '[{"key":"92bb14c7a57445eb9dbb29e2541fc200","value":"10"},{"key":"3302ce0eb1a845e687aa397cdfdf29e0","value":"20"}]',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '701fae0a9b824e348266b8db376ac1ec',
    updator: '701fae0a9b824e348266b8db376ac1ec',
    updatedAt: '2021-10-26T16:33:39',
  },
  {
    id: '680e6b84eda541cf8d0d2b010a315ecf',
    name: '职位',
    code: 'keyword1438',
    type: 'CHECKBOX',
    currentValue:
      '[{"key":"373b9deb7c314b0f87b679a3edb510de","value":"1"},{"key":"1d67beafb0e343e4a2ed4b6dafec529b","value":"2"},{"key":"923c2f7c004945cfa2fd7da555405bbc","value":"3"},{"key":"2997189f3e2c479c863012e4e9010341","value":"4"}]',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: 'acd3c26961204bc6af36134f2f70a606',
    updator: 'acd3c26961204bc6af36134f2f70a606',
    updatedAt: '2021-10-27T12:28:01',
  },
  {
    id: '888',
    name: '自我介绍',
    code: 'introduction',
    type: 'TEXT',
    currentValue: '',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '01f6932dc69c4d748999919182f0c16e',
    updator: '01f6932dc69c4d748999919182f0c16e',
    updatedAt: '2021-10-22T11:00:11',
  },
  {
    id: 'cc3d255121f5416e960dcaf411527067',
    name: '这个有必要20个吗上面表单label11',
    code: 'keyword1898',
    type: 'RADIO',
    currentValue:
      '[{"key":"e45cfc3238e54bf193edbf22df89c2a6","value":"222"},{"key":"e80e6e923fcf4cc28bd394a4c2694fb0","value":"33"}]',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '701fae0a9b824e348266b8db376ac1ec',
    updator: '701fae0a9b824e348266b8db376ac1ec',
    updatedAt: '2021-10-26T15:54:09',
  },
  {
    id: 'da510826e80b4972b6e0c1fda894b0aa',
    name: '单选',
    code: 'keyword1277',
    type: 'RADIO',
    currentValue:
      '[{"key":"7d383479024e4827b72d19f1ffa8b42d","value":"50"},{"key":"effdad3dafb149e991fd0f0abc9506d7","value":"60"}]',
    isDetailVisible: true,
    isListFilter: true,
    isUnique: false,
    creator: '701fae0a9b824e348266b8db376ac1ec',
    updator: '701fae0a9b824e348266b8db376ac1ec',
    updatedAt: '2021-10-26T16:34:00',
  },
]

const SearchMore: React.FC<PropsType> = ({ fetchSchemaList }) => {
  const [showMore, setShowMore] = useState(false)
  const [filtersList, setFiltersList] = useState([])
  const [screensList, setScreensList] = useState([])

  const updatafiltersList = (e) => {
    console.log(e, 'updatafiltersList')
    setFiltersList(filtersList.map((it) => it))
  }

  const handlefiltersList = (list) => {
    console.log(list, 'handlefiltersList')
    setFiltersList(list.map((it) => it))
  }

  const getSchemaList = async () => {
    // const result = await fetchSchemaList();
    const result = chartData
    setScreensList(chartData)
  }

  useEffect(() => {
    getSchemaList()
  }, [])

  const onSearchMore = (e) => {
    console.log(onSearchMore, 'ee')
  }

  return (
    <div
      className={`yt-search-more-selector-wrapper ${
        showMore ? 'yt-search-more-selector-wrapper-show' : ''
      }`}
    >
      <Popover
        content={
          <Screen
            changeScreenVisible={() => setShowMore(!showMore)}
            screensList={screensList}
            filtersList={filtersList}
            handleScreenList={() => onSearchMore(filtersList)}
            handlefiltersList={handlefiltersList}
            updatafiltersList={updatafiltersList}
          />
        }
        trigger="click"
        placement="bottomLeft"
        // visible={showMore}
        onVisibleChange={(visible) => setShowMore(visible)}
      >
        <div className={`ets-trigger`} onClick={() => setShowMore(!showMore)}>
          <span className="ets-trigger-pre-title">更多</span>
          {/** 箭头 */}
          <i
            className="icon-cem_arrow-launches"
            style={{
              transform: showMore ? 'rotate(-180deg)' : '',
            }}
          />
        </div>
      </Popover>
    </div>
  )
}

export default SearchMore
