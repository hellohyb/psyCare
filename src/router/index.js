import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/visitor',
            name:'visitor',
            component:() => import('../views/Visitor.vue')
        },
        {
            path:'/consultant',
            name:'consultant',
            component:() => import('../views/Consulate.vue')
        },
        
    ]
})
export default router