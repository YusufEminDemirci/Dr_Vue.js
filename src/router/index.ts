import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/PostsView.vue"),
  },
  {
    path: "/repos",
    name: "Repos",
    component: () => import("../views/ReposView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
