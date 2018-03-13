import axios from 'axios'
import _ from 'lodash'

const baseURL = 'http://localhost:3000'

export default {
  setList: async ({ commit }, obj) => {
    const response = (await axios.get(`${baseURL}/employees`)).data.employees || []

    let id = 0
    const list = _.map(response, item => {
      const { name, lastname, participation } = item
      id ++
      return { id, name, lastname, participation }
    })

    commit('SET_LIST', { list })
  },
  addEmployee: async ({ commit }, employee) => {
    const response = await axios.post(`${baseURL}/employees`, employee)

    commit('ADD_EMPLOYEE', { employee })
  }
}
