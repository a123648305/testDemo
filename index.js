/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:21:50
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-09 15:42:36
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
const port = process.env.PORT || 3000

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true,
})

const proxy = require('koa2-proxy-middleware')
const options = {
  targets: {
    '^/api': {
      // this is option of http-proxy-middleware
      target: 'http://m.maoyan.com', // target host
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/api': '', // rewrite path
      },
    },
  },
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

router.use(routes.routes())
app.use(middleware.logs)
app.use(proxy(options))
app.use(router.routes())

app.listen(port, () => {
  console.log('server is on port ' + port)
})
