import VueRouter from 'vue-router';

import Home from './views/Home';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});

export default router;
