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
      path: `/login`,
      name: `Movies/Login`,
      component: () => import('@views/Login.vue'),
      meta: { label: 'Login' },
    },
    {
      path: `/movie`,
      name: `Movie`,
      component: () => import('@components/Movie-Detail.vue'),
      meta: { label: 'Movie' },
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: { name: 'FIRSTLOAD' },
    //   meta: { label: 'Chargement' },
    // },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.label} • Movies`;
  next();
});

export default router;
