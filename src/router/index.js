import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import EditTodo from '@/components/EditTodo/EditTodo'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: TodoList,
  },
  {
    path: '/edit-todo/:id',
    component: EditTodo,
    props: true
  }
]
