import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List/List'

Vue.use(Router)

export const routes = [{
    path: '/'
  },
  {
    path: '/todos',
    component: List
  }
]
