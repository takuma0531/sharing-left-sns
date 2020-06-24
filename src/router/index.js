import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import { AUTHENTICATE_USER } from '../store/types/actions.type';
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

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/user/sign-in', '/user/sign-up', '/'];
  const authRequired = !publicPages.includes(to.path);
  await store.dispatch(AUTHENTICATE_USER);
  const isAuthenticated = store.getters.isAuthenticated;

  // redirect to login page
  if (authRequired && !isAuthenticated) {
    console.log('go to sign page');
    next('/user/sign-in');
  } else {
    next();
  }
});

export default router;
