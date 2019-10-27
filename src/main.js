import Vue from 'vue'
import App from './App.vue'
import {store} from '@/store/index.js'
// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import {routes} from '@/router'

Vue.use(VueRouter)

Vue.use(firestorePlugin)
firebase.initializeApp({
 projectId: 'kt-proj',
 databaseURL: 'https://kt-proj.firebaseio.com'
})
export const db = firebase.firestore()

const router = new VueRouter({ routes: routes });

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
