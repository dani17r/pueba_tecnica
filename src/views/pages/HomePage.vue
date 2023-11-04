<script setup lang="ts">
import Products from '@modules/products';
</script>

<template>
  <div class="content-home">
    <div class="actions">
      <Products.SelectCategories />
      <Products.Search />
    </div>
    <Products.List />
  </div>
</template>

<style scoped>
.content-home {
  margin-top: 90px;
}
.actions {
  justify-content: space-between;
  background-color: var(--primary-color);
  border-top: 6px solid white;
  padding-bottom: 40px;
  margin-bottom: 30px;
  padding: 10px 40px;
  position: fixed;
  display: flex;
  z-index: 100;
  width: 100%;
  top: 55px;
  left: 0;
}
</style>
