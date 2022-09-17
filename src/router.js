import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Anotherme from './views/Anotherme.vue'
import Resume from './views/Resume.vue'

const originRouterPush = Router.prototype.push
Router.prototype.push = function(location){
  return originRouterPush.call(this, location).catch(err=>err)
}
Vue.use(Router)



export default new Router({
  mode: 'history',
  
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/anotherme',
      name:'anotherme',
      component: Anotherme
    },
    {
      path:'/resume',
      name:'resume',
      component: Resume
    }
    
  ]
})