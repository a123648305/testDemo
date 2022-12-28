/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-09-09 17:26:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-11-16 16:03:54
 */
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from 'react-router-dom'
import {
  BrowserRouter,
  Router,
  Routes,
  useRoutes,
  Link,
} from "react-router-dom";
import routeConfig from "./router";
import "./index.css";
import "antd/dist/antd.css";
import "./assets/iconfont/iconfont.css";
import App from "./App";
import { renderRoutes } from "react-router-config";
import { Space } from "antd";
import routes from "./router";

// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Router routes={routes} />, document.getElementById('root'))

// const App = () => {
//   let routes = useRoutes(routeConfig)
//   return routes
// }

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

const Root = ({ route }) => (
  <div>
    <Space>
      <Link to="/">to Home</Link>
      <Link to="/child/13355">to index</Link>
      <Link to="/child/133/grand-child">to detail</Link>
    </Space>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

// const routes = [
//   {
//     component: Root,
//     routes: [
//       {
//         path: "/",
//         exact: true,
//         component: Home,
//       },
//       {
//         path: "/child/:id",
//         component: Child,
//         routes: [
//           {
//             path: "/child/:id/grand-child",
//             component: GrandChild,
//           },
//         ],
//       },
//     ],
//   },
// ];

ReactDOM.render(
  <BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
