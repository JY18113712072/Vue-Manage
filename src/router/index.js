import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import user from '../views/user'
import home from '../views/home'
Vue.use(Router)

const router =  new Router({
   routes:[
      {
         path: '/',
         name: 'Main',
         component: Main,
         redirect:'/home',
         children: [
            {
               path:'/home',
               name: 'home',
               component: home
            },
            {
               path: '/user',
               name: 'user',
               component: user
            },
            {
               path: '/mall',
               name: 'mall',
               component: ()=> import('../views/mall')
            },
            {
               path: '/page1',
               name: 'page1',
               component: ()=> import('../views/orther/page1')
            },
            {
               path: '/page2',
               name: 'page2',
               component: ()=> import('../views/orther/page2')
            }
         ]
      },
  
   
   ]

})


export default  router