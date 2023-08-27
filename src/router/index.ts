import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHistory(`${import.meta.env.BASE_URL}`),
  routes: [
    {
      path: '',
      name: 'FIRSTLOAD',
      component: () => import('../App.vue'),
      meta: { label: 'Chargement' },
    },
    {
      path: `/dashboard`,
      name: `Movies/Dashboard`,
      components: {
        default: () => import('@views/Dashboard.vue'),
      },
      meta: { label: 'Dashboard' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'FIRSTLOAD' },
      meta: { label: 'Chargement' },
    },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.label} • Movies`;
  next();
});

export default router;