/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-02 12:27:55
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-02 16:47:20
 */
import React, { Children, useEffect } from 'react';
import { Select, Tag, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './index.less';

const options = [
  { value: 'gold', checked: true },
  { value: 'lime', checked: true },
  { value: 'green', checked: false },
  { value: 'cyan', checked: false },
];

type PropsType = {
  tags: any[];
  onConfirm: () => void;
  onClose: () => void;
};

const TagsDialog: React.FC<PropsType> = ({ onClose, onConfirm, ...props }) => {
  const { Option } = Select;
  useEffect(() => {
    console.log(props, 'tags');
  });
  const children = [];
  for (let i = 0; i < 3; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>,
    );
  }
  return (
    <Modal
      title="设置标签"
      visible={true}
      onCancel={onClose}
      onOk={onConfirm}
      width="560px"
      wrapClassName="tag_dialog"
      okText="确定"
      cancelText="取消"
    >
      <Select
        mode="tags"
        showArrow
        defaultValue={['gold', 'cyan']}
        style={{ width: '400px' }}
        placeholder="新增或搜索标签"
      >
        {children}
      </Select>

      {/* <Tag icon={<CheckOutlined />} color="#7262FDFF">
        Twitter
      </Tag>
      <Tag icon={<CheckOutlined />} color="#7262FDFF">
        Twitter
      </Tag>
      <Tag>Twitter</Tag> */}
      <ul className="tag_ul">
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={`tag_ul_li ${item.checked && `tag_ul_li_active`}`}
            >
              {item.checked && <CheckOutlined className="tag_checked" />}
              {item.value}
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

export default TagsDialog;
