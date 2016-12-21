const express = require('express')
const app = express()
const port = 7777
const bodyParser = require('body-parser')
const HL7 = require('./src/class')
const { concatName } = require('./src/helpers')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

const server = app.listen(port, () => {
  console.log('Server running on port:', port)
})

app.post('/', function(req, res) {
  const msg = new HL7()
  req.body.patient_name = concatName(req.body.patient_last_name, req.body.patient_first_name)
  const newMsg = msg.parse(req.body)
  console.log(newMsg)
})

module.exports = {
  app: app,
  closeServer: function () {
    console.log(`Closing server on port ${port}`)
    server.close()
  }
}
