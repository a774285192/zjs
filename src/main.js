import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Shouy from 'vue-resource'
Vue.use(Shouy)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
