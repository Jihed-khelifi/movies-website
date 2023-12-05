import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@assets/scss/index.scss'
// import './styles/element/index.scss'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import router from '@router';

import ElementPlus from 'element-plus';

import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(createPinia());

app.mount('#app');