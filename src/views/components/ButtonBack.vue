<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <Button
    label="Regresar"
    icon="pi pi-arrow-left"
    size="small"
    class="btn-back"
    @click="$router.go(-1)"
    outlined
  />
</template>

<style scoped>
.btn-back {
  position: fixed;
  top: 8px;
  right: 20px;
  z-index: 200;
}
</style>
