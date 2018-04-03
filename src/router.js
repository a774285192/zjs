import Vue from 'vue'
import Router from 'vue-router'
import Shouy from './views/Shouy.vue'
import About from './views/About.vue'
import Erji from  './views/Erji.vue'
import Quanx from  './views/Quanx.vue'

import Dongt from "./views/Dongt.vue"
import Lianx from './views/Lianx.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Shouy
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {path: '/erji',
      name: 'about',
      component: Erji}
    ,
    {path: '/quanx',
      name: 'about',
      component: Quanx}
    ,
    {path: '/dongt',
      name: 'about',
      component: Dongt}
    ,
    {path: '/lianx',
      name: 'about',
      component: Lianx}
  ]
})
