// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VCalendar from 'v-calendar';
import semantic from 'semantic'
import JQuery from 'jquery'

import App from './App'
import router from './router'

import '../node_modules/semantic-ui-css/semantic.min.css'
import 'v-calendar/lib/v-calendar.min.css';

Vue.config.productionTip = false

// Access v-calendar, v-date-packer and v-popover components
Vue.use(VCalendar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
