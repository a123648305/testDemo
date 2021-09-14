/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 09:33:53
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-07 10:54:36
 */
import React from 'react';
import { useEffect } from 'react';
import * as echarts from 'echarts';
import { options } from './echarts';

type PropsType = {};
const Home: React.FC<PropsType> = () => {
  console.log(options, 'options');
  const options2 = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    console.log('准备绘制', myChart, options);
    myChart.setOption(options);
  }, []);
  return (
    <div>
      Home
      <div id="main" style={{ width: '570px', height: '530px' }}></div>
    </div>
  );
};

export default Home;
