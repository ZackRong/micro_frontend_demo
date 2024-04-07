
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: () => import('./views/Home')
//     },
//     {
//       path: '/about',
//       name: 'About',
//       component: () => import('./views/About')
//     }
//   ]
// });
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About')
  }
];

export default routes;
