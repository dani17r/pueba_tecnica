import { filter, lowerCase, orderBy } from 'lodash';
import serviceProduct from '@/services/products';
import type { ProductI } from '@/types/products';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product-store', {
  state: () => ({
    isMounted: false,
    isMountedCategories: false,
    lastSelectId: 0,
    loading: false,
    selectCategories: <string[]>[],
    categories: <string[]>[],
    products: <ProductI[]>[],
    product: <ProductI>{},
    search: ''
  }),

  getters: {
    selectCategoriesCount(): number {
      return this.selectCategories.length;
    },

    filterBySearch(): ProductI[] {
      return filter(this.products, (product) => {
        return lowerCase(product.title).includes(lowerCase(this.search));
      });
    },

    filterByCategories(): ProductI[] {
      return filter(this.filterBySearch, (product) => {
        return this.selectCategories.includes(product.category);
      });
    },

    filterProducts(): ProductI[] {
      if (this.selectCategoriesCount) return this.filterByCategories;
      else return this.filterBySearch;
    }
  },

  actions: {
    getCategories(isMounted = true) {
      if (!this.isMountedCategories) {
        serviceProduct.getCategories().then((categories) => (this.categories = categories));

        this.isMountedCategories = isMounted;
      }
    },

    changeSelectCategories({ value }: { value: string[] }) {
      this.selectCategories = value;
    },

    getProducts(isMounted = true) {
      if (!this.isMounted) {
        this.loading = true;

        serviceProduct
          .getAll()
          .then((products) => (this.products = orderBy(products, ['title'], ['asc'])))
          .finally(() => (this.loading = false));

        this.isMounted = isMounted;
      }
    },

    getProduct(id: number) {
      if (this.lastSelectId != id) {
        this.loading = true;

        serviceProduct
          .getOne(id)
          .then((product) => (this.product = product))
          .finally(() => (this.loading = false));

        this.lastSelectId = id;
      }
    }
  }
});
