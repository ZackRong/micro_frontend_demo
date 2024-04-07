// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:3000',
    container: '#app',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    // entry: { scripts: ['//localhost:3001'] },
    entry: '//localhost:3001',
    container: '#app',
    activeRule: '/app2',
  },
]);

start();