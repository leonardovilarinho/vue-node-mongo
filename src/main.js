import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import lang from 'iview/dist/locale/pt-BR'
import App from '@/App.vue'
import store from '@/store'

iView.locale(lang)
Vue.use(iView)

const instance = new Vue()
Vue.prototype.$bus = instance

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
