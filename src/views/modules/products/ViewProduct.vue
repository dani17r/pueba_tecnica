<script setup lang="ts">
import LoadingMain from '@components/LoadingMain.vue';
import optionsComposables from '@composables/options';
import ButtonBack from '@components/ButtonBack.vue';
import { useProductStore } from '@stores/products';
import ScrollPanel from 'primevue/scrollpanel';
import Rating from 'primevue/rating';
import { storeToRefs } from 'pinia';
import router from '@router/index';
import Chip from 'primevue/chip';
import { onMounted } from 'vue';

const options = optionsComposables();
const productStore = useProductStore();
const { product, loading } = storeToRefs(productStore);

onMounted(() => {
  const id = Number(router.currentRoute.value.params.id);
  productStore.getProduct(id);
});
</script>

<template>
  <ButtonBack />
  <ScrollPanel class="scrollpanel-sty" :pt="options.scrollPanel">
    <LoadingMain :status="loading" :full="true">
      <div class="content grid">
        <div class="box-description col-12 md:col-12 lg:col">
          <span class="label-title">Titulo:</span>
          <h1 class="title">{{ product.title }}</h1>
          <Rating
            v-if="product.rating"
            :modelValue="product.rating.rate"
            readonly
            class="mb-3"
            :cancel="false"
          ></Rating>
          <span class="category">Categoria:</span> <Chip :label="product.category" />
          <div class="details">
            <span>Detalles:</span>
            <hr />
            <span> {{ product.description }}</span>
          </div>
          <div class="box-price">
            Precio: <span class="price">${{ product.price }}</span>
          </div>
        </div>
        <div class="box-img col-12 md:col-fixed">
          <img alt="user header" class="img" :src="product.image" />
        </div>
      </div>
    </LoadingMain>
  </ScrollPanel>
</template>

<style scoped>
.content {
  margin-top: 40px;
}
.box-description {
  font-size: x-large;
}
.category {
  font-weight: 600;
}
.label-title {
  font-size: 15px;
  font-weight: 600;
  padding: 0;
}
.title {
  font-size: 50px;
  margin-top: -5px;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.box-img {
  width: 600px;
  display: block;
  margin: 0 auto;
}
.box-price {
  display: inline;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--orange-500);
}
.details {
  margin-bottom: 40px;
}
.price {
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 30px;
}
.scrollpanel-sty {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 46px;
  padding: 0px 0px 0px 40px;
  left: 0;
}
</style>
