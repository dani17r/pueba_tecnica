<script setup lang="ts">
import type { ProductI } from '@/types/products';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import { truncate } from 'lodash';
import Chip from 'primevue/chip';

const { product, index } = defineProps<{ product: ProductI; index: number }>();
const emit = defineEmits(['removeCart', 'subtractCart', 'increaseCart', 'view']);
</script>

<template>
  <div class="col-12" :key="index">
    <div class="flex flex-column md:flex-row p-4 gap-4">
      <img
        class="w-20rem m-auto cursor-pointer"
        :src="product.image"
        :alt="product.title"
        @click="emit('view', product.id)"
      />
      <div class="flex flex-column sm:flex-row justify-content-between flex-1 gap-4">
        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
          <div class="text-2xl font-bold text-900 cursor-pointer" @click="emit('view', product.id)">
            {{ product.title }}
          </div>
          <Rating
            v-if="product.rating"
            :modelValue="product.rating.rate"
            readonly
            :cancel="false"
          ></Rating>
          <div class="flex align-items-center gap-3">
            <p class="m-0">
              {{ truncate(product.description, { length: 160 }) }}
            </p>
          </div>
          <Chip :label="product.category" />
          <div class="flex gap-2">
            <Button
              size="small"
              icon="pi pi-minus-circle"
              label="Menos"
              severity="danger"
              @click="emit('subtractCart', product.id)"
            />
            <Button icon="pi pi-plus-circle" label="Mas" @click="emit('increaseCart', product)" />
          </div>
          <Button
            size="small"
            icon="pi pi-times"
            label="Remover"
            severity="danger"
            @click="(event) => emit('removeCart', event, product.id)"
          />
        </div>
        <div
          class="relative flex w-4 sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
        >
          <span class="text-2xl font-semibold">${{ product.price }}</span>
          <span class="md:absolute bottom-0 flex gap-3">
            <span class="text-2xl font-semibold text-primary"
              >Total ${{ Number(product.price) * Number(product.quantity) }}</span
            >
            <b class="quantity">{{ product.quantity }}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.quantity {
  display: block;
  background-color: var(--primary-color);
  text-align: center;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: large;
  color: white;
  width: 40px;
  height: 41px;
}
</style>
