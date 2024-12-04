import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';

import TaskView from '@/views/TaskView.vue';

import { setDocumentTitle } from '@/utils/document';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/task',
      name: 'task',
      component: TaskView
    }
  ]
});

router.beforeEach((to, from, next) => {
  setDocumentTitle(String(to.name));
  next();
});

export default router;
