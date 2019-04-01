import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/login',
      component: () => import('./views/SignUp.vue')
    }
  ]
});
