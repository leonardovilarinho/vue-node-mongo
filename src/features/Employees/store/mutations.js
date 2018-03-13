export default {
  SET_LIST: (state, obj) => (state.list = obj.list),
  ADD_EMPLOYEE: (state, { employee }) => {
    employee['id'] = state.list.length + 1
    state.list.push(employee)
  }
}
