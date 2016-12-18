class HL7 {

  parse () {
    const args = Array.prototype.slice.call(arguments)
    if (args.length === 0) {
      throw new Error()
    }
  }
}

module.exports = HL7
