import { createRouter, createWebHistory } from "vue-router";
import BooksView from "../views/BooksView.vue";
import BookView from "../views/BookView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BooksView,
    },
    {
      path: "/books",
      name: "books",
      component: BooksView,
    },
    {
      path: "/books/:id",
      name: "book",
      component: BookView,
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
