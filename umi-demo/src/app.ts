/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-28 10:07:00
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-14 14:16:20
 */
import { history } from 'umi';

export function render(oldRouter) {
  if (true) {
    oldRouter();
  } else {
    history.push('/login');
  }
}
