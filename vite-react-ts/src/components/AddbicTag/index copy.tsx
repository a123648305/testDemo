/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-21 18:57:31
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-22 20:20:33
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
  //   useEffect(() => {
  //     if (visible) {
  //       Sortable.create(document.querySelector('.ant-form'), {
  //         animation: 150,
  //         //   handle: '.icon-liebiao',
  //         delay: 5,
  //         group: 'shared',
  //         onEnd: ({ newIndex, oldIndex }) => {
  //           console.log(newIndex, oldIndex, 'oo');
  //           if (newIndex === oldIndex) {
  //             return;
  //           }
  //           onConfigUpdate({
  //             key: 'SORTING',
  //             value: { newIndex, oldIndex },
  //           });
  //         },
  //       });
  //     }
  //   }, [visible]);

  const [formRes] = Form.useForm()
  const [createOptions, setcCreateOptions] =
    useState<Array<{ lable: string; value: string }>>()

  const [showRemake, setShowRemake] = useState(false)

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
      setcCreateOptions([{ lable: '选项1', value: '' }])
      setShowRemake(false)
    } else {
      setcCreateOptions([])
      setShowRemake(true)
    }
  }

  const delOptions = (item: object, index: number) => {
    console.log(item, index)
    const newOptions = produce(createOptions, (draft) => {
      if (draft?.length > 1) {
        draft?.splice(index, 1)
      }
    })
    setcCreateOptions(newOptions)
  }

  const formConfirm = async () => {
    try {
      const values = await formRes.validateFields()
      const { code, name, type, ...otherOptions } = values
      console.log('Success:', values, otherOptions)
      //   onSumbit(values)

      let payload = { code, name, type }
      if (['RADIO', 'CHECKBOX'].includes(type)) {
        let schemaList = []
        // 单选多选时 匹配 key 为options[1] 的选项值
        const reg = /^options\[\d+\]$/
        for (let key in otherOptions) {
          console.log(key, 'key')
          if (reg.test(key)) {
            schemaList.push({
              key: '',
              values: values[key],
            })
          }
        }
        payload.schemaList = schemaList
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
    const data = {
      id: '2042aec693e14d65a6a130b5868bb4a7',
      name: '爱好2shg33',
      code: 'hofggesbby11',
      type: 'CHECKBOX',
      schemaList: [
        {
          key: '56e4489f36a140898b44243cf8ca1d05',
          value: '篮球',
        },
        {
          key: '3aed786dcefa486b9d092b368cd06786',
          value: '足球2',
        },
      ],
    }

    const newFormData = JSON.parse(JSON.stringify(data))
    const { schemaList } = newFormData
    formRes.setFieldsValue(newFormData)
    setcCreateOptions(schemaList)
    console.log(newFormData, 'data')
  }, [])

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
        <Form.Item
          label="参数名称"
          name="code"
          required
          rules={[
            {
              required: true,
              whitespace: true,
              message: '请输入参数名称',
            },
          ]}
        >
          <Input
            placeholder="最多50个字母"
            style={{ width: 540, height: 32 }}
            maxLength={50}
            autoComplete="off"
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
        {createOptions &&
          createOptions.map((item, index) => (
            <Form.Item
              key={index}
              label={
                <span className="move-target">
                  <i className="iconfont icon-liebiao" />
                  选项{index + 1}
                </span>
              }
              style={{ marginBottom: 0 }}
            >
              <Space>
                <Form.Item
                  name={`options[${index}]`}
                  id="dragDom"
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '请输入',
                    },
                  ]}
                >
                  <Input
                    placeholder="最多50个字母"
                    style={{ width: 540, height: 32 }}
                    maxLength={50}
                    autoComplete="off"
                  />
                </Form.Item>
                <i
                  className="iconfont icon-cem_trash"
                  onClick={() => delOptions(item, index)}
                />
              </Space>
            </Form.Item>
          ))}
        {createOptions && createOptions.length > 0 && (
          <Form.Item label="">
            <span className="add_options" onClick={() => addOptions()}>
              <i className="iconfont icon-cem_add-to" />
              添加选项
            </span>
          </Form.Item>
        )}
        {formRmake()}
      </Form>
    </Modal>
  )
}

export default AddChartDialog
