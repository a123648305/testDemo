/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-07 14:27:20
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-07 17:00:29
 */

// 移动有序数组
function removeStr(data: number[]): number {
  if (data.length === 0) return 0
  let j: number = 1
  for (let i: number = 1; i < data.length; i++) {
    if (data[i] !== data[i - 1]) {
      data[j] = data[i]
      j++
    }
  }
  return j
}

function removeZero(data: number[]): any {
  if (data.length === 0) return
  let j: number = 0
  for (let i: number = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      data[j] = data[i]
      j++
    }
  }
  return data.slice(0, j)
}

removeStr([1, 1, 2, 3, 5, 5, 7])
