import { find, keyBy, remove, round, sumBy } from 'lodash';
import type { ProductI } from '@/types/products';
import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shopping-cart-store', {
  state: () => ({
    isMounted: false,
    loading: false,
    productsCart: <ProductI[]>[]
  }),

  getters: {
    oneTotalProducts(): number {
      return this.productsCart.length;
    },
    totalProducts(): number {
      const products = this.productsCart;
      return sumBy(products, 'quantity');
    },
    totalPrice(): number {
      const products = this.productsCart.map((item: any) => {
        item.totalPrice = Number(item.quantity) * Number(item.price);
        return item;
      });

      return Number(round(sumBy(products, 'totalPrice'), 2).toFixed(2));
    },
    keyIdProductCart: (state) => {
      const products = [...state.productsCart, { id: 0, quantity: 0 }];
      return keyBy(products, 'id');
    }
  },

  actions: {
    getProductCart() {
      this.loading = true;
      const products = localStorage.getItem('productsCart');

      if (products) this.productsCart = JSON.parse(products);
      setTimeout(() => (this.loading = false), 400);
    },

    addProductCart(product: ProductI) {
      const productsStore = localStorage.getItem('productsCart');

      if (productsStore?.length) {
        const productsCart = JSON.parse(productsStore) as ProductI[];

        const existingProduct = find(productsCart, { id: product.id });

        if (existingProduct) {
          existingProduct.quantity = Number(existingProduct.quantity) + 1;
        } else {
          productsCart.push({ ...product, quantity: 1 });
        }

        this.productsCart = productsCart;
        localStorage.setItem('productsCart', JSON.stringify(productsCart));
      } else {
        localStorage.setItem('productsCart', JSON.stringify([{ ...product, quantity: 1 }]));
      }
    },

    removeAllProducsCart() {
      localStorage.setItem('productsCart', JSON.stringify([]));
      this.productsCart = [];
    },

    removeAllOneProducCart(id: number) {
      this.productsCart = remove(this.productsCart, (product) => product.id != id);
      localStorage.setItem('productsCart', JSON.stringify(this.productsCart));
    },

    removeProductCart(id: number) {
      const productsStore = localStorage.getItem('productsCart');

      if (productsStore?.length) {
        const productsCart = JSON.parse(productsStore) as ProductI[];

        const existingProduct = find(productsCart, { id });

        if (existingProduct) {
          if (Number(existingProduct.quantity) > 0) {
            existingProduct.quantity = Number(existingProduct.quantity) - 1;
          }
        }

        this.productsCart = productsCart;
        localStorage.setItem('productsCart', JSON.stringify(productsCart));
      }
    }
  }
});
