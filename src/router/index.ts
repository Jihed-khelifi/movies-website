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
      path: `/movies`,
      name: `Movies page`,
      component: () => import('@views/Movies.vue'),
      meta: { label: 'All Movies' },
    },
    {
      path: `/tv-shows`,
      name: `TV shows page`,
      component: () => import('@views/TVShows.vue'),
      meta: { label: 'All TV Shows' },
    },
    {
      path: `/tv/:movieId`,
      name: `Movie`,
      component: () => import('@views/SingleTVShow.vue'),
      meta: { label: 'TV show' },
    },
    {
      path: `/people`,
      name: `People page`,
      component: () => import('@views/People.vue'),
      meta: { label: 'People' },
    },
    {
      path: `/people/:personId`,
      name: `Person page`,
      component: () => import('@views/Person.vue'),
      meta: { label: 'Person' },
    },
    {
      path: `/movie/:id`,
      name: `Movie`,
      component: () => import('@views/MovieDetails.vue'),
      meta: { label: 'Movie' },
    },
    {
      path: "/profile/:vanity",
      name: "Profile",
      component: () => import('@views/Profile.vue'),
      meta: { label: 'Profile', requiresAuth: true },


    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'FIRSTLOAD' },
      meta: { label: 'Loading' },
    },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.label}`;
  next();
});

export default router;
