import {createRouter, createWebHashHistory} from "vue-router";
import PageNotFound from '@/views/404.vue'
import HomePage from '@/views/Home.vue'
import WormholePage from '@/views/Wormhole3.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/wormhole',
    component: WormholePage
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound },
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes
})
export default router
