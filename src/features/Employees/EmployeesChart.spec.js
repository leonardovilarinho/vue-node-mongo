import { mount, createLocalVue } from '@vue/test-utils'
import 'babel-polyfill'
import EmployeesChart from './EmployeesChart'
import iView from 'iview'
import axios from 'axios'
import Vue from 'vue'

const instance = new Vue()
Vue.prototype.$bus = instance
Vue.use(iView)

describe('EmployeesChart component', () => {
  const wrapper = mount(EmployeesChart, {
    methods: {
      setList() {},
      loadChart() { this.chart = true }
    },
    computed: {
      originalList() {
        return []
      }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('employees are transform in datasets and labels', () => {
    expect(wrapper.vm.employees).toHaveProperty('datasets')
    expect(wrapper.vm.employees).toHaveProperty('labels')
  })

  test('chart has created', async () => {
    expect(wrapper.vm.chart).toBeTruthy()
  })

})
