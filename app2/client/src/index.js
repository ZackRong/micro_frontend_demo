import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue';
import routes from './routes';

let router = null;
let instance = null;
function render(props = {}) {
    const { container } = props;
    const router = createRouter({
        history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app2/' : '/'),
        routes
    });

    instance = createApp(App);
    instance.use(router);
    instance.mount(container ? container.querySelector('#app') : '#app');
  }
  
  // 独立运行时
  if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  
  export async function bootstrap() {
    console.log('[vue] vue app2 bootstraped');
  }
  export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
  }
  export async function unmount() {
    // instance.$destroy();
    // instance.$el.innerHTML = '';
    instance = null;
    router = null;
  }
