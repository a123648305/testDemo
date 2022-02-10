/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:21:50
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 16:55:23
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
const { createProxyMiddleware } = require('http-proxy-middleware')
const k2c = require('koa2-connect')
// const port = process.env.PORT || 3000
const port = 8000

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true,
})
const options = {
  target: 'http://m.maoyan.com', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api': '', // rewrite path
  },
  secure: false,
  //   router: {
  //     // when request.headers.host == 'dev.localhost:3000',
  //     // override target 'http://www.example.org' to 'http://localhost:8000'
  //     'dev.localhost:3000': 'http://localhost:8000',
  //   },
}
// create the proxy (without context)
const exampleProxy = async (ctx, next) => {
  if (ctx.url.startsWith('/api')) {
    //匹配有api字段的请求url
    ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response
    await k2c(createProxyMiddleware(options))(ctx, next)
  }
  await next()
}
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

app.use(logger())
app.use(middleware.logs)
app.use(cors())
app.use(exampleProxy)
router.use(routes.routes())
app.use(router.routes())

app.listen(port, () => {
  console.log('server is on port ' + port)
})
