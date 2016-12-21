const validateInput = function (msg) {
  if (arguments.length === 0) throw new Error('No data passed to parse()')
  if (arguments.length > 1) throw new Error('too many arguments passed to parse()')
  if (Array.isArray(arguments[0])) throw new Error('invalid data format passed to parse()')
  if (typeof arguments[0] === 'function') throw new Error('invalid data format passed to parse()')
  if (!msg.internal_ID) throw new Error('missing internal_ID')
  if (!msg.patient_name) throw new Error('missing patient_name')
  if (!msg.patient_class) throw new Error('missing patient_class')    
}

module.exports = validateInput
