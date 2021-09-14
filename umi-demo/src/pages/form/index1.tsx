/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-17 16:34:31
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-23 11:22:19
 */

import React from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form';
type PropsType = {
  info: any;
  test?: any;
};

class FormDemo extends React.PureComponent {
  formRef = React.createRef<FormInstance>();
  constructor(props: PropsType) {
    super(props);
    this.state = {
      visible: false,
      formVal: {},
    };
  }
  dataSource = [
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
  columns = [
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
      render: (text: any, row: any) => (
        <a onClick={() => this.onEdit(row)}>编辑</a>
      ),
    },
  ];

  onEdit = (row: any) => {
    console.log(row, 'edit');
    // formRef.setFieldsValue(row);
    this.setState(
      {
        formVal: row,
      },
      () => {
        this.setState({ visible: true });
      },
    );
  };

  cancel = () => {
    // setFormVal(undefined);
    this.setState({ visible: false });
  };

  sumbit = () => {
    this.formRef.current
      .validateFields()
      .then((res) => {
        console.log(res, this.state.formVal, 'valid');
      })
      .catch((err) => console.log(err, 'validErr'));
  };

  componentDidMount() {
    console.log('子组件form 已渲染');
  }

  componentDidUpdate() {
    console.log('子组件form 已更新');
  }

  render() {
    const { formVal, visible } = this.state;
    console.log(this, 'state');
    return (
      <div>
        <h2>{JSON.stringify(this.props)}</h2>
        <Table dataSource={this.dataSource} columns={this.columns} />

        <Modal
          title="test"
          visible={visible}
          onCancel={this.cancel}
          onOk={this.sumbit}
        >
          {JSON.stringify(formVal)}
          <Form ref={this.formRef} initialValues={formVal}>
            <Form.Item
              name="name"
              label="姓名"
              rules={[
                {
                  required: true,
                  validator: (rules, val) => {
                    console.log(val !== 2, 'valid');

                    if (val !== '2') {
                      return Promise.reject('不是2');
                    } else {
                      return Promise.resolve();
                    }
                  },
                  validateTrigger: 'onBlur',
                },
              ]}
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
  }
}

FormDemo.propTypes = {};

export default FormDemo;
