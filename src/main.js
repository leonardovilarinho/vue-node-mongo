import Vue from 'vue'
import iView from "iview"
import "iview/dist/styles/iview.css"
import App from '@/App.vue'
import store from '@/store'

Vue.use(iView)

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
