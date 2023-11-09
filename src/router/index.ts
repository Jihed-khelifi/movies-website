import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(`${import.meta.env.BASE_URL}`),
  routes: [
    {
      path: `/`,
      name: `Home page`,
      component: () => import('@views/Home.vue'),
      meta: { label: 'Home' },
    },
    {
      path: `/login`,
      name: `Login page`,
      component: () => import('@views/Login.vue'),
      meta: { label: 'Sign in' },
    },
    {
      path: `/register`,
      name: `Register page`,
      component: () => import('@views/Register.vue'),
      meta: { label: 'Join us' },
    },
    {
      path: `/movie/:id`,
      name: `Movie`,
      component: () => import('@components/MovieDetails.vue'),
      meta: { label: 'Movie' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'FIRSTLOAD' },
      meta: { label: 'Chargement' },
    },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.label}`;
  next();
});

export default router;
