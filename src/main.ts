import { createApp } from 'vue';
import router from '@/router';
import { createPinia } from 'pinia';

import '@/assets/styles/reset.less';

import App from './App.vue';

const app = createApp(App);

app
  .use(router)
  .use(createPinia())
  .mount('#app');
