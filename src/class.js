const createHL7String = require('./message')
const validateInput = require('./validate')

class HL7 {
  parse (msg) {
    validateInput(msg)
    return createHL7String(msg)
  }
}

module.exports = HL7
