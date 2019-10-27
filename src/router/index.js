import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List/List'
import EditTodo from '@/components/EditTodo/EditTodo'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: List,
    redirect: '/todos',
    props: true
  },
  {
    path: '/todos',
    component: List,
    props: true
  },
  {
    path: '/edit-todo',
    component: EditTodo,
    props: true
  }
]
