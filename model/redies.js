/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-02-10 12:17:44
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-10 15:20:51
 */

const { createClient } = require('redis')
const connectReadies = async () => {
  const client = createClient({
    url: 'redis://red-c828uand17ca6ofqgbp0:6379',
  })
  client.on('error', (err) => console.log('Redis Client Error', err))
  await client.connect()
  return client
}

const setRedis = async (key, value) => {
  const client = await connectReadies()
  await client.set(key, value)
  await client.quit()
}

const getRedis = async (key) => {
  const client = await connectReadies()
  const value = await client.get(key)
  await client.quit()
  return value
}

module.exports = {
  connectReadies,
  setRedis,
  getRedis,
}
