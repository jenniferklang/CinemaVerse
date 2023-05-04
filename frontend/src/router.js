import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import MovieView from './views/MovieView.vue'
import AdminView from './views/AdminView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AdminView,
      path: '/admin'
    },
    {
      component: MovieView,
      path: '/movie'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
