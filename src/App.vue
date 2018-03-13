<template>
  <Layout>
    <SiteHeader />

    <Content>
      <Row>
        <SiteDescription />
      </Row>

      <Row class="divide">
        <Col span="12">
          <EmployeesTable />
        </Col>

        <Col span="12">
          <EmployeesChart />
        </Col>
      </Row>
    </Content>
  </Layout>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteDescription from '@/components/SiteDescription.vue'

import EmployeesTable from '@/features/Employees/EmployeesTable.vue'
import EmployeesChart from '@/features/Employees/EmployeesChart.vue'

export default {
  name: 'app',
  components: { SiteDescription, SiteHeader, EmployeesTable, EmployeesChart }
}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  background-color: #F5F7F9

.divide
  text-align: center

  > Col
    padding: 10px 20px
    text-align: center
</style>
