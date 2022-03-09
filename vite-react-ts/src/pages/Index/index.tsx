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
  const [val1, setVal1] = useState([])
  const [val2, setVal2] = useState([])
  const [val3, setVal3] = useState([])
  const [searchVal, setSearchVal] = useState('')

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

  const onChange = (val: any, index: number) => {
    console.log(val, 'val', index)
    switch (index) {
      case 0:
        setVal(val)
        break
      case 1:
        setVal1(val)
        break
      case 2:
        setVal2(val)
        break
      case 3:
        setVal3(val)
        break
      default:
        break
    }
  }
  console.log(data, 'matrxDatamatrxData')

  return (
    <div>
      <i className="iconfont icon-liebiao" />
      <Button type="primary" onClick={() => setSearchVal('')}>
        show
      </Button>
      <Button type="primary" onClick={() => setSearchVal('评论')}>
        upload
      </Button>
      <p></p>
      <span>单选</span>
      <CheckBlock
        type="SINGLE"
        options={data}
        value={val}
        searchVal={searchVal}
        onChange={(val) => onChange(val, 0)}
        onReset={() => {}}
      ></CheckBlock>

      <span>多选</span>
      <CheckBlock
        type="MULTIPLE"
        options={data}
        value={val1}
        searchVal={searchVal}
        onChange={(val) => onChange(val, 1)}
        onReset={() => {}}
      ></CheckBlock>

      <span>区间</span>
      <CheckBlock
        type="RANGE"
        value={val2}
        onChange={(val) => onChange(val, 2)}
        onReset={() => {}}
      ></CheckBlock>

      <span>input</span>
      <CheckBlock
        type="TEXT"
        value={val3}
        onChange={(val) => onChange(val, 3)}
        onReset={() => {}}
      ></CheckBlock>
    </div>
  )
}

export default Index
