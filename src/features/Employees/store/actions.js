import axios from 'axios'
import _ from 'lodash'

export default {
  setList: async ({ commit }, obj) => {
    const response = (await axios.get('http://localhost:3000/employees')).data.employees || []

    let id = 0
    const list = _.map(response, item => {
      const { name, lastname, participation } = item
      id ++
      return { id, name, lastname, participation }
    })

    commit('SET_LIST', { list })
  },
  addEmployee: async ({ commit }, employee) => {
    const response = await axios.post('http://localhost:3000/employees', employee)

    commit('ADD_EMPLOYEE', { employee })
  }
}
