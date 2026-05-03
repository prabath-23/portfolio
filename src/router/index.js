import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash };
    return { top: 0 };
  },
});

export default router;
