import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/pages/CartPage'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})

const getCookie = (name, path) => {
  var m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  return !m ? '' : unescape(m[2])
}

router.beforeEach((to, from, next) => {
  console.log(getCookie('username'))
  next()
})

export default router
