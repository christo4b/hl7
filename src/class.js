class HL7 {

  parse () {
    // const args = Array.prototype.slice.call(arguments)
    if (arguments.length === 0) throw new Error('No data passed to parse()')
    if (arguments.length > 1) throw new Error('too many arguments passed to parse()')
    if (Array.isArray(arguments[0])) throw new Error('invalid data format')
  }
}

module.exports = HL7
