/*
 * @Description:
 * @Author: linhongzhu
 * @Date: 2021-03-17 11:43:55
 * @LastEditors: linhongzhu
 * @LastEditTime: 2021-03-17 11:44:22
 */
import { fetch } from '@/public/fetch';

/**
 * 获取当前页面默认值
 * @param {string} projectId
 * @param {string} key
 */
export async function getDefaultValue({ projectId, key }) {
  return fetch.post('/default/value/find', {
    projectId,
    key,
  });
}

/**
 * 保存当前页面默认值
 * @param {string} projectId
 * @param {string} key
 * @param {string} value
 */
export async function setDefaultValue({ projectId, value, key }) {
  return fetch.post('/default/value/update', {
    projectId,
    key,
    value,
  });
}
