const Router = require('koa-router')
const router = new Router()
const services = require('../services')
/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:38:27
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 14:43:06
 */
router
  .get('/home', services.home)
  .get('/app', services.app)
  .get('/about', services.about)
  .get('/list', services.list)
  .get('/test/list', services.list)
  .get('/jsonData', services.jsonData)
  .get('/demo', services.demo)
  .get('/test/saveData', services.saveData)
  .get('/test/getData', services.getData)
module.exports = router
