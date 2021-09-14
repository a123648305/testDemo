import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./components/IndexPage";
import Index from "./components/Index";
import Example from "./components/Example";
import Other from "./components/other";
import Home from "./pages/index/home";
// const routes = [
//   { path: "/", name: "home", component: IndexPage },
//   {
//     path: "/index",
//     name: "Index",
//     component: Index,
//   },
//   {
//     path: "/example",
//     name: "Example",
//     component: Example,
//   },
// ];
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/index" exact component={Index} />
        <Route path="/example" exact component={Example} />
        <Route path="/other" exact component={Other} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
