const express = require('express')
const app = express()
const port = 7777

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

const server = app.listen(port, () => {
  console.log('Server running on port:', port)
})

app.post('/', function(req, res) {
  console.log("Request", req.body)
})

module.exports = {
  app: app,
  closeServer: function () {
    console.log(`Closing server on port ${port}`)
    server.close()
  }
}
