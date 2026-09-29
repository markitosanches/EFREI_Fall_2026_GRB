import {createRouter, createWebHistory, routerKey } from 'vue-router'

// import Welcome from '../components/HelloWorld.vue'
import Home from '../views/Home.vue'

const routes = [
//  {path: '/welcome', name:'welcome', component: Welcome},
 {path: '/', name:'home', component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router