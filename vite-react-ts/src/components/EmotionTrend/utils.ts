/*
 * @Description:
 * @Author: wangshuzhao
 * @Date: 2020-08-26 15:27:05
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 15:55:49
 */

/**
 * 获取图表option
 * @param {array} chartData 图表数据
 * @param {string} title 标题
 * @param {string} aspectType 一级指标/二级指标
 * @param {string} volType 指标好评率/指标声量
 */

// import { export2Excel, export2Image } from '@/public/exportUtils'
// import { calTextWidth } from '@/utils/utils'
// import { MessageSignal } from '@/utils/constants'
import list from './test'

const barWidth = 24,
  labelMax = 6

const nameKey = ['正面', '中性', '负面']

export const getOption = (chartData, title, aspectType, width, emotionType) => {
  const color = ['#60DDA9', '#5B8FF9', '#F08A8A']
  console.log(list, 'l;i')
  // data:[[x轴],[pie图数据],...[nameKey[i]数据]]
  const data = new Array(5).fill([])
  list.map((item, index) => {
    data[1].push({
      name: nameKey[+item.key],
      value: item.total,
    })
    item.dataList.map((k) => {
      index === 0 && data[0].push(k.time)
      k.showTime = k.time // 格式化后的时间
      k.value = k.total
    })
    if (item.key === 1) {
      data[2].push(item)
    }
    if (item.key === 0) {
      data[3].push(item)
    }
    if (item.key === -1) {
      data[4].push(item)
    }
  })
  console.log(data)

  const options = {
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
      data: nameKey,
      icon: 'circle',
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: data[0],
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
        console.log(params, 'sdasd')
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
        data: data[0],
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
            console.log(params, 'aa')
            return '<p>000</p>'
          },
        },
        data: data[1],
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
        data: data[2],
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
        data: data[3],
      },
    ],
  }
  return options
}

// 图表下拉选择
export const timeOptions = [
  { title: '按天', value: 'DAY' },
  { title: '按周', value: 'WEEK' },
  { title: '按月', value: 'MONTH' },
]

// 图表下拉选择
export const formulaOptions = [
  { title: '比例', value: 'RATIO' },
  { title: '数量', value: 'COUNT' },
]
