<script setup lang="ts">
import { useShoppingCartStore } from '@stores/shoppingCart';
import LoadingMain from '@components/LoadingMain.vue';
import optionsComposables from '@composables/options';
import shoppingCart from '@modules/shoppingCart';
import { useConfirm } from 'primevue/useconfirm';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import DataView from 'primevue/dataview';
import { storeToRefs } from 'pinia';
import router from '@router/index';
import { onMounted } from 'vue';

const shoppingCartStore = useShoppingCartStore();
const { productsCart, loading } = storeToRefs(shoppingCartStore);
const options = optionsComposables();
const confirm = useConfirm();

const viewProduct = (id: number) => router.push({ name: 'productDetails', params: { id } });

const confirmRemoveOneProductCart = (e: any, id: number) => {
  confirm.require({
    group: 'popup',
    target: e.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => shoppingCartStore.removeAllOneProducCart(id)
  });
};

onMounted(() => {
  shoppingCartStore.getProductCart();
});
</script>
<template>
  <ScrollPanel class="scrollpanel-sty" :pt="options.scrollPanel">
    <LoadingMain :status="loading" :full="true">
      <DataView
        v-if="productsCart.length"
        :value="productsCart"
        data-key="shopping-cart"
        class="dataview-sty"
      >
        <template #list="{ data, index }">
          <shoppingCart.Card
            :product="data"
            :index="index"
            @view="viewProduct"
            @increase-cart="shoppingCartStore.addProductCart"
            @subtract-cart="shoppingCartStore.removeProductCart"
            @remove-cart="confirmRemoveOneProductCart"
          />
        </template>
      </DataView>

      <div v-else class="content-empty">
        <div class="text-center">
          <h1>¡Carrito de compras vacio!</h1>
          <p>Necesitas agregar productos al carrito.</p>
          <i class="pi pi-shopping-cart icon-cart"></i>
        </div>
      </div>
    </LoadingMain>

    <ScrollTop
      class="btn-scroll-top top-cart"
      target="parent"
      :threshold="100"
      icon="pi pi-arrow-up"
    />
  </ScrollPanel>
</template>

<style scoped>
.content-empty {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-cart {
  font-size: 40px;
  margin-top: 10px;
  color: var(--primary-color);
}
.scrollpanel-sty {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 50px;
  left: 0;
}
.dataview-sty {
  padding: 60px 40px 110px 40px;
}
.top-cart {
  z-index: 300;
  bottom: 70px;
}
</style>
