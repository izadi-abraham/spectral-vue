import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Asset/:id',
    name: 'Page',
    component: () => import('../views/Page/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
