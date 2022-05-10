/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-11-16 14:41:56
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 15:46:38
 */
import Home from '../pages/Index'
import Detail from '../pages/detail'
import Demo from '../pages/Demo'

const routes = [
  {
    path: '/',
    pathname: 'demo',
    element: Demo,
    // indexRoute: { component: Home },
    childRoutes: [
      {
        path: '/index',
        pathname: 'index',
        element: Home,
      },
      {
        path: '/messages/:id',
        pathname: 'Detail',
        element: Detail,
        // childRoutes: [
        //   { path: '/messages/:id', component: Message },
        //   {
        //     path: 'messages/:id',
        //     onEnter: function (nextState, replaceState) {
        //       replaceState(null, '/messages/' + nextState.params.id)
        //     },
        //   },
        // ],
      },
    ],
  },
]
export default routes
