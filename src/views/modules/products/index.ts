import { defineAsyncComponent } from 'vue';

export default {
  Card: defineAsyncComponent(() => import('@modules/products/CardProduct.vue')),
  List: defineAsyncComponent(() => import('@modules/products/ListProducts.vue')),
  View: defineAsyncComponent(() => import('@modules/products/ViewProduct.vue')),
  Search: defineAsyncComponent(() => import('@modules/products/SearchProduct.vue')),
  SelectCategories: defineAsyncComponent(() => import('@modules/products/SelectCategory.vue'))
};
