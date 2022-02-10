/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:21:50
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 18:11:22
 */
const Koa = require('koa')
const routes = require('./router')
const Router = require('koa-router')
const middleware = require('./middles')
const static = require('koa-static')
const render = require('koa-ejs')
const logger = require('koa-logger')
const cors = require('koa-cors')
const app = new Koa()
const router = new Router()
const path = require('path')

const port = process.env.PORT || 3000

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true,
})
// router.get('/', async (ctx) => {
//   ctx.status = 200
//   //   ctx.body = '<h1>hello world!</h1>'

//   //   await ctx.render('user')
//   let title = 'hello koa2'
//   await ctx.render('index', {
//     title,
//   })
// })

// app.use(static('.'))
app.use(static(path.join(__dirname, 'public/dist')))

app.use(
  logger((str, args) => {
    const [format, method, url, status, time, length] = args
    const logStr = `${
      status ? '-->' : '<--'
    } ${method} 请求的url:${url} 状态${status} 大小${length} 耗时:${time} `
    console.log(logStr)
  })
)
// app.use(cors())
router.use(routes.routes())

app.use(router.routes())
// app.use(
//   router.allowedMethods({
//     throw: true, // 抛出错误，代替设置响应头状态
//     // notImplemented: () => '不支持当前请求所需要的功能',
//     // methodNotAllowed: () => '不支持的请求方式'
//   })
// )

app.listen(port, () => {
  console.log('server is on port ' + port)
})
