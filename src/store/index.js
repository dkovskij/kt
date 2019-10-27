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
    },
    DELETE_TODO: (state, id) => {
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === id) {
          state.todoList.splice(i, 1)
        }
      }
    }
  },
  actions: {
    GET_TODOS: ({commit}, offset) => {
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
        let date = Date.now()
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
      let tt = Object.assign({}, todo)
      setTimeout(function () {
        db.collection('todos').doc('' + tt.id).set(tt)
      }, 200)

    },
    DELETE_TODO: ({commit}, todo) => {
      commit('DELETE_TODO', todo.id)
      db.collection('todos').doc('' + todo.id).delete()
    }
  },
  getters: {
    sortedList: state => {
      function sortList(arr) {
          return arr.sort((a, b) => a.created_at.seconds < b.created_at.seconds ? 1 : -1);
      }
      return sortList(state.todoList)
    }
  }
})
