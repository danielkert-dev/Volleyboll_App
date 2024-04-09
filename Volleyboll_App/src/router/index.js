import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gruppspel',
      name: 'gruppspel',
      component: () => import('../views/gruppspel.vue')
    },
    {
      path: '/slutspel',
      name: 'slutspel',
      component: () => import('../views/slutspel.vue')
    }
  ]
})

export default router
