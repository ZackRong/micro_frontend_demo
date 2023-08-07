import { createApp } from 'vue';
import router from './router';

const el = document.getElementById('app');
const app = createApp({});

app.use(router)
   .mount(el);
