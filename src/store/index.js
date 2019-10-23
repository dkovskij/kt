import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '@/class/todo'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    SET_TODO: (state, todo) => {
      state.todoList.push(todo)
    }
  },
  actions: {
    ADD_TODO: ({commit, state}, todo ) => {
      return new Promise ((resolve) => {
        // request
        let count = state.todoList.length + 1
        let date = new Date()
        let t = new Todo(count, true, date, todo)
        commit('SET_TODO', t)
        resolve()
      })
    }
  }
})
