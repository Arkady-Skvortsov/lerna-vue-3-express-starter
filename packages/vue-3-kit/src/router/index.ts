import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CitizensView from "@/views/CitizensView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => HomeView,
    },
    {
      path: "/citizens",
      name: "citizens",
      component: () => CitizensView,
    },
  ],
});

export default router;
