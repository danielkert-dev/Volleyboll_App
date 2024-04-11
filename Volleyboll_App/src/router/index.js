import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // Use createWebHashHistory instead of createWebHistory
  history: createWebHashHistory(),
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
    // Add other routes here as needed
  ]
});

export default router
