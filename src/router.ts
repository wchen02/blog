import Vue from 'vue';
import Router from 'vue-router';
import FullWidthLayout from '@/layouts/FullWidthLayout.vue';
import HomePage from '@/pages/HomePage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: FullWidthLayout,
      children: [
        {
          path: 'home',
          alias: '',
          component: HomePage,
          name: 'Home',
          meta: { description: 'Overview of environment' },
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // webpackChunkName: "about"
          component: () => import('./pages/AboutPage.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'not-found',
      meta: {
        title: '404 Page not found',
      },
      component: () => import('./pages/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
