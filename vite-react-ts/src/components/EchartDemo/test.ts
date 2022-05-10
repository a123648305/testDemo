/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-04 11:34:09
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-05 16:10:28
 */

const color = ['#60DDA9', '#5B8FF9', '#F08A8A']
export const options = {
  title: {
    text: '店铺分析',
    top: 14,
  },
  color,
  grid: {
    bottom: 70,
    right: 80,
    top: 110,
    width: '40%',
    containLabel: true,
  },
  legend: {
    top: 100,
    left: 16,
    right: 48,
    itemWidth: 10,
    itemHeight: 10,
    type: 'scroll',
    itemGap: 16,
    data: ['正面', '中性', '负面'],
    icon: 'circle',
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    data: [
      '2021/10/04',
      '2021/10/05',
      '2021/10/06',
      '2021/10/07',
      '2021/10/08',
      '2021/10/08',
      '2021/10/10',
      '2021/10/11',
      '2021/10/12',
    ],
    nameTextStyle: {
      color: '#626262',
    },
    axisLabel: {
      formatter: (value) => value,
    },
    axisPointer: {
      type: 'shadow',
      label: {
        show: false,
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#626262',
    },
    // interval: 653,
    // max: 'dataMax',
    // min:'dateMin',
    axisLine: {
      show: false,
      lineStyle: {
        type: 'dashed',
        color: '#e5e5e5',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#e5e5e5'],
        width: 1,
        type: 'dashed',
      },
    },
  },
  tooltip: {
    trigger: 'axis',
    // trigger: 'item',
    showDelay: 20,
    hideDelay: 55,
    confine: true,
    enterable: true,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: '#e5e5e5',
    borderWidth: '1',
    extraCssText:
      'border-radius: 2px; box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)',
    formatter: (params: any) => {
      // console.log(params,'sdasd')
      return '22'
    },
  },
  dataZoom: {
    show: true,
    bottom: 16,
    xAxisIndex: 0,
    height: 20,
    handleSize: '100%',
    showDetail: false,
    borderColor: 'transparent',
    dataBackground: {
      lineStyle: {
        color: 'rgba(231, 243, 255, 1)',
        opacity: 1,
      },
      areaStyle: {
        color: 'rgba(231, 243, 255, 1)',
        opacity: 1,
      },
    },
    fillerColor: 'rgba(114, 98, 253, 0.3)',
    handleIcon:
      'path://M249.376256 0m102.4 0l0 0q102.4 0 102.4 102.4l0 819.2q0 102.4-102.4 102.4l0 0q-102.4 0-102.4-102.4l0-819.2q0-102.4 102.4-102.4Z',
    handleColor: 'rgba(114, 98, 253, 1)',
  },
  series: [
    {
      type: 'pie',
      smooth: true,
      datasetIndex: 0,
      hoverOffset: 0,
      center: ['17%', '60%'],
      radius: ['25%', '35%'],
      itemStyle: {
        smooth: true,
        normal: {
          borderWidth: 0,
          borderColor: '#fff',
          smooth: true,
        },
        emphasis: {
          borderWidth: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
        },
      },
      label: {
        show: true,
        position: 'outside',
        color: '#262626',
        rich: {
          value: {
            fontSize: 12,
            lineHeight: 18,
            color: '#262626',
            align: 'left',
          },
        },
      },
      labelLine: {
        show: true,
        smooth: true,
        length: 18,
      },
      avoidLabelOverlap: true,
      data: [
        {
          name: '正面',
          value: 1000,
        },
        {
          name: '中性',
          value: 2000,
        },
        {
          name: '负面',
          value: 1500,
        },
      ],
      tooltip: {
        trigger: 'item',
      },
    },
    {
      type: 'bar',
      name: '正面',
      smooth: true,
      showSymbol: true,
      symbolSize: 1,
      stack: 'Ad',
      barMaxWidth: 24,
      barMinWidht: 24,
      itemStyle: {
        color: color[0],
      },
      emphasis: {
        focus: 'series',
      },
      tooltip: {
        // trigger: 'item',
        showDelay: 20,
        hideDelay: 55,
        confine: true,
        enterable: true,
        padding: 10,
        backgroundColor: '#ffffff',
        borderColor: '#e5e5e5',
        borderWidth: '1',
        extraCssText:
          'border-radius: 2px; box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)',
        formatter: (params: any) => {
          // console.log(params, 'aa')
          return '<p>000</p>'
        },
      },
      data: [
        {
          time: '2021-10-04',
          value: 19,
        },
        {
          time: '2021-10-05',
          value: 25,
        },
        {
          time: '2021-10-06',
          value: 46,
        },
        {
          time: '2021-10-07',
          value: 36,
        },
        {
          time: '2021-10-08',
          value: 36,
        },
        {
          time: '2021-10-09',
          value: 35,
        },
        {
          time: '2021-10-10',
          value: 28,
        },
        {
          time: '2021-10-11',
          value: 18,
        },
        {
          time: '2021-10-12',
          value: 20,
        },
      ],
    },
    {
      type: 'bar',
      name: '中性',
      smooth: true,
      showSymbol: true,
      symbolSize: 1,
      stack: 'Ad',
      itemStyle: {
        color: color[1],
      },
      emphasis: {
        focus: 'series',
      },
      data: [
        {
          time: '2021-10-04',
          value: 19,
        },
        {
          time: '2021-10-05',
          value: 25,
        },
        {
          time: '2021-10-06',
          value: 46,
        },
        {
          time: '2021-10-07',
          value: 36,
        },
        {
          time: '2021-10-08',
          value: 36,
        },
        {
          time: '2021-10-09',
          value: 35,
        },
        {
          time: '2021-10-10',
          value: 28,
        },
        {
          time: '2021-10-11',
          value: 18,
        },
        {
          time: '2021-10-12',
          value: 20,
        },
      ],
    },
    {
      type: 'bar',
      name: '负面',
      smooth: true,
      showSymbol: true,
      symbolSize: 1,
      stack: 'Ad',
      itemStyle: {
        color: color[2],
      },
      emphasis: {
        focus: 'series',
      },
      data: [
        {
          time: '2021-10-04',
          value: 5,
        },
        {
          time: '2021-10-05',
          value: 2,
        },
        {
          time: '2021-10-06',
          value: 15,
        },
        {
          time: '2021-10-07',
          value: 20,
        },
        {
          time: '2021-10-08',
          value: 18,
        },
        {
          time: '2021-10-09',
          value: 35,
        },
        {
          time: '2021-10-10',
          value: 28,
        },
        {
          time: '2021-10-11',
          value: 16,
        },
        {
          time: '2021-10-12',
          value: 45,
        },
      ],
    },
  ],
}
