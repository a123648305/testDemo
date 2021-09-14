/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 16:02:07
 */
import dva from "dva";
import "./index.css";
import "antd/dist/antd.css";
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/example").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
