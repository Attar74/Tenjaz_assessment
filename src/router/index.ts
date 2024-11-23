import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import index from '../views/index.vue';
import process from 'process';

// Define the route records using the `RouteRecordRaw` type
const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
