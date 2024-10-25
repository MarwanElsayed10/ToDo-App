import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () => import("@/views/TodoList.vue"),
    meta: {
      title: "ToDo List",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/AboutPage.vue"),
    meta: {
      title: "About",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
