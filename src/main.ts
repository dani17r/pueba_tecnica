import 'primevue/resources/themes/lara-light-teal/theme.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@css/main.css';

import ConfirmationService from 'primevue/confirmationservice';
import MasonryWall from '@yeger/vue-masonry-wall';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import router from '@router/index';
import App from '@views/App.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(MasonryWall);
app.use(ToastService);
app.use(ConfirmationService);

app.directive('tooltip', Tooltip);

app.mount('#app');
