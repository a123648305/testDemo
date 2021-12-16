/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-12-14 18:33:28
 * @LastEditors: wujian
 * @LastEditTime: 2021-12-16 18:37:05
 */
import React, { useEffect, useState, useRef } from 'react'
import { Table, Radio, Input, Checkbox, Form } from 'antd'
import produce from 'immer'
import './index.less'

// 内容单元格内置类型支持 单选Radic 多选Checkbox 量表Rate 若需其他类型请使用自定义cellRender
declare type cellType = 'Radio' | 'Checkbox' | 'Rate' | undefined

type cellItem = { id?: number | string; title: string; value: any }

type questionItem = {
  id: number
  number: number
  title: string
  colItems: Array<cellItem>
}

type PropsType = {
  /** @type {Array} 列表数据 */
  questionData: Array<questionItem>
  /**@type {React.ReactNode} 单元格填充 其他类型自定义渲染 例如cellRender={<Rate />} */
  cellRender?: React.ReactNode
  /** @type {cellType} 单元格填充内置类型 支持 单选Radic 多选Checkbox 量表Rate 若需其他类型请使用自定义cellRender */
  cellType?: cellType
  /** @type {boolean} 列标题是否可编辑 默认可编辑 */
  columnEditDisabled: boolean
  /** @type {function} 各种交互动作 回调方法 */
  onTableChange: (payload: any) => void
}

/**
 * 表格标题单元格 可编辑.
 * @param {string} text - 此单元格文本数据.
 * @param {object} record - row数据.
 * @param {function} handleTableChange - 更新回调方法.
 * @param {boolean} editable - 表格标题单元格可编辑 默认为True.
 */
const EditableCell = (
  text: string,
  record: object,
  handleTableChange: (val: string, type: string, record: object) => void,
  editable: boolean = true
) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const [form] = Form.useForm()
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      //   [dataIndex]: record[dataIndex],
      title: text,
    })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()
      console.log(values, 'form', values.title)
      toggleEdit()
      handleTableChange(values.title, 'row', record)
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = <span>{text}</span>

  if (editable) {
    childNode = editing ? (
      <Form form={form}>
        <Form.Item
          style={{ margin: 0 }}
          name="title"
          rules={[
            {
              required: true,
              message: '不能为空',
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      </Form>
    ) : (
      <div className="editable-cell-value-wrap" onClick={toggleEdit}>
        {text}
      </div>
    )
  }

  return childNode
}

const StarTable: React.FC<PropsType> = ({
  questionData,
  cellType,
  cellRender,
  columnEditDisabled = false,
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
      editable: true,
      render: (text: string, row: cellItem) =>
        EditableCell(text, row, handleTitleChange),
    },
  ]

  const [columns, setColumns] = useState(fixedColumns)
  const [dataSource, setDataSource] = useState<any[]>([])

  const handleTableChange = (
    val: boolean,
    type: string,
    name: string,
    row: cellItem
  ) => {
    console.log(val, type, row, name, 'change')

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
      onTableChange(newData)
    }
    if (type === 'Checkbox') {
      // 更新对应列表数据value 值
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        const colItem = item?.colItems.find((j) => j.title === name)
        colItem && (colItem.value = val)
        return draft
      })
      onTableChange(newData)
    }
    if (type === 'Rate') {
      // 更新对应列表数据value 值
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        const colItem = item?.colItems.find((j) => j.title === name)
        colItem && (colItem.value = val)
        return draft
      })
      onTableChange(newData)
    }
  }

  // 编辑标题 方法更新
  const handleTitleChange = (e: any, type: string, row: any) => {
    console.log(e, type, 'input', row)
    const inputValue = e.target ? e.target.value : e
    if (type === 'row') {
      // 行标题更新
      const newData = produce(questionData, (draft) => {
        const item = draft.find((k) => k.id === row.id)
        item && (item.title = inputValue)
        return draft
      })
      onTableChange(newData)
    }
    if (type === 'column') {
      // 列标题更新
      const newData = produce(questionData, (draft) => {
        draft.map((col) => {
          const item = col.colItems.find((k) => k.id === row.id)
          item && (item.title = inputValue)
          return col
        })
        return draft
      })
      onTableChange(newData)
    }
  }

  // 表格标题 带编辑框
  const headerTitle = (val: string, cellItem: cellItem) => (
    <div className="header_title">
      {columnEditDisabled ? (
        <span>{val}</span>
      ) : (
        <Input
          bordered={false}
          defaultValue={val}
          className="edit_input"
          onBlur={(e) => handleTitleChange(e, 'column', cellItem)}
        />
      )}
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
      render: (text: boolean, row: cellItem) =>
        type === 'Radio' ? (
          <Radio.Group
            onChange={(e) =>
              handleTableChange(e.target.checked, 'Radio', title, row)
            }
            value={text}
          >
            <Radio value={true}></Radio>
          </Radio.Group>
        ) : type === 'Checkbox' ? (
          <Checkbox
            defaultChecked={text}
            onChange={(e) =>
              handleTableChange(e.target.checked, 'checkbox', title, row)
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
    console.log(showColumn, 'showColumn')
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
      rowClassName="editable-row"
      bordered
      rowKey="id"
    />
  )
}

export default StarTable
