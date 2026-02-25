import { createRouter, createWebHistory } from 'vue-router'
import Progression from '../views/Progression.vue'
import Build from '../views/Build.vue'
import Map from '../views/Map.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'progression',
      component: Progression,
    },
    {
      path: '/build',
      name: 'build',
      component: Build,
    },
    {
      path: '/map',
      name: '/map',
      component: Map,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
  ],
})

export default router
