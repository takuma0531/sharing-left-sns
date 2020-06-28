import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faGrinTongueWink,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);
library.add(faUser);
library.add(faGrinTongueWink);
library.add(faCog);

Vue.component('font-awesome-icon', FontAwesomeIcon);
