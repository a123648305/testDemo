/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-04 11:34:09
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-05 16:10:28
 */
export const options = {
  title: {
    text: '店铺分析',
    top: 14,
  },
  grid: [
    {
      bottom: 70,
      right: 80,
      top: 110,
      width: '40%',
    },
    {
      bottom: 16,
      left: 20,
    },
  ],
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
  dataset: [
    {
      dimensions: ['正面', '中性', '负面'],
      source: [
        ['正面', 34355],
        ['中性', 9317],
        ['负面', 4807],
      ],
      sourceHeader: false,
    },
    {
      dimensions: ['日期', '正面', '中性', '负面'],
      source: [
        ['2021-11-04 00', 1368, 0, 98, 8],
        ['2021-11-04 01', 197, 0, 20, 1],
        ['2021-11-04 02', 62, 0, 12, 0],
        ['2021-11-04 03', 43, 0, 6, 1],
        ['2021-11-04 04', 44, 0, 6, 0],
        ['2021-11-04 05', 81, 0, 16, 0],
        ['2021-11-04 06', 368, 0, 50, 2],
        ['2021-11-04 07', 884, 0, 97, 6],
        ['2021-11-04 08', 1834, 0, 196, 14],
        ['2021-11-04 09', 2562, 0, 259, 17],
        ['2021-11-04 10', 2498, 0, 305, 16],
        ['2021-11-04 11', 2155, 0, 336, 13],
        ['2021-11-04 12', 2044, 0, 303, 16],
        ['2021-11-04 13', 1846, 0, 270, 10],
        ['2021-11-04 14', 1735, 0, 259, 10],
        ['2021-11-04 15', 1663, 0, 227, 15],
        ['2021-11-04 16', 1627, 0, 237, 14],
        ['2021-11-04 17', 1671, 795, 247, 13],
        ['2021-11-04 18', 2308, 1604, 324, 18],
        ['2021-11-04 19', 2611, 1600, 393, 12],
        ['2021-11-04 20', 2530, 1614, 382, 16],
        ['2021-11-04 21', 1976, 1506, 373, 12],
        ['2021-11-04 22', 1511, 1390, 236, 12],
        ['2021-11-04 23', 737, 808, 155, 4],
      ],
      sourceHeader: false,
    },
  ],
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
      data: [
        {
          value: 1368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 197,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 62,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 43,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 44,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 81,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 884,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1834,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2562,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2498,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2155,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2044,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1846,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1735,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2308,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2611,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2530,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1976,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1511,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 737,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
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
      data: [
        {
          value: 1368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 197,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 62,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 43,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 44,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 81,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 884,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1834,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2562,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2498,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2155,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2044,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1846,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1735,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1663,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1627,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1671,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2308,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2611,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2530,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1976,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1511,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 737,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
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
      data: [
        {
          value: 1368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 197,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 62,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 43,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 44,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 81,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 368,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 884,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1834,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2562,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2498,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2155,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2044,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1846,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1735,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1663,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1627,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1671,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2308,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2611,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 2530,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1976,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 1511,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
        {
          value: 737,
          label: {
            show: false,
            position: 'top',
            color: '#262626',
          },
        },
      ],
    },
  ],
  legend: {
    top: 60,
    left: 16,
    right: 48,
    itemWidth: 10,
    itemHeight: 10,
    type: 'scroll',
    itemGap: 16,
    data: ['正面', '中性', '负面', '添可专卖店'],
    icon: 'circle',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '11月04日00时',
      '11月04日01时',
      '11月04日02时',
      '11月04日03时',
      '11月04日04时',
      '11月04日05时',
      '11月04日06时',
      '11月04日07时',
      '11月04日08时',
      '11月04日09时',
      '11月04日10时',
      '11月04日11时',
      '11月04日12时',
      '11月04日13时',
    ],
    nameTextStyle: {
      color: '#626262',
    },
    axisPointer: {
      type: 'line',
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
    interval: 653,
    max: 3000,
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
    showDelay: 20,
    hideDelay: 55,
    confine: true,
    enterable: true,
    padding: 0,
    backgroundColor: '#ffffff',
    borderColor: '#e5e5e5',
    borderWidth: '1',
    extraCssText:
      'border-radius: 2px; box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)',
  },
}
