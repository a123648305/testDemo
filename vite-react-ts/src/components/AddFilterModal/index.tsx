import React, { useEffect } from 'react'
import { Modal, Form, Select } from 'antd'
import './index.less'

type PropsType = {
  title: string | React.ReactNode
  screenList: Array<any>
  onFilter: (filterList: any) => void
  onExport: (filterList: any) => void
  onSortList: (filterList: any) => void
  onAddGraph: (payload: any) => void
}

const DateSelectType = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '年',
    value: 'year',
  },
  {
    label: '季度',
    value: 'quarter',
  },
  {
    label: '月',
    value: 'month',
  },
  {
    label: '日',
    value: 'date',
  },
]

const DashBoardFilter: React.FC<PropsType> = ({ onAddGraph }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    })
  }, [])

  const onSumbit = () => {
    form
      .validateFields()
      .then((res) => {
        console.log(res, 'res')
      })
      .catch((err) => console.log(err))
  }

  return (
    <Modal
      title="添加筛选"
      visible={true}
      onOk={() => onSumbit()}
      onCancel={() => {}}
      wrapClassName="add-filter-modal"
      width={480}
      okText="确定"
      cancelText="取消"
    >
      <div className="add-filter-content">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          form={form}
        >
          <Form.Item
            name="dataSet"
            label="数据集"
            rules={[{ required: true, message: '请选择数据集' }]}
          >
            <Select placeholder="请选择" style={{ width: 280 }} />
          </Form.Item>
          <Form.Item
            name="questionId"
            label="选择问卷"
            rules={[{ required: true, message: '请选择问卷' }]}
          >
            <Select placeholder="请选择" style={{ width: 280 }} />
          </Form.Item>
          <Form.Item
            name="filterField"
            label="筛选字段"
            rules={[{ required: true, message: '请选择筛选字段' }]}
          >
            <Select placeholder="请选择" style={{ width: 280 }} />
          </Form.Item>
          <Form.Item
            name="dateType"
            label="日期颗粒度"
            rules={[{ required: true, message: '请选择日期颗粒度' }]}
          >
            <Select
              placeholder="请选择"
              style={{ width: 280 }}
              options={DateSelectType}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
export default DashBoardFilter
