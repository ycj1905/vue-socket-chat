// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import {store} from './store/store'

Vue.config.productionTip = false
// Vue.use(VueSocketio, socketio('http://localhost:3000'));
// Vue.use(VueSocketio, socketio('http://192.168.110.104:8010/gs-guide-websocket'));
Vue.use(VueSocketio, socketio('http://192.168.110.104:8080/gs-guide-websocket'));
// Vue.use(VueSocketio, socketio('http://192.168.110.104:8010'));
// Vue.use(VueSocketio, 'http://localhost:3000', store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
