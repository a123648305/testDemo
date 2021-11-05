/*
 * @Description:
 * @Author: wangshuzhao
 * @Date: 2020-08-26 15:27:05
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-05 15:34:02
 */

/**
 * 获取图表option
 * @param {array} chartData 图表数据
 * @param {string} title 标题
 * @param {string} aspectType 一级指标/二级指标
 * @param {string} volType 指标好评率/指标声量
 */

import { export2Excel, export2Image } from '@/public/exportUtils'
import { calTextWidth } from '@/utils/utils'
import { MessageSignal } from '@/utils/constants'

const barWidth = 24,
  labelMax = 6
export const getOption = (chartData, title, aspectType, width, emotionType) => {
  const name = chartData.map((e) => e[aspectType])
  // 计算图表可展示范围相对于全部数据总宽度比例，假如小于1总宽度将会超出可视宽度
  const scrollRate = (width * 0.8) / (barWidth * 1.75 * name.length)
  // 计算所有label文字展示需要多宽，假如计算值大于1表示将会超出图表范围
  const needRotate = calTextWidth(name.join(''), 12) / (width * 0.4) > 1
  return {
    title: {
      text: title,
      top: '13',
    },
    grid: {
      left: 36,
      right: 36,
      top: 48,
      bottom: 30,
      // bottom: needRotate ? 60 : scrollRate < 1 ? 50 : 30,
      containLabel: true,
    },

    dataZoom: [
      {
        type: 'slider',
        left: '5%',
        right: '5%',
        bottom: 15,
        height: 16,
        show: scrollRate < 1,
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        window.postMessage(
          {
            type: MessageSignal.CHART_MESSAGE,
            from: 'MentionRateChart',
            name: params.name,
          },
          '*'
        )
        return `${params.marker} ${params.name} ${Number(
          params.value * 100
        ).toFixed(2)}%`
      },
    },
    xAxis: {
      data: name,
      triggerEvent: true,
      axisLabel: {
        rotate: needRotate ? 45 : 0,
        margin: needRotate ? 15 : 8,
        formatter: (value) => {
          // const labelLength = calTextWidth(value, 12);
          if (value.length > labelMax) {
            return `${value.substring(0, labelMax)}...`
          }
          return value
        },
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      // max: 1,
      // interval: 0.2,
      axisLabel: {
        formatter: (val) => `${(val * 100).toFixed(0)}%`,
      },
    },
    series: {
      type: 'bar',
      data: chartData
        .map((e) => {
          if (emotionType === 'positive') {
            return e.posRate
          }
          return e.negRate
        })
        .sort((a, b) => a > b),
      barMaxWidth: barWidth,
    },
  }
}

export const handleOnMoreClick = (chartRef, type, data, title, aspectType) => {
  if (type === 'image') {
    export2Image(chartRef, title)
  } else if (type === 'data') {
    const exlData = [
      data.reduce(
        (acc, cur) => [
          ...acc,
          [
            cur[aspectType],
            `${(
              ((Number(cur.negative) + Number(cur.positive)) /
                Number(cur.messageTotal)) *
              100
            ).toFixed(2)}%`,
          ],
        ],
        [[aspectType === 'aspect1' ? '一级指标' : '二级指标', '提及率']]
      ),
    ]
    export2Excel(exlData, title)
  }
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
