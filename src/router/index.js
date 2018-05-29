import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fullPage from "@/components/fullPage"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fullPages',
      component: fullPage
    }
  ]
})
