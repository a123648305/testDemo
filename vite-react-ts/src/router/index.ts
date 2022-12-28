/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-16 14:41:56
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 15:46:38
 */

import Home from "../pages/Index";
import Detail from "../pages/detail";
import Demo from "../pages/Demo";

const routes = [
  {
    path: "/",
    component: Demo,
    exact: true,
    routes: [
      {
        path: "/index",
        pathname: "index",
        component: Demo,
      },
      {
        path: "/detail",
        pathname: "Detail",
        component: Detail,
      },
    ],
  },
];
export default routes;
