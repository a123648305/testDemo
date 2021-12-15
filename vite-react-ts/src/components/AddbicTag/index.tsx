/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-21 18:57:31
 * @LastEditors: wujian
 * @LastEditTime: 2021-12-14 09:48:37
 */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Modal, Form, Select, Input, Space } from 'antd'
import Sortable from 'sortablejs'
import produce from 'immer'
import './index.less'
import { type } from 'os'

type PropsType = {
  title: string | undefined | boolean
  visible: string | undefined | boolean
  formData: any
  options: Array<any>
  onCancel: () => void
  onSumbit: (payload: any) => void
}

const typeOptions = [
  {
    label: '单选',
    value: 'RADIO',
  },
  {
    label: '多选',
    value: 'CHECKBOX',
  },
  {
    label: '日期',
    value: 'DATE_TIME',
  },
  {
    label: '数字',
    value: 'NUMERIC',
  },
  {
    label: '文本',
    value: 'TEXT',
  },
]

const typeTip = {
  DATE_TIME: '2020/12/01',
  TEXT: '文本最多输入1000个字',
  NUMERIC: '最多支持输入小数点后四位，符号仅支持输入负号，例如-13.02',
}

const formLabel = (text: string) => <span className="form_label">{text}</span>

const AddChartDialog: React.FC<PropsType> = ({
  options,
  visible,
  formData,
  onCancel,
  onSumbit,
  title,
}) => {
  const [formRes] = Form.useForm()
  const [createOptions, setcCreateOptions] =
    useState<Array<{ lable: string; value: string }>>()

  const [showRemake, setShowRemake] = useState(false)
  const [fieldList, setShowFieldList] = useState(false)
  const [test, SetTest] = useState({ a: false })

  const addOptions = () => {
    const obj = {
      label: new Date(),
      value: +new Date(),
    }
    setcCreateOptions([...createOptions, obj])
  }

  const chartChange = (val: string) => {
    console.log(val, 'ccc')
    if (['RADIO', 'CHECKBOX'].includes(val)) {
      setShowFieldList(true)
      setShowRemake(false)
    } else {
      setShowFieldList(false)
      setShowRemake(true)
    }
  }

  const formConfirm = async () => {
    try {
      const values = await formRes.validateFields()
      const { code, name, type, schemaList } = values
      console.log('Success:', values, schemaList)
      //   onSumbit(values)

      let payload = { code, name, type }
      if (['RADIO', 'CHECKBOX'].includes(type)) {
        const oldFormData = formData.value
        const length = oldFormData.length
        const arr = schemaList.map((item: string, index: number) => ({
          key: index > length ? '' : oldFormData[index].key || '',
          value: item,
        }))
        console.log(arr, 'schefjofj ')
        payload.schemaList = arr
      }

      if (formData) {
        payload.id = formData.id
      }
      console.log(payload, 'sus')
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  // 渲染备注信息
  const formRmake = useCallback(() => {
    const typeValue = formRes.getFieldValue('type')
    return showRemake ? (
      <Form.Item
        label={`${typeValue === 'DATE_TIME' ? '时间格式' : '备注'}`}
        wrapperCol={{ span: 20 }}
      >
        <span className="form_remake_text">{typeTip[typeValue]}</span>
      </Form.Item>
    ) : null
  }, [showRemake])

  useEffect(() => {
    if (formData) {
      const newFormData = JSON.parse(JSON.stringify(formData))
      formRes.setFieldsValue(newFormData)
      setShowFieldList(['RADIO', 'CHECKBOX'].includes(newFormData.type))
      console.log(newFormData, 'data')
    }
  }, [])

  useEffect(() => ta(test))

  const ta = (ccc) => {
    console.log(ccc, '0000')
    document.querySelector('.test') &&
      Sortable.create(document.querySelector('.test'), {
        animation: 150,
        handle: '.icon-liebiao',
        delay: 50,
        onEnd: ({ newIndex, oldIndex }) => {
          console.log(newIndex, oldIndex, 'oo', ccc)
          if (newIndex === oldIndex) {
            return
          }
          //   onConfigUpdate({
          //     key: 'SORTING',
          //     value: { newIndex, oldIndex },
          //   })
        },
      })
  }

  console.log(test, 'prp')
  return (
    <Modal
      className="yt_customer_modal"
      width={720}
      title={title || '添加字段'}
      visible={!!visible}
      onCancel={onCancel}
      onOk={formConfirm}
      cancelText="取消"
    >
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 10 }}
        form={formRes}
        // initialValues={{ name, type, url, verificationKey }}
      >
        <Form.Item
          label="字段名称"
          name="name"
          rules={[
            {
              required: true,
              whitespace: true,
              message: '请输入字段名称',
            },
          ]}
        >
          <Input
            placeholder="最多20个字"
            style={{ width: 540, height: 32 }}
            maxLength={20}
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item label="参数名称" name="code">
          <Input
            placeholder="最多50个字母"
            style={{ width: 540, height: 32 }}
            maxLength={50}
            autoComplete="off"
            disabled={formData?.id}
          />
        </Form.Item>
        <Form.Item
          label="字段类型"
          name="type"
          required
          rules={[
            {
              required: true,
              whitespace: true,
              message: '请选择字段类型',
            },
          ]}
        >
          <Select
            placeholder="请选择类型"
            options={typeOptions}
            style={{ width: 540, height: 32 }}
            onChange={(val) => chartChange(val)}
            disabled={formData?.id}
          />
        </Form.Item>
        {fieldList && (
          <Form.List name="schemaList">
            {(fields, { add, remove }, { errors }) => (
              <>
                <div className="test">
                  {fields.map((field, index) => (
                    <Form.Item
                      tip={`${JSON.stringify(field)}`}
                      label={
                        <span className="move-target">
                          <i className="iconfont icon-liebiao" />
                          选项{index + 1}
                        </span>
                      }
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: '请输入',
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="最多50个字母"
                          style={{ width: 540, height: 32 }}
                          maxLength={50}
                          autoComplete="off"
                        />
                      </Form.Item>
                      {fields.length > 0 ? (
                        <i
                          className="iconfont icon-cem_trash"
                          onClick={() => remove(index)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                </div>
                <Form.Item noStyle>
                  <span
                    className="add_options ignore-elements"
                    onClick={() => {
                      add()
                      SetTest({ a: true })
                    }}
                  >
                    <i className="iconfont icon-cem_add-to" />
                    添加选项
                  </span>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        )}
        {formRmake()}
      </Form>
    </Modal>
  )
}

export default AddChartDialog
