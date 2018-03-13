<template>
  <Form ref="form" :model="form" :rules="rules" inline>
    <FormItem prop="name">
      <Input v-model="form.name" size="large" type="text" placeholder="Nome"/>
    </FormItem>

    <FormItem prop="lastname">
      <Input v-model="form.lastname" size="large" type="text" placeholder="Sobrenome"/>
    </FormItem>

    <FormItem prop="participation">
      <Input v-model="form.participation" size="large" type="text"
        placeholder="Participação"/>
    </FormItem>

    <FormItem>
      <Button @click="send()" size="large" type="ghost">Enviar</Button>
    </FormItem>
  </Form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('Employees')

export default {
  name: 'EmployeesRegister',
  data: () => ({
    form: { name: '', lastname: '', participation: 0 },
    rules: {
      name: { required: true, message: 'Por favor, insira um nome.', trigger: 'blur' },
      lastname: { required: true, message: 'Por favor, insira um sobrenome.', trigger: 'blur' },
      participation: { required: true, message: 'Por favor, insira uma participação.', trigger: 'blur', min: 0, max: 100 },
    }
  }),
  methods: {
    ...mapActions(['addEmployee']),
    send() {
      this.$refs.form.validate(async (valid) => {
        if(!valid) return this.$Message.error('Ooops, houve um erro!')

        try {
          await this.addEmployee(this.form)
          this.$Message.success('Funcionário criado com sucesso!')
          this.form = { name: '', lastname: '', participation: 0 }
        } catch (error) {
          this.$Message.error(error.response.data.error)
        }

      })
    }
  }
}
</script>

<style lang="sass" scoped>
Form
  margin-top: 10px
</style>
