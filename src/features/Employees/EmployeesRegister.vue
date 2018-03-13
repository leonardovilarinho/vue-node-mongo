<template>
  <Form ref="form" :model="form" :rules="rules" inline>
    <FormItem prop="name">
      <Input v-model="form.name" size="large" type="text" placeholder="Nome"/>
    </FormItem>

    <FormItem prop="lastname">
      <Input v-model="form.lastname" size="large" type="text" placeholder="Sobrenome"/>
    </FormItem>

    <FormItem prop="participation">
      <InputNumber v-model="form.participation" size="large" :min="0" :max="100"/>
    </FormItem>

    <FormItem>
      <Button @click="send()" :disabled="loading" size="large" type="ghost">Enviar</Button>
    </FormItem>

    <FormItem>
      <Spin v-if="loading"></Spin>
    </FormItem>
  </Form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('Employees')

export default {
  name: 'EmployeesRegister',
  data: () => ({
    loading: false,
    form: { name: '', lastname: '', participation: 0 },
    rules: {
      name: { required: true, message: 'Por favor, insira um nome.' },
      lastname: { required: true, message: 'Por favor, insira um sobrenome.' },
      participation: { required: true, message: 'Por favor, insira uma participação.', type: 'number'},
    }
  }),
  methods: {
    ...mapActions(['addEmployee']),
    send() {
      this.$refs.form.validate(async (valid) => {
        if(!valid) return this.$Message.error('Ooops, houve um erro!')

        this.loading = true
        try {
          await this.addEmployee(this.form)
          this.$Message.success('Funcionário criado com sucesso!')
          this.$bus.$emit('updated-employee-list')
          this.form = { name: '', lastname: '', participation: 0 }
        } catch (error) {
          this.$Message.error(error.response.data.error)
        }

        this.loading = false
      })
    }
  }
}
</script>

<style lang="sass" scoped>
Form
  margin-top: 10px
</style>
