const Router = require('koa-router')
const router = new Router()
const services = require('../services')
/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:38:27
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-13 14:54:31
 */
router
  .get('/home', services.home)
  .get('/app', services.app)
  .get('/about', services.about)
  .get('/list', services.list)
  .get('/test/list', services.list)
  .get('/jsonData', services.jsonData)
  .get('/demo', services.demo)
module.exports = router
