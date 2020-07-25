const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  answers: {
    type: Array
  }
})

module.exports = mongoose.model('Responses', responseSchema)