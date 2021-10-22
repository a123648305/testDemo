/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-02 12:27:55
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-23 10:57:22
 */
import React, { useEffect, useRef, useState } from 'react'
import { Tag, Modal, Input, Button } from 'antd'
import { CheckOutlined, SearchOutlined } from '@ant-design/icons'
import './index.less'
import Item from 'antd/lib/list/Item'
// import theme from '@/stylesheets/theme.antd'
import produce from 'immer'

const theme = '#7262FDFF'

const options: Array<signType> = [
  { value: 'gold', checked: true, id: 1 },
  { value: 'lime', checked: true, id: 2 },
  { value: 'green', checked: false, id: 3 },
  { value: 'cyan', checked: false, id: 4 },
]

type PropsType = {
  tags: any[]
  visible: boolean
  onConfirm: () => void
  onClose: () => void
}

type signType = {
  value: string
  checked?: boolean
  orginValue?: string
  id?: number
}

const TagsDialog: React.FC<PropsType> = ({
  onClose,
  onConfirm,
  visible,
  ...props
}) => {
  const [checkSigns, setCheckSigns] = useState<Array<signType>>([])
  const [searchList, setsearchList] = useState<Array<signType>>([])
  const [recentlyList, setRecentlyList] = useState<Array<signType>>([
    { value: 'lime', checked: false, id: 2 },
  ])
  const [searchText, setSearchText] = useState('')
  const tagBox = useRef<any>()

  useEffect(() => {
    console.log(props, 'tags', checkSigns, recentlyList, searchList)
  })

  // 搜索标签
  const searchSign = (e: any) => {
    console.log('search', e.target.value)
    const val = e.target.value
    setSearchText(val)
    if (!val) {
      return setsearchList([])
    }

    let list = options.filter((item) => item.value.includes(val))
    if (list.length === 0) {
      // 未查找到数据时 新增标签
      list = [{ value: `新增“${val}”标签`, checked: false, orginValue: val }]
    }
    console.log(list, 'searchList')
    setsearchList(list)
  }

  // 删除标签
  const closeTag = (data: signType, index: number) => {
    // 删除标签
    const newArr = produce(checkSigns, (draft) => {
      draft.splice(index, 1)
    })
    setCheckSigns(newArr)

    // 更新最近使用标签
    const arr = produce(recentlyList, (draft) => {
      const itemIndex = draft.findIndex((item) => item.value === data.value)
      // 更新最近使用 选中状态
      draft[itemIndex].checked = false
    })
    setRecentlyList(arr)
  }

  // 点击标签 1:搜索结果中点击标签(分为两种 新增和选中已有标签)  2:最近使用中点击标签
  const checkSign = (checkItem: signType) => {
    console.log(checkItem, 'ckick')
    const { value, orginValue, id, checked } = checkItem
    let newItem: signType = { value, id, checked, orginValue }
    if (checked) return false // 点击了已选中的 return
    newItem.value = id ? value : (orginValue as string)
    newItem.checked = true
    setSearchText('') // 重置输入框
    setsearchList([]) // 重置搜索结果
    console.log('??')

    const data = checkSigns.find((item) => item.value === newItem.value)
    !data && setCheckSigns([...checkSigns, newItem]) // 不在已选中标签中 更新Input框中 选中标签

    // 更新最近使用标签
    const arr = produce(recentlyList, (draft) => {
      const itemIndex = draft.findIndex((item) => item.value === newItem.value)
      // 更新最近使用排序
      if (itemIndex !== -1) {
        draft.splice(itemIndex, 1)
      }
      draft.unshift(newItem)
    })
    setRecentlyList(arr)
  }

  //  确定 保存标签
  const confirmSign = () => {}

  const footer = (
    <>
      <p className="tag_footer_text" style={{ color: theme }}>
        查看标签
      </p>
      <Button key="back" onClick={searchSign}>
        取消
      </Button>
      <Button key="submit" type="primary" onClick={searchSign}>
        确定
      </Button>
    </>
  )

  return (
    <Modal
      title="设置标签"
      visible={visible}
      onCancel={onClose}
      onOk={onConfirm}
      width="560px"
      wrapClassName="tag_dialog"
      footer={footer}
    >
      <div className="tag_box" ref={tagBox}>
        <div className="tag_box_containter">
          {checkSigns.map((item, index) => {
            return (
              <Tag
                key={index}
                closable
                onClose={() => closeTag(item, index)}
                visible={true}
              >
                {item.value}
              </Tag>
            )
          })}
          <input
            placeholder="新增或搜索标签"
            onChange={searchSign}
            onFocus={() => tagBox.current.classList.add('tag_box_fcous')}
            onBlur={() => tagBox.current.classList.remove('tag_box_fcous')}
            value={searchText}
          />
        </div>
        <SearchOutlined style={{ color: '#E5E5E5FF', marginLeft: 'auto' }} />
      </div>
      {searchList && searchList.length ? (
        <ul className="tag_ul">
          {searchList.map((item, index) => {
            return (
              <li
                key={index}
                className="tag_ul_li"
                onClick={() => checkSign(item)}
              >
                {item.value}
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="recently_box">
          <p className="recently_title">最近使用</p>
          <ul className="tag_ul">
            {recentlyList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`tag_ul_li ${item.checked && `tag_ul_li_active`}`}
                  style={{
                    backgroundColor: item.checked ? theme : 'white',
                  }}
                  onClick={() => checkSign(item)}
                >
                  {item.checked && <CheckOutlined className="tag_checked" />}
                  {item.value}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Modal>
  )
}

export default TagsDialog
