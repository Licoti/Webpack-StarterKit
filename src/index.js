import * as bootstrap from 'bootstrap';

// Test import of styles
import '@/styles/index.scss'

import(/* webpackChunkName: "js/base" */ './js/base.js').then(home => {
  home.initHome();
});
