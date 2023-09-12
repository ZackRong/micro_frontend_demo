import * as singleSpa from 'single-spa';
// import System from 'systemjs';
const name1 = 'app1';

// const app1 = () => import('../../app1/static/js/main.bundle.js');
const app1 = () => System.import('app1');
// const app1 = () => import('http://127.0.0.1:3000/js/main.bundle.js');

const app1ActiveWhen = '/';

singleSpa.registerApplication({
  name: name1,
  app: app1,
  activeWhen: app1ActiveWhen
});

singleSpa.start();

// document.getElementById('base').innerHTML = 'base';
