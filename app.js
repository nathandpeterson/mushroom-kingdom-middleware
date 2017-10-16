const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const errorMsg = `Error! something went wrong`

app.get('/', (req, res) => {
  res.send('Hi')
  res.json({greet: hi})
})

app.use(reg, res, next) => {
  res.status(404)
  res.type('txt').send(errorMsg)
}

const listener = () => {
  (`listening on ${port}`)
}

app.listen(port, listener)
