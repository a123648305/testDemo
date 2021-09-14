/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 15:02:49
 */
import request from "../utils/request";

export function query() {
  return request("/api/users");
}

export function getList() {
  return request("/api/list");
}
