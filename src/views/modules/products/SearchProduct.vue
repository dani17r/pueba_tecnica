<script setup lang="ts">
import { useProductStore } from '@stores/products';
import InputText from 'primevue/inputtext';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { search } = storeToRefs(productStore);
</script>

<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search"></i>
    <InputText v-model="search" placeholder="Search" />
  </span>
</template>
