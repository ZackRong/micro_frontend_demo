import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const el = document.getElementById('app');

createApp(App)
   .use(router)
   .mount(el);
