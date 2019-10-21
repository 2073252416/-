import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Epm from './views/Epm.vue'
import SingleElection from './views/SingleElection.vue'
import MultiplesElection from './views/MultiplesElection.vue'
import GapFilling from './views/GapFilling.vue'
import Shortanswer from './views/Shortanswer.vue'
import Marking from './views/Marking.vue'
import Notread from './views/Notread.vue'
import Randomgeneration from './views/Randomgeneration.vue'
import Manualmarking from './views/Manualmarking.vue'
import StudentLogin from './views/StudentLogin.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/SingleElection',
            name: 'SingleElection',
            component: SingleElection
        },
        {
            path: '/MultiplesElection',
            name: 'MultiplesElection',
            component: MultiplesElection
        },
        {
            path: '/GapFilling',
            name: 'GapFilling',
            component: GapFilling
        },
        {
            path: '/Shortanswer',
            name: 'Shortanswer',
            component: Shortanswer
        },
        {
            path: '/Epm',
            name: 'Epm',
            component: Epm
        },
        {
            path: '/Marking',
            name: 'Marking',
            component: Marking
        },
        {
            path: '/Notread',
            name: 'Notread',
            component: Notread
        },
        {
            path: '/Randomgeneration',
            name: 'Randomgeneration',
            component: Randomgeneration
        },
        {
            path: '/Manualmarking',
            name: 'Manualmarking',
            component: Manualmarking
        },
        
    {
        path: '/StudentLogin',
        name: 'StudentLogin',
        component: StudentLogin
      }
    ]
})