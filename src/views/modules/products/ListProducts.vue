<script setup lang="ts">
import LoadingMain from '@components/LoadingMain.vue';
import ScrollPanel from 'primevue/scrollpanel';
import { useToast } from 'primevue/usetoast';
import Product from '@modules/products';
import { onMounted } from 'vue';

import { useShoppingCartStore } from '@stores/shoppingCart';
import optionsComposables from '@composables/options';
import { useProductStore } from '@stores/products';
import type { ProductI } from '@/types/products';
import ScrollTop from 'primevue/scrolltop';
import { storeToRefs } from 'pinia';
import router from '@router/index';

const toast = useToast();
const options = optionsComposables();
const productStore = useProductStore();
const shoppingCartStore = useShoppingCartStore();
const { filterProducts, loading } = storeToRefs(productStore);
const { keyIdProductCart } = storeToRefs(shoppingCartStore);

const viewProduct = (id: number) => router.push({ name: 'productDetails', params: { id } });

const addProductCart = (product: ProductI) => {
  shoppingCartStore.addProductCart(product);
  toast.add({
    group: 'br',
    severity: 'success',
    summary: 'Mensaje',
    detail: 'Producto agregado',
    life: 2000
  });
};

onMounted(() => {
  shoppingCartStore.getProductCart();
  setTimeout(() => productStore.getProducts(), 400);
});
</script>

<template>
  <ScrollPanel class="scrollpanel-sty" :pt="options.scrollPanel">
    <LoadingMain :status="loading" :full="true">
      <masonry-wall
        :items="filterProducts"
        :column-width="300"
        :gap="20"
        v-slot="{ item, index }"
        class="content"
      >
        <Product.Card
          :product="item"
          :index="index"
          @view="viewProduct(item.id)"
          @add-cart="addProductCart"
          :quantity="Number(keyIdProductCart[item.id]?.quantity || 0)"
        />
      </masonry-wall>
    </LoadingMain>
    <ScrollTop class="btn-scroll-top" target="parent" :threshold="100" icon="pi pi-arrow-up" />
  </ScrollPanel>
</template>

<style scoped>
.content {
  padding: 20px 40px 180px 40px;
}
.scrollpanel-sty {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 127px;
  left: 0;
}
</style>
