const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  answers: {
    type: Array
  }
})

module.exports = mongoose.model('Answers', answerSchema)