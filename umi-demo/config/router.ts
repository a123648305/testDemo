/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 09:42:24
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-27 10:55:26
 */
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/home', component: '@/pages/home/index', title: '首页' },
  { path: '/index', component: '@/pages/index/index', title: 'home' },
  { path: '/other', component: '@/pages/other/index', title: 'other' },
];

export default routes;
