import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
