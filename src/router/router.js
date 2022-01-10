import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import prob_system from '../components/prob_system.vue'
import prob_academic from '../components/prob_academic.vue'
import prob_response from '../components/prob_response.vue'
import subpage from '../components/subpage.vue'
import ConfirmationPage from '../components/ConfirmationPage.vue'
import FinalPage from '../components/FinalPage.vue'
import DataPage from '../components/DataPage.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/problem_system',
        name: 'prob_system',
        component: prob_system
    },
    {
        path: '/problem_academic',
        name: 'prob_academic',
        component: prob_academic
    },
    {
        path: '/problem_response',
        name: 'prob_response',
        component: prob_response
    },
    {
        path: '/subpage',
        name: 'subpage',
        component: subpage
    },
    {
        path: '/confirmation',
        name: 'ConfirmationPage',
        component: ConfirmationPage
    },
    {
        path: '/finalpage',
        name: 'FinalPage',
        component: FinalPage
    },
    {
        path: '/datapage',
        name: 'DataPage',
        component: DataPage
    }
]

const router = new Router ({
    routes: routes,
    mode: 'history'
})

export default router