import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      redirect: { name: "dashboard" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/index.vue"),
    },
    {
      path: "/nuovoprogetto",
      name: "nuovoprogetto",
      component: () => import("../views/gestioneProgetto/index.vue"),
    },
  ],
});

export default router;
