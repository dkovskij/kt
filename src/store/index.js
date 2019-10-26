import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '@/class/todo'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    inputText: ''
  },
  mutations: {
    SET_TODO: (state, todo) => {
      state.todoList.push(todo)
    },
    SET_INPUT_TEXT: (state, text) => {
      Vue.set(state, 'inputText', text)
    },
    SET_COMPLETED: (state, id) => {
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === id) {
          Vue.set(state.todoList[i], 'completed', true)
        }
      }
    }
  },
  actions: {
    ADD_TODO: ({commit, state}, text ) => {
      return new Promise ((resolve) => {
        // request
        let count = state.todoList.length + 1
        let date = new Date()
        let t = new Todo(count, false, date, text)
        commit('SET_TODO', t)
        resolve()
      })
    },
    SET_INPUT_TEXT: ({commit}, text) => {
      commit('SET_INPUT_TEXT', text)
    },
    SET_COMPLETED: ({commit}, id) => {
      commit('SET_COMPLETED', id)
      // request
    }
  }
})
