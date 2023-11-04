<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <div class="not-found">
    <div class="not-found-card">
      <h1 class="not-found-title">¡Error 404!</h1>
      <p class="not-found-message">Lo sentimos, la página que estás buscando no existe.</p>
      <Button
        size="small"
        class="not-found-button"
        label="Volver a la página principal"
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.not-found-card {
  text-align: center;
}

.not-found-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.not-found-button {
  width: 100%;
}
</style>
