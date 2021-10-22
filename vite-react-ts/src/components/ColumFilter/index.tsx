/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-20 10:58:47
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-21 15:12:27
 */
import React, { useState } from 'react'
import {
  Dropdown,
  Tooltip,
  Popover,
  Checkbox,
  Button,
  Divider,
  Space,
} from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import produce from 'immer'
import './index.less'

type PropsType = {
  data: Array<{ name: string; id: number }>
}

const ColumFilter: React.FC<PropsType> = ({ data }) => {
  const [indeterminate, setIndeterminate] = useState(false) // 半选
  const [checkAll, setCheckAll] = useState(false) // 全选
  const [checkVal, setCheckVal] = useState([])
  const [visible, setVisible] = useState(false)
  const onCheckAllChange = (e) => {}

  const checkColum = (state: any, item: { name: string; id: number }) => {
    const { id } = item
    const newCheckVal = produce(checkVal, (draft) => {
      const dataIndex = draft.findIndex((k) => k.id === id)
      if (dataIndex !== -1) {
        draft.splice(dataIndex, 1)
      } else {
        draft.push(item)
      }
      return draft
    })
    console.log(checkVal, 'newCheckVal', newCheckVal)
    setCheckVal(newCheckVal)
    setIndeterminate(newCheckVal.length > 0 && newCheckVal.length < data.length)
    setCheckAll(newCheckVal.length === data.length)
  }

  const reSetCheck = () => {
    setCheckAll(false)
    setIndeterminate(false)
    setCheckVal([])
  }

  const checkAllColumn = () => {
    setCheckAll(true)
    setIndeterminate(false)
    setCheckVal(data)
  }

  const columnContent = (
    <div className="customer_column_box">
      <ul className="column_list">
        {data &&
          data.map((item, index) => (
            <li className="column_list_item" key={index}>
              <Checkbox
                onChange={onCheckAllChange}
                checked={checkVal && checkVal.find((d) => d.id === item.id)}
                onChange={(e) => checkColum(e, item)}
              >
                {item.name}
              </Checkbox>
            </li>
          ))}
      </ul>
      <div className="column_footer">
        <Space>
          <Button size="small">取消</Button>
          <Button type="primary" size="small">
            确定
          </Button>
        </Space>
      </div>
    </div>
  )

  const columnTitle = (
    <div className="column_title">
      <Checkbox
        indeterminate={indeterminate}
        onChange={checkAllColumn}
        checked={checkAll}
      >
        列展示
      </Checkbox>
      <span className="reset_btn" onClick={reSetCheck}>
        重置
      </span>
    </div>
  )

  return (
    <Popover
      content={columnContent}
      title={columnTitle}
      placement="bottomRight"
      overlayClassName="customer_column_popover"
      visible={visible}
    >
      <Tooltip title="列展示" key="leftButton">
        <SettingOutlined onClick={() => setVisible(true)} />
      </Tooltip>
    </Popover>
  )
}

export default ColumFilter
