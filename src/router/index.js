import { createRouter, createWebHashHistory } from 'vue-router';
import ls from '../views/list.vue';
import home from '../views/home.vue';

const routes = [
  { path: '/', component: home,},
  {path:"/ls",component:ls}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;