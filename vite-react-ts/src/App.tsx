/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 15:22:29
 */
import React, { useCallback, useEffect, useState } from "react";
import logo from "@/assets/resource/logo.svg";
import axios from "axios";
import "./App.css";
// import Index from '@/pages/Index/index.tsx'
import Index from "./pages/Index";
import Demo from "./pages/Demo/index2";
import { Button, Menu, Space } from "antd";
import routes from "./router";
import {
  BrowserRouter as Routes,
  Router,
  Link,
  useHistory,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Detail from "./pages/detail";

const items = [
  {
    label: "Navigation One",
    key: "mail",
  },
  {
    label: "Navigation Two",
    key: "app",
    disabled: true,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");
  const ussr = useHistory();
  useEffect(() => {
    // timeStart()
  }, []);

  const timeStart = useCallback(() => {
    return setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  console.log(Button, "Button 组件");
  return (
    <div className="App">
      <Space>
        <Link to="/">to Home</Link>
        <Link to="/index">to index</Link>
        <Link to="/index/detail">to detail</Link>
        <Link to="/index/demo">to dem</Link>
      </Space>
      <header>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ width: "500px" }}
        />
      </header>
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
