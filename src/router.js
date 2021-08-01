import Vue from 'vue';
import Router from 'vue-router';
import dashview from './components/DashBoard.vue'
import about from './components/Content/About.vue'
Vue.use(Router)
const routes = [
 
    {
        path: '/',
        components: {
            default: dashview,
        },
        children: [
            {
                path: '/about',
                component: about,
            },
             
            
        ]
    },
] 
export default new Router({
   routes: routes
})