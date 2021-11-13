import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        component: () => import('../views/IndexContent.vue')
      },
      {
        path: '/search/:searchType?/:keyWord?/:type?/:city?',
        name: 'Search',
        component: () => import('../views/Search.vue'),
        props: true
      }
    ],
    meta: {
      title: 'Taiwan TourGuide'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/foodAndStay',
    name: 'FoodAndStay',
    component: () => import('../views/FoodAndStay.vue'),
    meta: {
      title: 'Taiwan TourGuide'
    }
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: () => import('../views/Traffic.vue'),
    meta: {
      title: 'Taiwan TourGuide'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
