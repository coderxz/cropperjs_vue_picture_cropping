import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import UploadImage from '../components/UploadImage.vue'
Vue.use(Router)
const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/uploadImage',
    name: 'uploadImage',
    component: UploadImage
  }
]
export default new Router({
  routes
})