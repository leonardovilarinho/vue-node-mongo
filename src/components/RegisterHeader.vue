<template>
  <Row class="register-header">
    <h1>Cadastre-se</h1>
    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>

    <Form ref="form" :model="form" :rules="rules" inline>
      <FormItem prop="name">
        <Input v-model="form.name" size="large" type="text" placeholder="Nome"/>
      </FormItem>

      <FormItem prop="lastname">
        <Input v-model="form.lastname" size="large" type="text" placeholder="Sobrenome"/>
      </FormItem>

      <FormItem prop="participation">
        <Input v-model="form.participation" size="large" min="0" max="100"
          type="number" placeholder="Participação"/>
      </FormItem>

      <FormItem>
        <Button @click="send()" size="large" type="ghost">Enviar</Button>
      </FormItem>
    </Form>
  </Row>
</template>

<script>
export default {
  name: 'RegisterHeader',
  data: () => ({
    form: { name: '', lastname: '', participation: '' },
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
.register-header
  width: 100%
  padding: 3% 20%
  background-color: #00B8E2
  color: #fff
  text-align: center

Form
  margin-top: 10px

h1
  margin: 0
  text-transform: uppercase


</style>
