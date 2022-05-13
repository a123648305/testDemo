/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-01-10 11:22:02
 * @LastEditors: wujian
 * @LastEditTime: 2022-01-10 14:51:39
 */
import React, { useEffect } from 'react'
import './index.less'
import Sortable from 'sortablejs'
const listId = '12000'

const SortDemo = () => {
  const options = [
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona' },
    { id: 2, name: 'fiona' },
  ]
  useEffect(() => {
    const dom = document.querySelector(`#listId`)
    dom &&
      Sortable.create(document.querySelector(`#listId`), {
        group: listId,
        animation: 150,
        ghostClass: 'blue-background-class',
        dragClass: 'sortable-drag-test',
        forceFallback: true,
        swapClass: 'highlight',
        handle: '.option-handler',
        fallbackOnBody: true,
        invertSwap: true,
        delay: 5,
        onEnd: ({ newIndex, oldIndex }) => {
          if (newIndex === oldIndex) {
            return
          }
          const oldItem = options[oldIndex]
          options.splice(oldIndex, 1) //删除要拖动的元素
          options.splice(newIndex, 0, oldItem)

          console.log(options, 'options', newIndex, oldIndex)
        },
      })
  })
  return (
    <div id="test">
      <ul id="listId" className="option-list">
        {options.map((op, index) => (
          <li key={op.id}>
            <i className="left_icon">{index + 1}</i>
            <span>{op.name}</span>
            <i className="iconfont icon-cem_move option-handler" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortDemo
