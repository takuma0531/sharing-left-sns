import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth_module';
import post from './post_module';
import profile from './profile_module';
import utils from './utils_module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    post,
    profile,
    utils,
  },
});
