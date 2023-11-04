<script setup lang="ts">
import type { ProductI } from '@/types/products';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Badge from 'primevue/badge';
import { truncate } from 'lodash';
import Chip from 'primevue/chip';
import Card from 'primevue/card';

const { product, index, quantity } = defineProps<{
  product: ProductI;
  index: number;
  quantity?: number;
}>();
const emit = defineEmits(['view', 'addCart']);
</script>

<template>
  <Card :key="index" class="card-sty">
    <template #header>
      <div class="relative">
        <span class="price-sty">${{ product.price }}</span>
        <img alt="user header" class="img-sty" :src="product.image" @click="emit('view')" />
      </div>
    </template>
    <template #title>
      <Rating
        v-if="product.rating"
        :modelValue="product.rating.rate"
        readonly
        class="mb-3"
        :cancel="false"
      ></Rating>
      <span class="title-span" @click="emit('view')">
        {{ truncate(product.title, { length: 60 }) }}
      </span>
    </template>
    <template #subtitle>
      <Chip :label="product.category" class="-mb-2 mt-1" />
    </template>
    <template #content>
      <p class="m-0">
        {{ truncate(product.description, { length: 160 }) }}
      </p>
    </template>
    <template #footer>
      <div class="relative">
        <Badge v-show="Number(quantity) >= 1" :value="quantity" size="large" class="badge-sty" />
        <Button
          size="small"
          icon="pi pi-shopping-cart text-xl"
          label="Add to cart"
          @click="emit('addCart', product)"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.badge-sty {
  position: absolute;
  top: -20px;
  left: 130px;
  z-index: 90;
  background-color: var(--orange-500);
}
.card-sty {
  width: 100%;
  padding-top: 20px;
  border: 1px var(--primary-color) solid;
  transition: transform 0.2s ease-in-out;
}
.card-sty:hover {
  transform: translateY(-10px);
}
.img-sty {
  display: block;
  margin: auto;
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
  cursor: pointer;
}
.price-sty {
  position: absolute;
  right: 35px;
  top: 5px;
  font-size: 40px;
  background-color: var(--orange-500);
  border-radius: 5px;
  padding: 0px 10px;
}
.title-span {
  cursor: pointer;
}
</style>
