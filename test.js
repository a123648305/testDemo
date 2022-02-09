/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 11:39:19
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-14 11:59:32
 */
const fs = require('fs')
const path = require('path')

// console.log('read', path.resolve(__dirname, `model/test.json`))

const prePaht = path.resolve(__dirname, '..')
console.log(path.join(prePaht, `model/test.json`), 'xx')

// fs.readFile(path.resolve(__dirname, `model/test.json`), (err, res) => {
//   if (err) {
//     console.log(err, 'read err')
//   }
//   if (res) {
//     console.log(res.toString(), 'read success')
//   }
// })
