import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faWallet,
  faCog,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);
library.add(faUser);
library.add(faWallet);
library.add(faCog);
library.add(faImage);

Vue.component('font-awesome-icon', FontAwesomeIcon);
