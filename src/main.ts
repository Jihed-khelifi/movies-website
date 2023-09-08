import { createApp } from 'vue'
import '@assets/scss/index.scss'
import router from '@router';

import ElementPlus from 'element-plus';
import locale from 'element-plus/es/locale/lang/fr';

import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus, { locale });
app.use(router);

app.mount('#app');