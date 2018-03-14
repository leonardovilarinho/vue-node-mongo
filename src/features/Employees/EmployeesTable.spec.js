import { mount, createLocalVue } from '@vue/test-utils'
import 'babel-polyfill'
import EmployeesTable from './EmployeesTable'
import iView from 'iview'
import axios from 'axios'
import Vue from 'vue'

Vue.use(iView)

describe('EmployeesTable component', () => {
  const wrapper = mount(EmployeesTable, {
    methods: {
      setList() {}
    },
    computed: {
      list() { return [] }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('list is retrivied', () => {
    expect(wrapper.vm.list.length).toBe(0)
  })

  test('has all employees columns', () => {
    expect(wrapper.vm.columns.length).toBe(4)
  })

  test('has id, name, lastname and participation columns', () => {
    expect(wrapper.vm.columns.length).toBe(4)
    expect(wrapper.vm.columns[0].key).toBe('id')
    expect(wrapper.vm.columns[1].key).toBe('name')
    expect(wrapper.vm.columns[2].key).toBe('lastname')
    expect(wrapper.vm.columns[3].key).toBe('participation')
  })


})
