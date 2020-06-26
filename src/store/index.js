import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth_module';
import utils from './utils_module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    utils,
  },
});
