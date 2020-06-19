import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, SignIn, SignUp } from '../views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/user/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
