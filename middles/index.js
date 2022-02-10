/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-06 14:45:19
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-09 15:55:43
 */

const logs = async (ctx, next) => {
  const startTime = +new Date()
  await next()
  const finishTime = +new Date()
  const timeRange = parseFloat((finishTime - startTime) / 1000)
  console.log(
    `请求时间:${startTime} 响应时间:${finishTime} 请求时长:${timeRange}s 请求的url:${ctx.request.url}`
  )
  console.log(ctx.header)
}

const setHeader = async (ctx, next) => {
  ctx.setHeader('context-type', 'text')
  await next
}

module.exports = {
  setHeader,
  logs,
}
