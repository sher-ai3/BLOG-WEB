import { createRouter, createWebHistory } from 'vue-router';
import ls from '../views/list.vue';
import home from '../views/home.vue';

const routes = [
  { path: '/', component: home,},
  {path:"/ls",component:ls}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;