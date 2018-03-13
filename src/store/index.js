import Vue from 'vue'
import Vuex from 'vuex'

import Employees from '@/features/Employees/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Employees },
})
