/*eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '@/class/todo'
import {db} from '@/main'
import {firestore} from 'firebase/firestore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    inputText: ''
  },
  mutations: {
    SET_TODOS: (state, todos) => {
      Vue.set(state, 'todoList', todos)
    },
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
    GET_TODOS: ({commit}) => {
      return new Promise((resolve, reject) => {
        let todos = []
        db.collection('todos')
          .get()
          .then(r => {
            const todos = r.docs.map(doc => doc.data())
            commit('SET_TODOS', todos)
            resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    ADD_TODO: ({commit, state}, text ) => {
      return new Promise ((resolve) => {
        let count = state.todoList.length + 1
        let date = new Date()
        let t = new Todo(count, false, date, text)
        let tt = Object.assign({}, t)
        db.collection('todos').doc('' + count).set(tt)

        commit('SET_TODO', t)
        resolve()
      })
    },
    SET_INPUT_TEXT: ({commit}, text) => {
      commit('SET_INPUT_TEXT', text)
    },
    SET_COMPLETED: ({commit}, todo) => {
      commit('SET_COMPLETED', todo.id)
      db.collection('todos').doc('' + todo.id).set(todo)

    }
  }
})
