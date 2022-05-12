/*
 * @Description:
 * @Author: linhongzhu
 * @Date: 2021-03-17 14:28:03
 * @LastEditors: linhongzhu
 * @LastEditTime: 2021-11-09 21:47:55
 */
import moment from 'moment'

// 时分秒校验 YYYY-MM-DD HH:mm:ss
// export const regex = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
export const regex = /([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/

/**
 * 得到一段时间范围的天数
 * @memberof TimePicker
 * @param dateRangeArray 时间数组，[beginDate, endDate]
 * @returns number 时间天数
 */
export const getNumOfDays = (dateRangeArray, formatStr) => {
  if (Array.isArray(dateRangeArray)) {
    const [beginDate, endDate] = dateRangeArray
    const numOfDays = moment(endDate, formatStr).diff(
      moment(beginDate, formatStr),
      'days'
    )
    return numOfDays
  }
  return 0
}

export const monthArr = [
  '今天', // 0

  '昨天', //  2

  '本周', // 4

  '上周', //  6

  '本月', // 8

  '上月', // 10

  '本季', // 12

  '上季', //  14

  '今年', // 16

  '去年', // 18
]

// 快捷时间选项
export const QUICK_TIME_CHOICE = (hasHour) =>
  hasHour
    ? [
        '今天', // 0
        '近6小时', // 1

        '昨天', //   2
        '近12小时', // 3

        '本周', //   4
        '近24小时', // 5

        '上周', //    6
        '近3天', //    7

        '本月', //  8
        '近7天', //  9

        '上月', //  10
        '近30天', // 11

        '本季', // 12
        '近90天', // 13

        '上季', // 14
        '近180天', // 15

        '今年', // 16
        '近365天', // 17

        '去年', // 18
      ]
    : [
        '今天', // 0
        '昨天', //  1
        '本周', // 2
        '上周', //  3
        '近3天', //  4
        '本月', // 5
        '近7天', // 6
        '上月', // 7
        '近30天', // 8
        '本季', // 9
        '近90天', // 10
        '上季', //  11
        '近180天', //  12
        '今年', // 13
        '近365天', // 14
        '去年', // 15
      ]

// 据快捷时间选择器计算相应时间区间
export const getQuickDateRange = (index, formatStr, hasHour) => {
  let quickDateRange = []
  if (hasHour) {
    switch (index) {
      // 当天
      case 0:
        quickDateRange = [moment().startOf('day'), moment()]
        break
      // 昨天
      case 2:
        // quickDateRange = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
        quickDateRange = [
          moment().subtract(1, 'days').startOf('day'),
          moment().subtract(1, 'days').endOf('day'),
        ]
        break
      // 本周
      case 4:
        quickDateRange = [moment().startOf('week'), moment()]
        break
      // 上周
      case 6:
        quickDateRange = [
          moment().subtract(1, 'weeks').startOf('week'),
          moment().subtract(1, 'weeks').endOf('week'),
        ]
        break

      // 当月
      case 8:
        quickDateRange = [moment().startOf('month'), moment()]
        break
      // 上月
      case 10:
        quickDateRange = [
          moment().subtract(1, 'months').startOf('month'),
          moment().subtract(1, 'months').endOf('month'),
        ]
        break

      // 本季
      case 12:
        quickDateRange = [moment().startOf('quarter'), moment()]
        break
      // 上季
      case 14:
        quickDateRange = [
          moment().subtract(1, 'quarters').startOf('quarter'),
          moment().subtract(1, 'quarters').endOf('quarter'),
        ]
        break

      // 今年
      case 16:
        quickDateRange = [moment().startOf('year'), moment()]
        break
      // 去年
      case 18:
        quickDateRange = [
          moment().subtract(1, 'years').startOf('year'),
          moment().subtract(1, 'years').endOf('year'),
        ]
        break
      case 1: // 近6小时
        quickDateRange = [moment().subtract(6, 'hour'), moment()]
        break
      case 3: // 近12小时
        quickDateRange = [moment().subtract(12, 'hour'), moment()]
        break
      case 5: // 近24小时
        quickDateRange = [moment().subtract(24, 'hour'), moment()]
        break
      case 7: // 近3天
        quickDateRange = [moment().subtract(3, 'days'), moment()]
        break
      // 近7天
      case 9:
        quickDateRange = [moment().subtract(7, 'days'), moment()]
        break
      // 近30天
      case 11:
        quickDateRange = [moment().subtract(30, 'days'), moment()]
        break

      // 近90天
      case 13:
        quickDateRange = [moment().subtract(90, 'days'), moment()]
        break
      // 近180天
      case 15:
        quickDateRange = [moment().subtract(180, 'days'), moment()]
        break

      // 近365天
      case 17:
        quickDateRange = [moment().subtract(365, 'days'), moment()]
        break
    }
  } else {
    switch (index) {
      // 当天
      case 0:
        quickDateRange = [moment().startOf('day'), moment()]
        break
      // 昨天
      case 1:
        // quickDateRange = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
        quickDateRange = [
          moment().subtract(1, 'days').startOf('day'),
          moment().subtract(1, 'days').endOf('day'),
        ]
        break
      // 前天
      // case 2:
      //   // quickDateRange = [moment().subtract(2, 'days'), moment().subtract(2, 'days')];
      //   quickDateRange = [
      //     moment()
      //       .subtract(2, 'days')
      //       .startOf('day'),
      //     moment()
      //       .subtract(2, 'days')
      //       .endOf('day'),
      //   ];
      //   break;
      // 本周
      case 2:
        quickDateRange = [moment().startOf('week'), moment()]
        break
      // 上周
      case 3:
        quickDateRange = [
          moment().subtract(1, 'weeks').startOf('week'),
          moment().subtract(1, 'weeks').endOf('week'),
        ]
        break

      // 当月
      case 5:
        quickDateRange = [moment().startOf('month'), moment()]
        break
      // 上月
      case 7:
        quickDateRange = [
          moment().subtract(1, 'months').startOf('month'),
          moment().subtract(1, 'months').endOf('month'),
        ]
        break

      // 本季
      case 9:
        quickDateRange = [moment().startOf('quarter'), moment()]
        break
      // 上季
      case 11:
        quickDateRange = [
          moment().subtract(1, 'quarters').startOf('quarter'),
          moment().subtract(1, 'quarters').endOf('quarter'),
        ]
        break

      // 今年
      case 13:
        quickDateRange = [moment().startOf('year'), moment()]
        break
      // 去年
      case 15:
        quickDateRange = [
          moment().subtract(1, 'years').startOf('year'),
          moment().subtract(1, 'years').endOf('year'),
        ]
        break
      // case 1: // 近6小时
      //   quickDateRange = [moment().subtract(6, 'hour'), moment()];
      //   break;
      // case 3: // 近12小时
      //   quickDateRange = [moment().subtract(12, 'hour'), moment()];
      //   break;
      // case 5: // 近24小时
      //   quickDateRange = [moment().subtract(24, 'hour'), moment()];
      //   break;
      case 4: // 近3天
        quickDateRange = [moment().subtract(3, 'days'), moment()]
        break
      // 近7天
      case 6:
        quickDateRange = [moment().subtract(7, 'days'), moment()]
        break
      // 近30天
      case 8:
        quickDateRange = [moment().subtract(30, 'days'), moment()]
        break

      // 近90天
      case 10:
        quickDateRange = [moment().subtract(90, 'days'), moment()]
        break
      // 近180天
      case 12:
        quickDateRange = [moment().subtract(180, 'days'), moment()]
        break

      // 近365天
      case 14:
        quickDateRange = [moment().subtract(365, 'days'), moment()]
        break
    }
  }

  const formatedQuickDateRange = quickDateRange.map((item) =>
    item.format(formatStr)
  )
  return formatedQuickDateRange
}

// 近几个小时
export const getHourRange = (quickTime) => {
  let quickDateRange = []
  switch (quickTime) {
    case '近6小时':
      quickDateRange = [moment().subtract(6, 'hour'), moment()]
      break
    case '近12小时':
      quickDateRange = [moment().subtract(12, 'hour'), moment()]
      break
    case '近24小时':
      quickDateRange = [moment().subtract(24, 'hour'), moment()]
      break
    default:
      break
  }
  return quickDateRange.map((item) => item.format('YYYY-MM-DD HH:mm:ss'))
}

/**
 * [formatDate 格式化日期]
 * @param  {[array]} type [类型（1：2018-12-09 - 2018-12-29转成2018年12月9日 - 2018年12月29日，2：2018-12-09 - 2018-12-29转成2018.12.9 - 2018.12.29）]
 * @return {[string]}     [格式化后的日期格式]
 */
export const formatDate = (type, selectedDateRange, useHourSelect) => {
  // const mark = type === 2 ? '.' : '';
  let formatedDate = ''
  for (let i = 0; i < selectedDateRange.length; i++) {
    let years, hours
    if (useHourSelect) {
      ;[years, hours] = selectedDateRange[i].split(' ')
    } else {
      years = selectedDateRange[i]
    }
    const splitDateArray = years.split('-')
    for (let j = 0; j < splitDateArray.length; j++) {
      if (j === 0) {
        formatedDate += `${splitDateArray[j]}${type === 1 ? '年' : '.'}`
      }
      if (j === 1) {
        // const month = parseInt(splitDateArray[j], 10);
        formatedDate += `${splitDateArray[j]}${type === 1 ? '月' : '.'}`
      }
      if (j === 2) {
        // const day = parseInt(splitDateArray[j], 10);
        formatedDate += `${splitDateArray[j]}${type === 1 ? '日' : ''}`
      }
    }
    if (hours) {
      formatedDate +=
        type === 1
          ? `${hours.split(':')[0]}时${hours.split(':')[1]}分`
          : ` ${hours}`
    }
    if (i === 0) {
      formatedDate += ' - '
    }
  }
  return formatedDate
}

export const addClass = (obj, cls) => {
  const obj_class = obj.className,
    blank = obj_class !== '' ? ' ' : '', //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls //组合原来的 class 和需要添加的 class.
  obj.className = added //替换原来的 class.
}
export const removeClass = (obj, cls) => {
  let obj_class = ` ${obj.className} ` //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' ') //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  let removed = obj_class.replace(` ${cls} `, ' ') //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '') //去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed //替换原来的 class.
}
export const hasClass = (obj, cls) => {
  const obj_class = obj.className, //获取 class 内容.
    obj_class_lst = obj_class.split(/\s+/) //通过split空字符将cls转换成数组.
  for (const x in obj_class_lst) {
    if (obj_class_lst[x] === cls) {
      //循环数组, 判断是否包含cls
      return true
    }
  }
  return false
}
