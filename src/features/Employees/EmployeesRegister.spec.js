import { mount, createLocalVue } from '@vue/test-utils'
import 'babel-polyfill'
import EmployeesRegister from './EmployeesRegister'
import iView from 'iview'
import axios from 'axios'
import Vue from 'vue'

Vue.use(iView)

describe('EmployeesRegister component', () => {
  const wrapper = mount(EmployeesRegister, {
    methods: {
      send() {
        this.loading = true
      }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('form default empty', () => {
    const { name, lastname, participation } = wrapper.vm.form

    expect(name).toBe('')
    expect(lastname).toBe('')
    expect(participation).toBe(0)
  })

  test('component withour loading default', () => {
    expect(wrapper.vm.loading).toBeFalsy()
  })

  test('has rule for each input', () => {
    const rules = wrapper.vm.rules

    expect(rules).toHaveProperty('name')
    expect(rules).toHaveProperty('lastname')
    expect(rules).toHaveProperty('participation')
  })

  test('button call send method', () => {
    const sendButton = wrapper.find('button')
    sendButton.trigger('click')

    expect(wrapper.vm.loading).toBeTruthy()
  })

})
