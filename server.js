require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected to Database'))

app.use(express.json())

const questionsRouter = require('./routes/questions')
app.use('/questions', questionsRouter)

const responsesRouter = require('./routes/responses')
app.use('/responses', responsesRouter)

app.listen(3001, () => console.log('Server Started'))