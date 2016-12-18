const express = require('express')
const app = express()
const port = 7777

app.get('/', function (req, res) {
  res.send('Hello HL7')
})

const server = app.listen(port, () => {
  console.log('Server running on port:', port)
})

module.exports = {
  app: app,
  closeServer: function () {
    console.log(`Closing server on port ${port}`)
    server.close()
  }
}
