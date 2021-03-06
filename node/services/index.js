/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-05 11:43:42
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-13 14:55:59
 */
const path = require('path')
const fs = require('fs')

exports.home = async (ctx) => {
  ctx.status = 200
  // ctx.contType =''
  fs.readFileSync(path.resolve(__dirname, `index.html`), (err, res) => {
    if (err) {
      console.log(err)
      ctx.body = err
    }
    if (res) {
      console.log(res)
      ctx.body = res
    }
  })
}

exports.app = async (ctx) => {
  ctx.body = 'app'
}

exports.about = async (ctx) => {
  ctx.body = 'about'
}

exports.list = async (ctx) => {
  ctx.status = 200
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 0, name: 'test1' },
        { id: 1, name: 'test2' },
        { id: 2, name: 'test3' },
        { id: 3, name: 'test4' },
        { id: 4, name: 'test5' },
      ])
    }, 1500)
  })
  ctx.body = result
}

exports.jsonData = async (ctx) => {
  const prePaht = path.resolve(__dirname, '..')
  console.log(path.join(prePaht, `/public/dist/index.html`), 'xx')
  //   fs.readFile(path.join(prePaht, `model/test.json`), (err, res) => {
  //     if (err) {
  //       console.log(err)
  //       ctx.body = err
  //     }
  //     if (res) {
  //       console.log(res)
  //       ctx.body = res.toString()
  //     }
  //   })

  const result = fs.readFileSync(
    path.join(prePaht, `public/dist/index.html`),
    'utf-8'
  ) // 同步执行
  ctx.body = result
}

exports.demo = async (ctx) => {
  const prePaht = path.resolve(__dirname, '..')
  const result = fs.readFileSync(
    path.join(prePaht, `public/dist/index.html`),
    'utf-8'
  ) // 同步执行
  console.log(result, '0')
  ctx.body = result
}
