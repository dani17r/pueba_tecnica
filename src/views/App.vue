<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Toast from 'primevue/toast';
</script>

<template>
  <RouterView />

  <div class="elements">
    <ConfirmDialog group="confirms" />
    <ConfirmPopup group="popup" />
    <Toast position="bottom-right" group="br" />
  </div>
</template>
