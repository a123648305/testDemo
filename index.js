/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:21:50
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-13 16:56:07
 */
const Koa = require('koa')
const routes = require('./router')
const Router = require('koa-router')
const middleware = require('./middles')
const static = require('koa-static')
const render = require('koa-ejs')
const app = new Koa()
const router = new Router()
const path = require('path')

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

router.use(routes.routes())
app.use(middleware.logs)
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is on port 3000')
})
