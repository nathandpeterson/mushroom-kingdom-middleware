const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const nodemon = require('nodemon')
const port = process.env.PORT || 3000
const errorMsg = `Error! something went wrong`

app.disable('x-powered-by')
app.use(morgan('dev'))

const party = [
  {id: 1, name: "Mario"},
  {id: 2, name: "Luigi"},
  {id: 3, name: "Yoshi"}
]

app.get('/party', (req, res, next) => {
  res.json(party)
})

app.get('/party/:id', (req, res, next) => {
  console.log(req.params.id)
  let request = Number(req.params.id)
  const result = party.find(partier => partier.id === request)
  res.json({result})
})

app.get('/ping', (req, res) => {
  throw Error('!!!!')
  res.json({message: 'pong'})
})

app.use('/hello', (req, res, next) => {
  console.log(`I am middleware!`)
  next()
})

app.get('/hello/friend', (req, res) => {
  res.json({message: `I am your 'friend'`})
})

app.get('/hello/:name', (req, res) => {
  let name = req.params.name
  console.log(req.params.name)
  res.json({message: `----Hello-----${name}-----!`})
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: {message: 'Something went wrong!'}})
})

app.use((err, req, res, next) => {
  console.log(err)
})

const listener = () => {
  console.log(`listening on ${port}`)
}

app.listen(port, listener)
