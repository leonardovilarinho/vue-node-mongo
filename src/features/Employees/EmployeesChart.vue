<template>
  <canvas id="employeers-pie" />
</template>

<script>
import Chart from 'chart.js'
import _ from 'lodash'
import { generateArrayColors } from '@/utils'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('Employees')

export default {
  name: 'EmployeesChart',
  data: () => ({
    chart: null
  }),
  async mounted() {
    await this.setList()
    this.loadChart()

    this.$bus.$on('updated-employee-list', () => {
      this.loadChart()
    })
  },
  computed: {
    ...mapState({ originalList: 'list' }),
    employees() {
      const names = _.map(this.originalList, item => item.name)
      const participations = _.map(this.originalList, item => item.participation)
      const colors = generateArrayColors(names.length)

      return { labels: names, datasets: [ { data: participations, backgroundColor: colors } ] }
    }
  },
  methods: {
    ...mapActions(['setList']),
    loadChart() {
      const ctx = document.getElementById('employeers-pie').getContext('2d')

      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.employees,
        options: {
          responsive: true,
          legend: {
            position: 'right',
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      })
    }
  }
}
</script>
