<script setup lang="ts">
import optionsComposables from '@composables/options';
import { useRoute } from 'vue-router';
import TabMenu from 'primevue/tabmenu';
import { onMounted, ref } from 'vue';

const options = optionsComposables();
const route = useRoute();

const items = ref(options.routesHeaders);
const active = ref(0);

onMounted(() => {
  active.value = items.value.findIndex((item) => {
    return route.path === item.route;
  });
});
</script>

<template>
  <TabMenu v-model:activeIndex="active" :model="items" class="tabmenu-sty">
    <template #item="{ label, item, props }">
      <router-link v-slot="{ navigate, href }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <i v-bind="props.icon"></i>
          <span v-bind="props.label">{{ label }}</span>
        </a>
      </router-link>
    </template>
  </TabMenu>
  <img
    src="@img/daniel-logo-rd.png"
    v-tooltip="'Autor de esta pagina web: Daniel Rangel, dannymetal17@gmail.com'"
    class="img-logo"
  />
  <router-view />
</template>

<style>
.tabmenu-sty {
  position: fixed;
  z-index: 100;
  width: 100%;
  left: 0px;
  top: 0px;
}
.img-logo {
  box-shadow:
    0px 1px 8px rgba(0, 0, 0, 0.08),
    0px 3px 4px rgba(0, 0, 0, 0.1),
    0px 1px 4px -1px rgba(0, 0, 0, 0.1);
  background-color: var(--primary-color);
  object-fit: contain;
  border-radius: 50%;
  position: fixed;
  padding: 10px;
  height: 60px;
  z-index: 400;
  width: 60px;
  bottom: 30px;
  left: 10px;
}
</style>
