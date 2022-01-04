import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import prob_system from '../components/prob_system.vue'
import prob_academic from '../components/prob_academic.vue'
import prob_response from '../components/prob_response.vue'

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
    }
]

const router = new Router ({
    routes: routes,
    mode: 'history'
})

export default router