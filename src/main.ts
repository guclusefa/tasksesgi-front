import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import i18n from './services/i18n';
import toast from './services/toast';

import './index.css';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);

app.use(i18n);
app.use(toast);

app.mount('#app');
