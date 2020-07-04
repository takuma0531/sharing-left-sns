import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import { GET_USER, AUTHENTICATE_USER } from '../store/types/actions.type';
import {
  Explore,
  SignIn,
  SignUp,
  Home,
  Profile,
  Setting,
  SettingHome,
  SettingAccountDelete,
} from '../views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
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
  {
    path: '/setting/:nickname',
    component: Setting,
    children: [
      {
        path: '',
        name: 'SettingHome',
        component: SettingHome,
      },
      {
        path: 'account/delete',
        name: 'SettingAccountDelete',
        component: SettingAccountDelete,
      },
    ],
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
  else if (authRequired && isAuthenticated) {
    store.dispatch(GET_USER);
    next();
  } else next();
});

export default router;
