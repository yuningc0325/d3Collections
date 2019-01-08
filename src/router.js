import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Barchart1 from './views/Barchart1.vue'
import Gapminder from './views/Gapminder.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'home',
      component: Home
    },
    {
      path: '/barchart1',
      name: 'barchart1',
      component: Barchart1
    },
    {
      path:'/gapminder',
      name:'gapminder',
      component:Gapminder
    }
  ]
})
