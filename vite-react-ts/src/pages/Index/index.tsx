/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-10 10:19:10
 * @LastEditors: wujian
 * @LastEditTime: 2022-01-10 14:52:33
 */
import TagsDialog from '../../components/TagsDialog'
import React, { useState, useRef } from 'react'
import { Button, Rate } from 'antd'
// import qq from '/test'
import ColumFilter from '../../components/ColumFilter'

import AddbicTag from '../../components/AddbicTag'
import BatchAdd from '../../components/BatchAdd'
import CustomTagSelect from '../../components/customTagSelect'
import SearchMore from '../../components/SearchMore'
import EmotionTrend from '../../components/EmotionTrend'
import SortDemo from '../../components/sortDemo'

import StarTable from '../../components/starTable'
import MatrxTable from '../../components/MatrxComponent'
import matrxData from './test'
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
  const test = (val: any) => {
    console.log(val, 'tset')
  }
  const formData = {
    id: '2042aec693e14d65a6a130b5868bb4a7',
    name: '爱好2shg33',
    code: 'hofggesbby11',
    type: 'CHECKBOX',
    value: [
      {
        id: '56e4489f36a140898b44243cf8ca1d05',
        value: '篮球',
      },
      {
        id: '3aed786dcefa486b9d092b368cd06786',
        value: '足球2',
      },
    ],
    schemaList: ['篮球', '足球'],
  }

  //   console.log(qq, '555')
  const data = [
    { id: 1, name: '0000' },
    { id: 2, name: '1000' },
    { id: 3, name: '2000' },
    { id: 4, name: '0000' },
    { id: 5, name: '1000' },
    { id: 6, name: '2000' },
    { id: 7, name: '0000' },
    { id: 8, name: '1000' },
    { id: 9, name: '2000' },
    { id: 10, name: '0000' },
    { id: 12, name: '1000' },
    { id: 13, name: '2000' },
  ]

  const batchRef = useRef()

  const testData = [
    {
      id: 16,
      title: '矩阵行1',
      number: 1,
      colItems: [
        {
          id: 14,
          title: '选项1',
          value: false,
        },
        {
          id: 15,
          title: '选项2',
          value: true,
        },
      ],
    },
    {
      id: 17,
      title: '矩阵行2',
      number: 2,
      colItems: [
        {
          id: 14,
          title: '选项1',
          value: false,
        },
        {
          id: 15,
          title: '选项2',
          value: true,
        },
      ],
    },
  ]

  // 表格数据
  const [questionsData, setQuestionsData] = useState(testData)

  console.log(matrxData, 'matrxDatamatrxData')

  const { matrixQuestions, matrixAnswers, type, style, limit } = matrxData

  const options = matrixQuestions.map((item) => {
    const answerItem = matrixAnswers.find((k) => k.id === item.id)
    item.colItems.map((c, index) => {
      if (style) {
        //矩阵量表时 星星前面的也点亮  圆圈只点亮当前
        c.value =
          style === cellTypes['STAR']
            ? limit[0] + index <= answerItem.score
            : limit[0] + index === answerItem.score
      } else {
        c.value = answerItem ? answerItem.choosed.includes(c.title) : false
      }
      return c
    })
    return item
  })

  return (
    <div>
      <img src="logo.png" alt="00" />
      <i className="iconfont icon-liebiao" />
      <Button type="primary" onClick={() => setVisible(!visible)}>
        show
      </Button>
      <Button type="primary" onClick={() => batchRef.current.show()}>
        upload{' '}
      </Button>
      {/* <TagsDialog
        tags={[]}
        onClose={() => setVisible(false)}
        onConfirm={() => {}}
        visible={visible}
      /> */}
      {/* {visible && <span>000</span> && console.log(222)} */}
      <ColumFilter data={data} />

      {/* <AddbicTag
        onCancel={() => setVisible(false)}
        onOk={() => {}}
        visible={true}
        options={data}
        formData={formData}
      /> */}

      {/* <BatchAdd ref={batchRef} /> */}

      <SearchMore
        onSearchMore={(e) => console.log(e, 'sumbit')}
        fetchSchemaList={() => {}}
      />

      <EmotionTrend />

      {/* <StarTable
        questionData={questionsData}
        onTableChange={(data) => {
          console.log(data, 'ddd')
          setQuestionsData(data)
        }}
        //cellRender={<Rate />}
        cellType="Radio"
        columnEditDisabled={false} //cellType="Checkbox"
        // cellType="Rate"
        // columnEditDisabled
      /> */}

      <Rate
        className="test"
        character={({ index }) => <span className="rbq">{index}</span>}
      />

      <Rate character="好" allowHalf />

      <MatrxTable
        questionData={options}
        cellType="Star"
        rowEditDisabled
        columnEditDisabled
        cellDisabled
      />

      <SortDemo />
    </div>
  )
}

export default Index
