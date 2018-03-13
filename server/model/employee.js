const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório não pode conter números."],
    validate: {
      validator: value => !/\d/.test(value),
      message: "Por favor, preencha um nome sem números!"
    }
  },

  lastname: {
    type: String,
    required: [true, "O sobrenome é obrigatório não pode conter números."],
    validate: {
      validator: value => !/\d/.test(value),
      message: "Por favor, preencha um sobrenome sem números!"
    }
  },

  participation: {
    type: Number,
    required: [true, "A participação é obrigatória e deve ser de 0 á 100."],
    validate: {
      validator: value => value >= 0 && value <= 100,
      message: "Por favor, preencha uma participação entre 0 e 100!"
    }
  }
})

module.exports = mongoose.model("Employee", schema)
