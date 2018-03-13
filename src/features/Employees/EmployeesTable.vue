<template>
  <Table :columns="columns" :data="list" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('Employees')

export default {
  name: 'EmployeesTable',
  data: () => ({
    columns: [
      {title: '', key: 'id'},
      {title: 'Nome', key: 'name'},
      {title: 'Sobrenome', key: 'lastname'},
      {title: 'Participação', key: 'participation'},
    ]
  }),
  mounted() {
    this.setList()
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions({setList: 'setList'})
  }
}
</script>
