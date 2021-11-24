import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCookie from 'vue-cookie'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/stylesheets/base.css'
import 'font-awesome/css/font-awesome.css'
import axios from '../http.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(vueCookie)
Vue.config.productionTip = false
Vue.prototype.$http = axios

// router.beforeEach((to, from, next) => {
//   if (to.path == '/homepage/singin' || to.path == '/homepage/login') {
//     next();
//   } else if (!window.localStorage.getItem('tokenlo')) {
//     next('/homepage/login');
//   } else {
//     next();
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')