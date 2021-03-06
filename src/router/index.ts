import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Ex01",

    component: () => import("../views/Ex01.vue"),
  },
  {
    path: "/Ex02",
    component: () => import("../views/Ex02.vue"),
  },
  {
    path: "/Ex03",
    component: () => import("../views/Ex03.vue"),
  },
  {
    path: "/Ex04",
    component: () => import("../views/Ex04.vue"),
  },
  {
    path: "/Ex05",
    component: () => import("../views/Ex05.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
