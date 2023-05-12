import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import MovieView from './views/MovieView.vue'
import AdminView from './views/AdminView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import AllMoviesView from './views/MoviesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AdminView,
      path: '/admin'
    },
    {
      component: MovieView,
      path: '/movie/:id?'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: AllMoviesView,
      path: '/movies'
    }
  ]
})
