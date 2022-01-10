/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-12-14 18:33:28
 * @LastEditors: wujian
 * @LastEditTime: 2021-12-31 10:19:16
 */
import React, { useEffect, useState } from 'react'
import { Table, Radio, Input, Checkbox, Rate } from 'antd'
import produce from 'immer'
import './index.less'
const { TextArea } = Input
// 内容单元格内置类型支持 单选Radic 多选Checkbox 量表星星Rate 量表圆圈Circle 若需其他类型请使用自定义cellRender
declare type cellType = 'Radio' | 'Checkbox' | 'Star' | 'Circle' | undefined

type CellItem = { id: string; title: string; value: boolean }

type QuestionItem = {
  id: string
  number: number
  title: string
  colItems: CellItem[]
}

type titleParams = {
  inputValue: string
  type: string
  row: object
}

type PropsType = {
  /** @type {Array} 列表数据 */
  questionData: Array<QuestionItem>
  /**@type {React.ReactNode} 单元格填充 其他类型自定义渲染 例如cellRender={<Rate />} */
  cellRender?: React.ReactNode
  /** @type {cellType} 单元格填充内置类型 支持 单选Radio 多选Checkbox 量表星星Star 量表圆圈Circle 若需其他类型请使用自定义cellRender */
  cellType?: cellType
  /** @type {boolean} 列标题是否可编辑 默认可编辑 */
  columnEditDisabled?: boolean
  /** @type {boolean} 行标题是否可编辑 默认可编辑 */
  rowEditDisabled?: boolean
  /** @type {boolean} cell单元格是否可编辑 默认可编辑 */
  cellDisabled?: boolean
  /** @type {function} 各种交互动作 回调方法 */
  onTableChange?: (payload: any) => void
  /** @type {function} 标题文字改变 回调方法 titleParams:{type:row 行 column 列 row 数据 inputValue value }*/
  onTitleChange?: (payload: titleParams) => void
}

const StarTable: React.FC<PropsType> = ({
  questionData,
  cellType,
  cellRender,
  columnEditDisabled = false,
  rowEditDisabled = false,
  cellDisabled = false,
  onTableChange,
  onTitleChange,
}) => {
  console.log(
    cellType,
    columnEditDisabled,
    rowEditDisabled,
    cellDisabled,
    'mount'
  )

  // 左边固定的一列标题
  const fixedColumns = [
    {
      title: () => <div className="oblique_angle" />,
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      align: 'center',
      width: 180,
      editable: true,
      render: (text: string, row: CellItem) =>
        rowEditDisabled ? <span>{text}</span> : headerTitle(text, row, 'row'),
    },
  ]

  const [columns, setColumns] = useState(fixedColumns)
  const [dataSource, setDataSource] = useState<any[]>([])

  const handleTableChange = (
    val: boolean,
    type: string,
    name: string,
    row: CellItem
  ) => {
    // console.log(val, type, row, name, 'updateTable');
    if (type === 'Radio') {
      // 更新对应列表数据value 值
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        item &&
          item.colItems.map((col) => {
            // 单选互斥 当前项取操作值，不是当前项true则选择为false
            col.value = col.title === name ? val : col.value && false
            return col
          })
        return draft
      })
      onTableChange && onTableChange(newData)
    }
    if (type === 'Checkbox') {
      // 更新对应列表数据value 值
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        const colItem = item?.colItems.find((j) => j.title === name)
        colItem && (colItem.value = val)
        return draft
      })
      onTableChange && onTableChange(newData)
    }
    if (type === 'Star') {
      // 更新对应列表数据value 值
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        const rateArr = item?.colItems || []
        const rateIndex = rateArr.findIndex((j) => j.title === name)
        rateArr.forEach((d, index) => {
          if (val) {
            d.value = index <= rateIndex
          } else {
            d.value = index < rateIndex
          }
        })
        return draft
      })
      onTableChange && onTableChange(newData)
    }
  }

  // 编辑标题 方法更新
  const handleTitleChange = (
    e: any,
    type: string,
    row: CellItem
  ): boolean | void => {
    const inputValue = e.target.value
    if (inputValue === row.title) {
      // TODO  输入相同 以及为空校验
      return true
    }
    onTitleChange &&
      onTitleChange({ inputValue: inputValue || row.title, type, row })
  }

  // 表格标题 带编辑框
  const headerTitle = (val: string, cellItem: CellItem, type: string) => (
    <div className="header_title">
      <TextArea
        bordered={false}
        defaultValue={val}
        className="edit_input"
        onBlur={(e) => handleTitleChange(e, type, cellItem)}
        autoSize={true}
      />
    </div>
  )

  // 生成column
  const cellTypeRender = (cellItem: CellItem) => {
    const type = cellType || 'customer' // 内置类型或者自定义渲染
    const { title, value, id } = cellItem
    const columnObj = {
      title: columnEditDisabled ? (
        <span className="preview_table_cell">{title}</span>
      ) : (
        headerTitle(title, cellItem, 'column')
      ),
      dataIndex: title,
      key: id,
      align: 'center',
      width: 160,
      render: (text: boolean, row: CellItem) =>
        ['Circle', 'Star'].includes(type) &&
        !text &&
        cellDisabled ? null : type === 'Radio' ? (
          <Radio.Group
            onChange={(e) =>
              handleTableChange(e.target.checked, 'Radio', title, row)
            }
            value={text}
            disabled={cellDisabled}
          >
            <Radio value={true} />
          </Radio.Group>
        ) : type === 'Checkbox' ? (
          <Checkbox
            defaultChecked={text}
            onChange={(e) =>
              handleTableChange(e.target.checked, 'Checkbox', title, row)
            }
            disabled={cellDisabled}
          />
        ) : type === 'Star' ? (
          <Rate
            value={+text}
            count={1}
            className="matrx-rate"
            onChange={(e) => handleTableChange(!!e, 'Star', title, row)}
          />
        ) : type === 'Circle' ? (
          <div
            style={{ display: 'inline-block' }}
            onClick={() =>
              !cellDisabled && handleTableChange(!text, 'Star', title, row)
            }
          >
            <Radio.Group value={text}>
              <Radio value={true} />
            </Radio.Group>
          </div>
        ) : type === 'customer' ? (
          cellRender
        ) : (
          text
        ),
    }

    return columnObj
  }

  useEffect(() => {
    const showColumn: any[] = []
    const showDataSource: any[] = []

    questionData.map((item: QuestionItem, index) => {
      const { id, title, number } = item
      const row: { id: string; title: string; number: number } = {
        id,
        title,
        number,
      }
      item.colItems.map((cell: CellItem) => {
        // 生成 column
        index === 0 && showColumn.push(cellTypeRender(cell))

        // 转换成table 数据[{name:'矩阵行1','选项1':true,'选项2':false},{name:'矩阵行2','选项1':true,'选项2':false}]
        row[cell.title] = cell.value
        return cell
      })
      showDataSource.push(row)
      return item
    })
    setColumns([...fixedColumns, ...showColumn])
    setDataSource(showDataSource)
  }, [questionData, cellRender, cellType])

  return (
    <Table
      className="scale_table"
      columns={columns as any}
      dataSource={dataSource}
      scroll={{ x: true }}
      pagination={false}
      rowClassName="editable-row"
      bordered
      rowKey="id"
    />
  )
}

export default StarTable
