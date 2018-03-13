<template>
  <Layout>
    <SiteHeader />

    <Content>
      <Row>
        <SiteDescription />
      </Row>

      <Row>
        <Col :md="12" :sm="24">
          <EmployeesTable :style="{margin: '20px'}" />
        </Col>

        <Col :md="12" :sm="24">
          <EmployeesChart :style="{padding: '30px'}" />
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

</style>
