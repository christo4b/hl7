class HL7 {

  parse (mrn) {
    return `PID : ${ mrn } `
  }
}

module.exports = HL7
