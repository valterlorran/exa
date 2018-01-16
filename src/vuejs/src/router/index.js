import Vue from 'vue'
import Router from 'vue-router'
import Requests from '@/components/Requests'
import Request from '@/components/Request'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Requests',
		component: Requests
    },
    {
		path: '/request/:id',
		name: 'Request',
		component: Request
    }
  ]
})
