/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-06 17:21:00
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 17:49:29
 */
import { useState } from "react";
import WordModal from "./index";
import { Button } from "antd";
const Home = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)} type="primary    ">
        show
      </Button>
      <WordModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </div>
  );
};
export default Home;
