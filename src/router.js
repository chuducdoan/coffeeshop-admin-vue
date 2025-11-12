import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from './components/layouts/MainLayout.vue';
import Login from './pages/auth/Login.vue';
import Home from './pages/home/Home.vue';
import store from './store';
import ProductList from './pages/products/ProductList.vue';
import ProductAdd from './pages/products/ProductAdd.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'product-list',
        component: ProductList,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'product-add',
        component: ProductAdd,
        meta: {
          requiresAuth: true,
        },
      },
      // { path: 'students/:id', component: StudentDetail },
    ],
  },

  {
    path: '/login',
    component: Login,
    meta: {
      requiresUnAuth: true,
    },
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
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/login');
  } else if (to.meta.requiresUnAuth && store.getters['auth/isAuthenticated']) {
    next('/home');
  }
  next();
});

export default router;
