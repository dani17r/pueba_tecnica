<script setup lang="ts">
import { useShoppingCartStore } from '@stores/shoppingCart';
import { useConfirm } from 'primevue/useconfirm';
import Button from 'primevue/button';
import { storeToRefs } from 'pinia';

const shoppingCartStore = useShoppingCartStore();
const { totalProducts, totalPrice, oneTotalProducts } = storeToRefs(shoppingCartStore);
const confirm = useConfirm();

const confirmRemoveAllProductsCart = () => {
  confirm.require({
    group: 'confirms',
    message: 'Estas seguro que quieres Eliminar todo?',
    header: 'Confirmacion',
    icon: 'pi pi-exclamation-triangle',
    accept: () => shoppingCartStore.removeAllProducsCart()
  });
};
</script>

<template>
  <div class="content">
    <Button
      size="small"
      severity="danger"
      icon="pi pi-trash"
      label="Limpiar Carrito"
      class="btn-delete-all"
      v-if="oneTotalProducts"
      @click="confirmRemoveAllProductsCart"
    />
    <div>
      <h3 class="m-0">
        {{ totalProducts }} {{ totalProducts == 1 ? 'Producto unificado' : 'Productos juntos' }}
      </h3>
      <h3 class="m-0">
        {{ oneTotalProducts }}
        {{ oneTotalProducts == 1 ? 'Producto por separado' : 'Productos por separados' }}
      </h3>
    </div>
    <h2 class="m-0">Precio Total ${{ totalPrice }}</h2>
  </div>
</template>

<style scoped>
.btn-delete-all {
  position: fixed;
  z-index: 90;
  top: 65px;
  right: 15px;
}
.content {
  background-color: var(--primary-color);
  align-items: center;
  justify-content: space-between;
  position: fixed;
  display: flex;
  height: 60px;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-right: 80px;
  padding-left: 80px;
  z-index: 100;
  color: white;
}
</style>
