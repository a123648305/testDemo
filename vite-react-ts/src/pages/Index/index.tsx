/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-15 17:41:25
 */
import React, { useState, useRef } from 'react'
import { Button, Rate } from 'antd'
import CheckBlock from '../../components/CheckBlock'
import './index.less'

enum cellTypes {
  MATRIX_SINGLE_CHOICE = 'Radio',
  MATRIX_MULTIPLE_CHOICE = 'Checkbox',
  MATRIX_SCALE = 'Rate',
  STAR = 'Star',
  CIRCLE = 'Circle',
}

type PropsType = {}
const Index: React.FC<PropsType> = ({ ...props }) => {
  const [visible, setVisible] = useState(false)
  const [val, setVal] = useState([])
  const [searchVal, setSearchVal] = useState()

  //   console.log(qq, '555')
  const data = [
    {
      id: 'COMMENT',
      label: '电商评论',
    },
    {
      id: 'QUESTION',
      label: '电商问答',
    },
    {
      id: 'TICKET',
      label: '工单',
    },
    {
      id: 'SERVICE',
      label: '客服会话',
    },
    {
      id: 'BBS',
      label: '论坛',
    },
    {
      id: 'SELF',
      label: '内容电商',
    },
    {
      id: 'SOCIAL',
      label: '社交媒体',
    },
    {
      id: 'VIDEO',
      label: '视频',
    },
    {
      id: 'COMPLAINT',
      label: '投诉平台',
    },
    {
      id: 'QUE_ANS',
      label: '问答',
    },
    {
      id: 'QUESTIONAIRE',
      label: '问卷调研',
    },
    {
      id: 'NEWS',
      label: '新闻媒体',
    },
    {
      id: 'APP_COMMENT',
      label: '应用评论',
    },
  ]

  const data1 = [
    {
      id: 'COMMENT',
      label: '大于',
    },
    {
      id: 'QUESTION',
      label: '小于',
    },
    {
      id: 'TICKET',
      label: '介于',
    },
  ]

  const onChange = (val: any) => {
    console.log(val, 'val')
    setVal(val)
  }
  console.log(data, 'matrxDatamatrxData')

  return (
    <div>
      <i className="iconfont icon-liebiao" />
      <Button type="primary" onClick={() => setVisible(!visible)}>
        show
      </Button>
      <Button type="primary" onClick={() => batchRef.current.show()}>
        upload
      </Button>
      <p></p>
      <span>单选</span>
      <CheckBlock
        type="SINGLE"
        options={data}
        value={val}
        searchVal={searchVal}
        onChange={onChange}
        onReset={() => {}}
      ></CheckBlock>

      <span>多选</span>
      <CheckBlock
        type="MULTIPLE"
        options={data}
        value={val}
        searchVal={searchVal}
        onChange={onChange}
        onReset={() => {}}
      ></CheckBlock>

      <span>区间</span>
      <CheckBlock
        type="RANGE"
        options={data1}
        value={val}
        searchVal={searchVal}
        onChange={onChange}
        onReset={() => {}}
      ></CheckBlock>
    </div>
  )
}

export default Index
