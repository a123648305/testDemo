/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-04 11:17:33
 * @LastEditors: wujian
 * @LastEditTime: 2022-01-06 11:51:25
 */
import React, { useEffect, useState } from "react";
import { testOption } from "./utils";
import { Popover, Spin } from "antd";
import EchartReact from "echarts-for-react";
import asyncPool from "tiny-async-pool";
import "./index.less";

type PropsType = {
  title: string;
  id: number;
  fetchData: (id: number) => Promise<any>;
};

const titleOverlay = () => (
  <div className="emotionTrend_title">
    <span>评论情感分布和走势</span>
    <span>（来自有效评论）</span>
  </div>
);

const EchartDemo: React.FC<PropsType> = ({ title, id, fetchData }) => {
  const [showLabel, setShowLabel] = useState(false);
  const [chartType, setChartType] = useState("COUNT");
  const [timeType, setTimeType] = useState("MONTH");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  // console.log(options)

  const getDetail = () => {
    setLoading(true);
    fetchData(id).then((res: any) => {
      console.log(res, "recsxxxx", id);
      setLoading(false);
    });

    //fetchData(id);
  };

  useEffect(() => getDetail(), [id]);

  return (
    <div className="emotionTrend_box">
      <Spin spinning={loading}>
        {/* <EchartReact
          // onChartReady={this.getChartRef}
          theme="yt_multi_color_10"
          option={{}}
          // opts={{ devicePixelRatio: 2 }}
          style={{ width: "100%" }}
        /> */}
        <h2>{data}</h2>
      </Spin>
    </div>
  );
};

export default EchartDemo;
