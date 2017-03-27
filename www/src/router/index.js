import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import PublicKeeps from '@/components/PublicKeeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/public-keeps',
      name: 'PublicKeeps',
      component: PublicKeeps
    }
  ]
})
