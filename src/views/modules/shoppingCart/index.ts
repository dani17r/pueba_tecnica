import { defineAsyncComponent } from 'vue';

export default {
  Card: defineAsyncComponent(() => import('@modules/shoppingCart/CardShoppingCart.vue')),
  List: defineAsyncComponent(() => import('@modules/shoppingCart/ListShoppingCart.vue')),
  Total: defineAsyncComponent(() => import('@modules/shoppingCart/TotalShoppingCart.vue'))
};
