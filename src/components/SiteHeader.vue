<template>
  <Row class="register-header">
    <h1>Cadastre-se</h1>
    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>

    <EmployeesRegister />
  </Row>
</template>

<script>
import EmployeesRegister from '@/features/Employees/EmployeesRegister.vue'

export default {
  name: 'SiteHeader',
  components: { EmployeesRegister }
}
</script>

<style lang="sass" scoped>
.register-header
  width: 100%
  padding: 3% 20%
  background-color: #00B8E2
  color: #fff
  text-align: center

h1
  margin: 0
  text-transform: uppercase
</style>
