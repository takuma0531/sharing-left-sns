import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import { AUTHENTICATE_USER } from '../store/types/actions.type';
import { Explore, SignIn, SignUp, Home, Profile } from '../views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
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
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile/:nickname',
    name: 'Profile',
    component: Profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/user/sign-in', '/user/sign-up', '/explore'];
  const authRequired = !publicPages.includes(to.path);
  await store.dispatch(AUTHENTICATE_USER);
  const isAuthenticated = store.getters.isAuthenticated;

  // redirect to login page
  if (authRequired && !isAuthenticated) next('/user/sign-in');
  else if (authRequired && isAuthenticated) next();
  else next();
});

export default router;
