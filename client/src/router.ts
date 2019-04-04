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
      path: '/sign',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/students',
      component: () => import('./views/StudentMgmt.vue')
    }
  ]
});
