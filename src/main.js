import { createApp } from 'vue'
import './assets/css/zero_style.css'
import App from './App.vue'
import router from './router'
import Vue3TouchEvents from "vue3-touch-events";
import {removeTitleAttributes} from './mixins/removeTitleMixin';
import { createYmaps } from 'vue-yandex-maps';
import store from './store/store'
import { createHead } from '@vueuse/head';

const app = createApp(App)
    .use(store)
    .use(router) 
    .use(Vue3TouchEvents)
    .use(createYmaps({
        apikey: 'adc0ab01-5503-4b88-ad9a-b8cdaca67064'
      }))
    .use(createHead())

    app.config.globalProperties.removeTitleAttributes = removeTitleAttributes;
    
app.mount('#app');
