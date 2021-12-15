/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-12-14 18:33:28
 * @LastEditors: wujian
 * @LastEditTime: 2021-12-15 18:13:36
 */
import React, { useEffect, useState } from 'react'
import { Table, Radio, Input, Checkbox } from 'antd'
import produce from 'immer'
import './index.less'
import { ColumnsType } from 'antd/lib/table'

// 内容单元格内置类型支持 单选Radic 多选Checkbox 量表Rate 若需其他类型请使用自定义cellRender
declare type cellType = 'Radio' | 'Checkbox' | 'Rate' | undefined

type cellItem = { id?: number | string; title: string; value: any }

type questionItem = {
  id: string
  number: number
  title: string
  colItems: Array<cellItem>
}

type PropsType = {
  questionData: Array<questionItem>
  cellRender?: React.ReactNode
  cellType?: cellType
  onTableChange: (payload: any) => void
}

const StarTable: React.FC<PropsType> = ({
  questionData,
  cellType,
  cellRender,
  onTableChange,
}) => {
  console.log(questionData, cellType, 'dataSource')

  // 左边固定的一列标题
  const fixedColumns = [
    {
      title: () => <div className="oblique_angle"></div>,
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      align: 'center',
      width: 180,
      render: (text: string, row: object) => (
        <div className="header_title header_first_column">
          <Input
            bordered={false}
            defaultValue={text}
            className="edit_input"
            onBlur={(e) => handleTitleChange(e, 'name', row)}
          />
        </div>
      ),
    },
  ]

  const [columns, setColumns] = useState(fixedColumns)
  const [dataSource, setDataSource] = useState<any[]>([])

  const handleTableChange = (val: boolean, type: string, row: object) => {
    console.log(val, type, row, 'change')
    // onTableChange
    // 更新questionData
    // onTableChange(questionData)
  }

  // 编辑标题 方法更新
  const handleTitleChange = (e: any, type: string, row?: object) => {
    console.log(e.target.value, type, 'input', row)
  }

  // 表格标题 带编辑框
  const headerTitle = (val: string, cellItem: cellItem) => (
    <div className="header_title">
      <Input
        bordered={false}
        defaultValue={val}
        className="edit_input"
        onBlur={(e) => handleTitleChange(e, 'column', cellItem)}
      />
    </div>
  )

  // 生成column
  const cellTypeRender = (cellItem: cellItem) => {
    const type = cellType || 'customer' // 内置类型或者自定义渲染
    const { title, value, id } = cellItem
    let columnObj = {
      title: headerTitle(title, cellItem),
      dataIndex: title,
      key: id,
      align: 'center',
      width: 160,
      render: (text: boolean, row: object) =>
        type === 'Radio' ? (
          <Radio.Group
            onChange={(e) => handleTableChange(e.target.checked, 'Radio', row)}
          >
            <Radio defaultChecked={text} value={text}></Radio>
          </Radio.Group>
        ) : type === 'Checkbox' ? (
          <Checkbox
            defaultChecked={text}
            onChange={(e) =>
              handleTableChange(e.target.checked, 'checkbox', row)
            }
          ></Checkbox>
        ) : type === 'customer' ? (
          cellRender
        ) : (
          text
        ),
    }
    return columnObj
  }

  useEffect(() => {
    console.log(questionData, 'table testData')

    let showColumn: any[] = []
    let showDataSource: any[] = []

    questionData.map((item: questionItem, index) => {
      const { id, title, number } = item
      let row: any = { id, title, number }
      item.colItems.map((cell: cellItem) => {
        // 生成 column
        index === 0 && showColumn.push(cellTypeRender(cell))

        // 转换成table 数据[{name:'矩阵行1','选项1':true,'选项2':false},{name:'矩阵行2','选项1':true,'选项2':false}]
        row[cell.title] = cell.value
      })
      showDataSource.push(row)
    })
    setColumns([...fixedColumns, ...showColumn])
    setDataSource(showDataSource)
  }, [questionData])

  console.log(columns, dataSource, 'render')
  return (
    <Table
      className="scale_table"
      columns={columns as any}
      dataSource={dataSource}
      scroll={{ x: true }}
      pagination={false}
      rowClassName="starTable_row"
      bordered
      rowKey="id"
    />
  )
}

export default StarTable
