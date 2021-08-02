import Vue from 'vue';
import Router from 'vue-router';
import dashview from './components/DashBoard.vue'
import home from './components/Home.vue'
import about from './components/Content/About.vue'

import register from './components/Content/register.vue'
Vue.use(Router)
const routes = [
 
    {
        path: '/home',
        component: home,
        name: 'home',

    },{
        path: '/',
        components: {
            default: dashview,
        },
        children: [
            {
                path: '/about',
                component: about,
            },
            {
                path: '/register',
                component: register,
            },
             
            
        ]
    },
] 
export default new Router({
   routes: routes
})