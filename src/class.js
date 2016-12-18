class HL7 {

  parse (msg) {
    validateInput(msg)
    // const { set_ID, external_ID, internal_ID, alternate_patient_ID, patient_name, mothers_maiden_name, birth_date_time, sex, patient_alias, race, patient_address, county_code, phone_number_home, phone_number_business, primary_language, marital_status, religion, patient_account_number, ssn_number, drivers_license_number, mothers_identifier, ethnic_group, birth_place, multiple_birth_indicator, birth_order, citizenship, veterans_military_status, nationality, patient_death_date_and_time, patient_death_indicator } = msg
    console.log(`PID|${msg.set_ID_pid || ''}|${msg.external_ID || ''}|${msg.internal_ID || ''}|${msg.alternate_patient_ID || ''}|${msg.patient_name || ''}|${msg.mothers_maiden_name || ''}|${msg.birth_date_time || ''}|${msg.sex || ''}|${msg.patient_alias || ''}|${msg.race || ''}|${msg.patient_address || ''}|${msg.county_code || ''}|${msg.phone_number_home || ''}|${msg.phone_number_business || ''}|${msg.primary_language || ''}|${msg.marital_status || ''}|${msg.religion || ''}|${msg.patient_account_number || ''}|${msg.ssn_number || ''}|${msg.drivers_license_number || ''}|${msg.mothers_identifier || ''}|${msg.ethnic_group || ''}|${msg.birth_place || ''}|${msg.multiple_birth_indicator || ''}|${msg.birth_order || ''}|${msg.citizenship || ''}|${msg.veterans_military_status || ''}|${msg.nationality || ''}|${msg.patient_death_date_and_time || ''}|${msg.patient_death_indicator || ''}
PV1|${msg.set_ID_pv1 || ''}|${msg.patient_class || ''}|${msg.assigned_patient_location || ''}|${msg.admission_type || ''}|${msg.preadmit_number || ''}|${msg.prior_patient_location || ''}|${msg.attending_doctor || ''}|${msg.referring_doctor || ''}|${msg.consulting_doctor || ''}|${msg.hospital_service || ''}|${msg.temporary_location || ''}|${msg.preadmit_test_indicator || ''}|${msg.re_admission_indicator || ''}|${msg.admit_source || ''}|${msg.ambulatory_status || ''}|${msg.vip_indicator || ''}|${msg.admitting_doctor || ''}|${msg.patient_type || ''}|${msg.visit_number || ''}|${msg.financial_class || ''}|${msg.charge_price_indicator || ''}`)
  }
}

const validateInput = function (msg) {
  if (arguments.length === 0) throw new Error('No data passed to parse()')
  if (arguments.length > 1) throw new Error('too many arguments passed to parse()')
  if (Array.isArray(arguments[0])) throw new Error('invalid data format passed to parse()')
  if (typeof arguments[0] === 'function') throw new Error('invalid data format passed to parse()')
  if (!msg.internal_ID) throw new Error('missing internal_ID')
  if (!msg.patient_name) throw new Error('missing patient_name')
}

module.exports = HL7

