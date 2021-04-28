import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    beforeEnter: (to, from, next) => {
      if (to.name === 'Landing' && localStorage.access_token) {
        next('/shopping')
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('../views/Wishlist.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Wishlist' && !localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Cart' && !localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'History' && !localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
