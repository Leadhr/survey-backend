const express = require('express')
const router = express.Router()
const Responses = require('../models/responses')

//Getting all
// router.get('/', async (req, res) => {
//   try {
//     const question = await Question.find()
//     res.json(question)
//   } catch (err) {
//     res.status(500).json({message: err.message})
//   }
// })
// Getting one
router.get('/:id', getResponse, (req, res) => {
  res.json(res.response)
})
//Creating one
router.post('/', async (req, res) => {
  const response = new Responses({
    answers: req.body.answers,
  })
  try {
    const newResponse = await response.save()
    res.status(201).json(newResponse)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
//Updating one
router.patch('/:id', getResponse, async (req, res) => {
  if (req.body.answers != null) {
    res.response.answers = req.body.answers
  }
  try {
    const updatedResponse = await res.response.save()
    res.json(updatedResponse)
  } catch {
    res.status(400).json({message: err.message})
  }
})
// //Deleting one
// router.delete('/:id', getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove()
//     res.json({ message: 'Deleted Subscriber'})
//   } catch (err) {
//     res.status(500).json({ message: err.message})
//   }
// })

async function getResponse(req, res, next) {
  let response
  try {
    response = await Responses.findById(req.params.id)
    if (response == null) {
      return res.status(404).json({message: 'Cannot find response'})
    }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }

  res.response = response
  next()

}

module.exports = router