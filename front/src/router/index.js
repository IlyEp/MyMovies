import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import LogIn from "../views/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;