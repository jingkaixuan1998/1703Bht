import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ab from '@/components/A'
import Bb from '@/components/B'
import Cb from '@/components/C'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    }, {
      path: '/home',
      component: HelloWorld,
      children: [{
        path: '/home/a',
        component: Ab
      }, {
        path: '/home/b',
        component: Bb
      }, {
        path: '/home/c',
        component: Cb
      }]
    }
  ]
})
