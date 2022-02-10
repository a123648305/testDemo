/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-02-10 12:17:44
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 14:37:47
 */

const { createClient } = require('redis')
const connectReadies = async () => {
  const client = createClient({
    url: 'redis://red-c828uand17ca6ofqgbp0:6379',
  })
  client.on('error', (err) => console.log('Redis Client Error', err))
  await client.connect()
}

const setRedis = async (key, value) => {
  await connectReadies()
  await client.set(key, value)
  await client.quit()
}

const getRedis = async (key) => {
  await connectReadies()
  const value = await client.get(key)
  await client.quit()
  return value
}

module.exports = {
  connectReadies,
  setRedis,
  getRedis,
}
