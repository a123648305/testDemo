export const options = {
  color: [
    '#1550B3',
    '#CC6A77',
    '#119073',
    '#CDB446',
    '#D969BF',
    '#2684FF',
    '#C8662B',
    '#9369D9',
    '#0E97AD',
    '#1BBF69',
    '#D07B49',
    '#61799B',
    '#1EA082',
    '#A9A557',
    '#D8727F',
  ],
  grid: {
    left: 80,
    right: 40,
    bottom: 40,
    top: 40,
  },
  tooltip: {
    position: function (point, params, dom, rect, size) {
      // 固定在顶部
      return [point[0], '-10%'];
    },
    textStyle: {
      color: '#262626',
      fontFamily:
        "'PingFang SC','Microsoft Yahei', 'Helvetica Neue', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif",
    },
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
    borderColor: '#ccc',
    extraCssText:
      'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);height:800px;overflow:auto;',
  },
  legend: {
    data: [
      {
        name: 'iQOO',
        icon: 'roundRect',
      },
      {
        name: '苹果',
        icon: 'roundRect',
      },
    ],
    type: 'scroll',
    show: true,
    left: 0,
    right: 45,
    itemWidth: 11,
    itemHeight: 3,
  },
  radar: {
    splitArea: {
      show: true,
    },
    center: ['50%', '55%'],
    splitLine: {
      lineStyle: {
        color: '#C1C1C1',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#C1C1C1',
      },
    },
    indicator: [
      {
        name: '默认',
        max: 32,
      },
      {
        name: '出厂标配（外观/品质）',
        max: 1,
      },
      {
        name: '充电类',
        max: 1,
      },
      {
        name: '手机发热',
        max: 1,
      },
      {
        name: '电池续航',
        max: 1,
      },
      {
        name: '颜色设计',
        max: 1,
      },
      {
        name: '卡顿',
        max: 0,
      },
      {
        name: '屏外观类',
        max: 4,
      },
      {
        name: '精细度',
        max: 0,
      },
      {
        name: '内置软件',
        max: 0,
      },
      {
        name: '整体外观',
        max: 2,
      },
      {
        name: '基础ROM',
        max: 0,
      },
      {
        name: '自带浏览器',
        max: 0,
      },
      {
        name: '话筒',
        max: 0,
      },
      {
        name: 'OPPO小游戏',
        max: 0,
      },
      {
        name: 'OPPO（HeyTap）支付',
        max: 0,
      },
      {
        name: 'OPPO金融',
        max: 0,
      },
      {
        name: '解锁安全',
        max: 0,
      },
      {
        name: '配件其他',
        max: 0,
      },
      {
        name: '扬声器',
        max: 0,
      },
      {
        name: '接口设计',
        max: 0,
      },
      {
        name: '无线连接',
        max: 0,
      },
      {
        name: '软件商店下载/安装',
        max: 0,
      },
      {
        name: '蓝牙音箱',
        max: 0,
      },
      {
        name: '防护',
        max: 0,
      },
      {
        name: '广告',
        max: 1,
      },
      {
        name: '蓝牙耳机',
        max: 0,
      },
      {
        name: '声音效果',
        max: 0,
      },
      {
        name: '开发者业务',
        max: 0,
      },
      {
        name: 'logo设计',
        max: 0,
      },
      {
        name: '低质量应用',
        max: 0,
      },
      {
        name: '听筒',
        max: 0,
      },
      {
        name: '系统升级异常',
        max: 0,
      },
      {
        name: '全局搜索/下拉搜索',
        max: 0,
      },
      {
        name: '屏触摸类',
        max: 0,
      },
      {
        name: '扬声器设计',
        max: 0,
      },
      {
        name: '负一屏',
        max: 0,
      },
      {
        name: '云服务',
        max: 0,
      },
      {
        name: '安全其他问题',
        max: 0,
      },
      {
        name: '三方软件',
        max: 0,
      },
      {
        name: '智能手环',
        max: 0,
      },
      {
        name: '闪退',
        max: 0,
      },
      {
        name: '电池',
        max: 0,
      },
      {
        name: '开关机类不良',
        max: 0,
      },
      {
        name: '其他通信问题',
        max: 1,
      },
      {
        name: '快应用',
        max: 0,
      },
      {
        name: '游戏功能类',
        max: 0,
      },
      {
        name: '按键类',
        max: 0,
      },
      {
        name: '通话信号类',
        max: 1,
      },
      {
        name: 'HeyTap帐号',
        max: 0,
      },
      {
        name: '软件商店其他问题',
        max: 0,
      },
      {
        name: '其他游戏问题',
        max: 0,
      },
      {
        name: '数据丢失',
        max: 0,
      },
      {
        name: '游戏中心',
        max: 0,
      },
      {
        name: '主题商店',
        max: 0,
      },
      {
        name: '信息泄露',
        max: 0,
      },
      {
        name: '黑屏/定屏/重启',
        max: 0,
      },
      {
        name: '系统界面美观度',
        max: 0,
      },
      {
        name: 'HeyTap大会员',
        max: 0,
      },
      {
        name: '屏幕设计',
        max: 0,
      },
      {
        name: '锁屏杂志',
        max: 0,
      },
      {
        name: '数据网络类',
        max: 0,
      },
      {
        name: '摄像头设计',
        max: 0,
      },
      {
        name: '游戏手柄',
        max: 0,
      },
      {
        name: '钱包',
        max: 0,
      },
      {
        name: '耳机',
        max: 0,
      },
      {
        name: '短视频',
        max: 0,
      },
      {
        name: '卡座',
        max: 0,
      },
      {
        name: '车载闪充',
        max: 0,
      },
      {
        name: '出厂标配（错漏重）',
        max: 0,
      },
      {
        name: '按键设计',
        max: 0,
      },
      {
        name: 'Breeno（语音助手）',
        max: 0,
      },
      {
        name: '查找手机',
        max: 0,
      },
      {
        name: '游戏充值类',
        max: 0,
      },
      {
        name: '屏功能类',
        max: 0,
      },
      {
        name: '缺陷',
        max: 0,
      },
      {
        name: '活动结构',
        max: 0,
      },
      {
        name: '呼吸灯',
        max: 0,
      },
      {
        name: '自拍杆',
        max: 1,
      },
      {
        name: '积分',
        max: 0,
      },
      {
        name: '阅读/书城',
        max: 0,
      },
      {
        name: '耳机转接线',
        max: 0,
      },
      {
        name: '移动电源',
        max: 0,
      },
      {
        name: '游戏内容',
        max: 0,
      },
    ],
  },
  series: [
    {
      id: '-negative',
      type: 'radar',
      data: [
        {
          value: [
            9, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ],
          name: 'iQOO',
          label: {
            show: false,
          },
          lineStyle: {
            normal: {
              type: 'solid',
              opacity: 0.7,
            },
            emphasis: {
              type: 'solid',
              opacity: 1,
            },
          },
          areaStyle: {
            normal: {
              opacity: 0.1,
            },
          },
        },
        {
          value: [
            32, 1, 1, 1, 0, 1, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
          ],
          name: '苹果',
          label: {
            show: true,
          },
          lineStyle: {
            normal: {
              type: 'solid',
              opacity: 0.7,
            },
            emphasis: {
              type: 'solid',
              opacity: 1,
            },
          },
          areaStyle: {
            normal: {
              opacity: 0,
            },
          },
        },
      ],
    },
  ],
  mOption: {
    chartHeight: 521.4,
    statisticType: 's1',
    chartType: 'c10',
    isMultiple: true,
    rangeObject: 'negative',
    aspects: [
      '默认',
      '出厂标配（外观/品质）',
      '充电类',
      '手机发热',
      '电池续航',
      '颜色设计',
      '卡顿',
      '屏外观类',
      '精细度',
      '内置软件',
      '整体外观',
      '基础ROM',
      '自带浏览器',
      '话筒',
      'OPPO小游戏',
      'OPPO（HeyTap）支付',
      'OPPO金融',
      '解锁安全',
      '配件其他',
      '扬声器',
      '接口设计',
      '无线连接',
      '软件商店下载/安装',
      '蓝牙音箱',
      '防护',
      '广告',
      '蓝牙耳机',
      '声音效果',
      '开发者业务',
      'logo设计',
      '低质量应用',
      '听筒',
      '系统升级异常',
      '全局搜索/下拉搜索',
      '屏触摸类',
      '扬声器设计',
      '负一屏',
      '云服务',
      '安全其他问题',
      '三方软件',
      '智能手环',
      '闪退',
      '电池',
      '开关机类不良',
      '其他通信问题',
      '快应用',
      '游戏功能类',
      '按键类',
      '通话信号类',
      'HeyTap帐号',
      '软件商店其他问题',
      '其他游戏问题',
      '数据丢失',
      '游戏中心',
      '主题商店',
      '信息泄露',
      '黑屏/定屏/重启',
      '系统界面美观度',
      'HeyTap大会员',
      '屏幕设计',
      '锁屏杂志',
      '数据网络类',
      '摄像头设计',
      '游戏手柄',
      '钱包',
      '耳机',
      '短视频',
      '卡座',
      '车载闪充',
      '出厂标配（错漏重）',
      '按键设计',
      'Breeno（语音助手）',
      '查找手机',
      '游戏充值类',
      '屏功能类',
      '缺陷',
      '活动结构',
      '呼吸灯',
      '自拍杆',
      '积分',
      '阅读/书城',
      '耳机转接线',
      '移动电源',
      '游戏内容',
    ],
  },
};
