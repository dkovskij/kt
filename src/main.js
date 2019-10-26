import Vue from 'vue'
import App from './App.vue'
import {store} from '@/store/index.js'
// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
firebase.initializeApp({
 projectId: 'kt-proj',
 databaseURL: 'https://kt-proj.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
