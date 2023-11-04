<script setup lang="ts">
const { status, full } = defineProps<{ status: boolean; full?: boolean }>();
</script>

<template>
  <div>
    <template v-if="status">
      <div :class="full ? 'full-loading' : 'loading'">
        <i class="pi pi-spin pi-spinner icon-loading"></i>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<style scoped>
.full-loading {
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  height: 100vh;
  z-index: 200;
  width: 100%;
  left: 0px;
  top: 0px;
}
.loading {
  backdrop-filter: blur(10px);
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 200;
  width: 100%;
}
.icon-loading {
  color: var(--primary-color);
  font-size: 2rem;
}
</style>
