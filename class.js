class hl7 {

  parse(mrn){
    return `PID : ${ mrn } ` 
  }

}

var newMessage = new hl7()
newMessage.parse(1235)

module.exports = {
  class: hl7
}