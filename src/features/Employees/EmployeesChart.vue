<template>
  <canvas id="employeers-pie" />
</template>

<script>
import Chart from 'chart.js'
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('Employees')

export default {
  name: 'EmployeesChart',
  async mounted() {
    await this.setList()
    this.loadChart()
  },
  computed: {
    ...mapState({ originalList: 'list' }),
    employees() {
      const names = _.map(this.originalList, item => item.name)
      const participations = _.map(this.originalList, item => item.participation)
      const colors = this.getRandomColor(names.length)
      console.log(colors)

      return { labels: names, datasets: [ { data: participations, backgroundColor: colors } ] }
    }
  },
  methods: {
    ...mapActions(['setList']),
    loadChart() {
      const ctx = document.getElementById('employeers-pie').getContext('2d')

      new Chart(ctx, {
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
    },
    getRandomColor(n) {
      let result = []
      const letters = '0123456789ABCDEF'.split('')
      console.log(n)
      for (let color = 0; color <= n; color++) {
        let color = '#'
        for (let i = 0; i < 6; i++ )
          color += letters[Math.floor(Math.random() * 16)]

        result.push(color)
      }

      return result
    }
  }
}
</script>

npm install chart.js --save
