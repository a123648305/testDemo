/*
 * @Description:
 * @Author: wujian
 * @Date: 2021_08_06 15:31:53
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 17:44:13
 */
import { Layout, Input, Table, Modal } from "antd";
import { useEffect, useState } from "react";
import style from "./test.css";
const WordModal = (props) => {
  const [brand, setBrand] = useState("");
  const delWord = (row) => {
    console.log(row, "delect");
  };
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "操作",
      dataIndex: "address",
      key: "address",
      width: 150,
      render: (val, row) => {
        return <a onClick={() => delWord(row)}>删除</a>;
      },
    },
  ];

  useEffect(() => {
    console.log(props);
  });
  const { visible, onCancel, onOk } = props;
  return (
    <Modal
      title="实体抽取配置"
      visible={visible}
      onCancel={onCancel}
      width={1200}
      bodyStyle={{
        padding: "16px 24px",
      }}
      cancelText="取消"
      okText="确定"
    >
      <div className={style.option_modal}>
        <div className={style.option_brand}>
          <span className={style.option_brand_text}>产品参数值「品牌」</span>
          <Input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className={style.option_input}
            placeholder="请输入"
          />
        </div>
        <div className={style.option_expression}>
          <div className={style.option_expression_discern}>
            <div className={style.option_text}>
              <span className={style.option_brand_text}>识别词</span>
              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="请输入,回车即新建"
                className={style.option_word_input}
              />
            </div>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
          <div className={style.option_expression_discern}>
            <div className={style.option_text}>
              <span className={style.option_brand_text}>歧义词</span>
              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="请输入,回车即新建"
                className={style.option_word_input}
              />
            </div>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default WordModal;
