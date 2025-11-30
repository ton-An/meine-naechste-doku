import { createRouter, createWebHistory } from 'vue-router'

import SplashView from '@/views/SplashView.vue'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ],
    },
  ],
})

export default router
