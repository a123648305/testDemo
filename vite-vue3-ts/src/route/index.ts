import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Index = () => import("@/views/Index/index.vue");
const About = () => import("@/views/About/index.vue");

const routes = [
  {
    path: "/",
    redirect: "/about",
    // children: [
    //   {
    //     path: "index",
    //     component: Index,
    //   },
    //   {
    //     path: "about",
    //     component: About,
    //   },
    // ],
  },
  {
    path: "/about",
    component: () => import("@/views/About/index.vue"),
  },
];

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
});

export default router;
