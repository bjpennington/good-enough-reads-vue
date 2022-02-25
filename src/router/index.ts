import { createRouter, createWebHistory } from "vue-router";
import BooksView from "../views/BooksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BooksView,
    },
    {
      path: "/tags",
      name: "tags",
      component: () => import("../views/TagsView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue"),
    },
  ],
});

export default router;
