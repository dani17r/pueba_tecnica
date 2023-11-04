import { createRouter, createWebHistory } from 'vue-router';
import MainContentLayout from '@layouts/MainContent.vue';
import HomePage from '@pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainContentLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/shopping-cart',
          name: 'cart',
          component: () => import('@pages/ShoppingCartPage.vue')
        },
        {
          path: '/product-details/:id',
          name: 'productDetails',
          component: () => import('@pages/ProductDetailsPage.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@pages/NotFound.vue')
    }
  ]
});

export default router;
