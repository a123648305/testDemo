/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-04 11:17:33
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 14:38:09
 */
import React, { useState } from 'react'
import { getOption } from './utils'
import { Popover } from 'antd'
import EchartReact from 'echarts-for-react'
import './index.less'

type PropsType = {
  loading: boolean
  title: string
}

const titleOverlay = () => (
  <div className="emotionTrend_title">
    <span>评论情感分布和走势</span>
    <span>（来自有效评论）</span>
  </div>
)

const EmotionTrend: React.FC<PropsType> = ({ loading, title }) => {
  const [showLabel, setShowLabel] = useState(false)
  const [chartType, setChartType] = useState('COUNT')
  const [timeType, setTimeType] = useState('MONTH')
  // console.log(options)
  const options = getOption(1, 2, 3, 4, 5)
  return (
    <div className="emotionTrend_box">
      <EchartReact
        // onChartReady={this.getChartRef}
        theme="yt_multi_color_10"
        option={options}
        // opts={{ devicePixelRatio: 2 }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default EmotionTrend
