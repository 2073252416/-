import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Teacher from './views/Teacher.vue'
import Epm from './views/Epm.vue'
import SingleElection from './views/SingleElection.vue'
import MultiplesElection from './views/MultiplesElection.vue'
import GapFilling from './views/GapFilling.vue'
import Shortanswer from './views/Shortanswer.vue'

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
      path:'/Teacher',
      name:'Teacher',
      component:Teacher
    },
    {
      path:'/SingleElection',
      name:'SingleElection',
      component:SingleElection
    },
    {
      path:'/MultiplesElection',
      name:'MultiplesElection',
      component:MultiplesElection
    },
    {
      path:'/GapFilling',
      name:'GapFilling',
      component:GapFilling
    },
    {
      path:'/Shortanswer',
      name:'Shortanswer',
      component:Shortanswer
    },
    {
      path: '/Student',
      name: 'Student',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Student.vue')
    },
    {
      path:'/Epm',
      name:'Epm',
      component:Epm
    }
  ]
})
