import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(`${import.meta.env.BASE_URL}`),
  routes: [
    // {
    //   path: '',
    //   name: 'FIRSTLOAD',
    //   component: () => import('../App.vue'),
    //   meta: { label: 'Chargement' },
    // },
    {
      path: `/`,
      name: `Movies/Dashboard`,
      component: () => import('@views/Dashboard.vue'),
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
