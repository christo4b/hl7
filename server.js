const express = require('express')
const app = express()
const port = 7777
const bodyParser = require('body-parser')
const HL7 = require('./src/class')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

const server = app.listen(port, () => {
  console.log('Server running on port:', port)
})

app.post('/', function(req, res) {
  console.log(req.body)
  const msg = new HL7()
  msg.parse(req.body)
})

module.exports = {
  app: app,
  closeServer: function () {
    console.log(`Closing server on port ${port}`)
    server.close()
  }
}
