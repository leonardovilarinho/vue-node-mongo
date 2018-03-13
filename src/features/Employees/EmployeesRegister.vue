<template>
  <Form ref="form" :model="form" :rules="rules" inline>
    <FormItem prop="name">
      <Input v-model="form.name" size="large" type="text" placeholder="Nome"/>
    </FormItem>

    <FormItem prop="lastname">
      <Input v-model="form.lastname" size="large" type="text" placeholder="Sobrenome"/>
    </FormItem>

    <FormItem prop="participation">
      <InputNumber v-model="form.participation" size="large" :min="0" :max="100"
        placeholder="Participação"/>
    </FormItem>

    <FormItem>
      <Button @click="send()" size="large" type="ghost">Enviar</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'EmployeesRegister',
  data: () => ({
    form: { name: '', lastname: '', participation: 0 },
    rules: {
      name: { required: true, message: 'Por favor, insira um nome.', trigger: 'blur' },
      lastname: { required: true, message: 'Por favor, insira um sobrenome.', trigger: 'blur' },
      participation: { required: true, message: 'Por favor, insira uma participação.', trigger: 'blur' },
    }
  }),
  methods: {
    send() {
      this.$refs.form.validate((valid) => {
        if(!valid) return this.$Message.error('Ooops, houve um erro!')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
Form
  margin-top: 10px
</style>
