class HL7 {

  parse (msg) {
    // const args = Array.prototype.slice.call(arguments)
    if (arguments.length === 0) throw new Error('No data passed to parse()')
    if (arguments.length > 1) throw new Error('too many arguments passed to parse()')
    if (Array.isArray(arguments[0])) throw new Error('invalid data format passed to parse()')
    if (typeof arguments[0] === 'function') throw new Error('invalid data format passed to parse()')

    const { internalID, patientName } = msg
  
    if (!internalID) throw new Error('missing internalID')
    if (!patientName) throw new Error('missing patientName')

  }
}

module.exports = HL7
