import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from './components/layouts/MainLayout.vue';
import Login from './pages/auth/Login.vue';
import Home from './pages/home/Home.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'home', component: Home },
      // { path: 'students/:id', component: StudentDetail },
    ],
  },

  {
    path: '/login',
    component: Login,
  },
  {
    path: '/:notFound(.*)',
    component: null,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
