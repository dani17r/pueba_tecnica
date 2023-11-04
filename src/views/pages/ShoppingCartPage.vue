<script setup lang="ts">
import shoppingCart from '@modules/shoppingCart';
</script>

<template>
  <div class="content-shopping-cart">
    <shoppingCart.List />
    <shoppingCart.Total />
  </div>
</template>

<style scoped>
.content-shopping-cart {
  margin-top: 90px;
}
</style>
