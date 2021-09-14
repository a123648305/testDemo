/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-17 16:34:31
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-17 17:57:04
 */

import React from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { visible } from '@umijs/deps/compiled/chalk';
import { useState } from 'react';
type PropsType = {};

const FormDemo: React.FC<PropsType> = (props) => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '操作',
      dataIndex: 'opeator',
      key: 'opeator',
      render: (text: any, row: any) => <a onClick={() => onEdit(row)}>编辑</a>,
    },
  ];
  const [visible, setVisible] = useState(false);
  const [formRef] = Form.useForm();
  const [formVal, setFormVal] = useState();

  const onEdit = (row: any) => {
    console.log(row, 'edit');
    setFormVal(row);
    // formRef.setFieldsValue(row);
    setVisible(true);
  };

  const cancel = () => {
    // setFormVal(undefined);
    setVisible(false);
  };

  const sumbit = () => {
    formRef
      .validateFields()
      .then((res) => {
        console.log(res, formVal, 'valid');
      })
      .catch((err) => console.log(err, 'validErr'));
  };
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />

      <Modal title="test" visible={visible} onCancel={cancel} onOk={sumbit}>
        {JSON.stringify(formVal)}
        <Form form={formRef} initialValues={formVal}>
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: 'noValue' }]}
          >
            <Input placeholder="input" />
          </Form.Item>
          <Form.Item name="age" label="年龄">
            <Input placeholder="input" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormDemo;
