import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import Item from './pages/_itemAlias'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/404',
      name: 'not found',
      component: NotFoundPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },

    {
      path: '/:CatchAll(.*)',
      redirect: '404'
    }
  ]
})

export default routers
