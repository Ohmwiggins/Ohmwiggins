import { createRouter, createWebHistory } from 'vue-router'
import CreateComponent from '../views/CreateComponent.vue'
import ListComponent from '../views/ListComponent.vue'
import EditComponent from '../views/EditComponent.vue'
import LoginComponent from '../views/LoginComponent.vue'

//import {getAuth} from "firebace/auth"

//const routerHistory = createWebHistory()
const routes = [
    {
        path: '/',
        redirect: '/list'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/list'
    },
    {
        path: '/create',
        name: 'Create',
        component: CreateComponent,
    },
    {
        path: '/edit',
        name: 'Edit',
        component: EditComponent,
    },
    {
        path: '/list',
        name: 'List',
        component: ListComponent,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

/*
router.beforeEach((to, from, next)=>{
    const currentUser = getAuth().currentUser
    const requireAuth = t0.match.some(record => record,meta.requireAuth)
    if (requireAuth && !currentUser){
        console.log('You are not authorized to access this area')
        next('signin')
    } else if (!requireAuth && currentUser) {
        console.log('You are authorized to access this area')
        next('users')
    } else {
        next()
    }
})
*/

export default router