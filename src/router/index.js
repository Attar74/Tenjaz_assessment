import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard.vue'),
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/users.vue'),
        },
      ],
    },
  ],
});

export default router;
