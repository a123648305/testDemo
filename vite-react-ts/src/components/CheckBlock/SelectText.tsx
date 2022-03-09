// 文本 选择
import React, { useState, useRef } from 'react'
import { Input, message } from 'antd'

const SelectText: React.FC<SelectPropTypes> = ({
  value = [],
  placeholder = '多个客户名称请按回车分隔',
  onChange,
}) => {
  const [keyWords, setKeyWords] = useState<any>(value)
  const InputRef = useRef<Input>(null)

  const textChange = (e: any) => {
    console.log(e.traget.value, 'val')
  }

  const delKeyWords = (index: number) => {
    const newKeyWords = [...keyWords]
    newKeyWords.splice(index, 1)
    setKeyWords(newKeyWords)
    onChange(newKeyWords)
    InputRef.current!.handleReset()
  }

  const addKeyWords = (e: any) => {
    if (keyWords.length === 5) {
      message.warning('最多搜索5个客户名称，超过的客户名称不搜索')
    } else {
      const val = e.target.value
      const isRepeat = keyWords.find((item: string) => item === val)
      if (isRepeat) return
      if (val) {
        setKeyWords([...keyWords, val])
        onChange([...keyWords, val])
        InputRef.current!.handleReset()
      }
    }
  }

  return (
    <div className="select_text">
      <Input
        allowClear
        placeholder={placeholder}
        onChange={textChange}
        onBlur={textChange}
        onPressEnter={addKeyWords}
        ref={InputRef}
      />
      <div className="select_text_list">
        {keyWords.map((item: string, index: number) => (
          <span
            className={`word ${index !== 0 ? 'word_blur' : ''}`}
            key={index}
          >
            <span title={item}>{item}</span>
            <i onClick={() => delKeyWords(index)}>×</i>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SelectText
