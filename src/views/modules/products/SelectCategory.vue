<script setup lang="ts">
import { useProductStore } from '@stores/products';
import MultiSelect from 'primevue/multiselect';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { categories } = storeToRefs(productStore);
const selected = ref('');

onMounted(() => productStore.getCategories());
</script>

<template>
  <MultiSelect
    v-model="selected"
    :options="categories"
    @change="productStore.changeSelectCategories"
    placeholder="Select Categories"
    :maxSelectedLabels="3"
    class="w-full md:w-20rem"
  />
</template>
