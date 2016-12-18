const chk = (val) => val || ''

const createHL7String = (msg) => {
  return (
      `PID|${chk(msg.set_ID_pid)}|` +
      `${chk(msg.external_ID)}|` +
      `${chk(msg.internal_ID)}|` +
      `${chk(msg.alternate_patient_ID)}|` +
      `${chk(msg.patient_name)}|` +
      `${chk(msg.mothers_maiden_name)}|` +
      `${chk(msg.birth_date_time)}|` +
      `${chk(msg.sex)}|` +
      `${chk(msg.patient_alias)}|` +
      `${chk(msg.race)}|` +
      `${chk(msg.patient_address)}|` +
      `${chk(msg.county_code)}|` +
      `${chk(msg.phone_number_home)}|` +
      `${chk(msg.phone_number_business)}|` +
      `${chk(msg.primary_language)}|` +
      `${chk(msg.marital_status)}|` +
      `${chk(msg.religion)}|` +
      `${chk(msg.patient_account_number)}|` +
      `${chk(msg.ssn_number)}|` +
      `${chk(msg.drivers_license_number)}|` +
      `${chk(msg.mothers_identifier)}|` +
      `${chk(msg.ethnic_group)}|` +
      `${chk(msg.birth_place)}|` +
      `${chk(msg.multiple_birth_indicator)}|` +
      `${chk(msg.birth_order)}|` +
      `${chk(msg.citizenship)}|` +
      `${chk(msg.veterans_military_status)}|` +
      `${chk(msg.nationality)}|` +
      `${chk(msg.patient_death_date_and_time)}|` +
      `${chk(msg.patient_death_indicator)}` +
      '\n' +
      `PV1|${chk(msg.set_ID_pv1)}|` +
      `${chk(msg.patient_class)}|` +
      `${chk(msg.assigned_patient_location)}|` +
      `${chk(msg.admission_type)}|` +
      `${chk(msg.preadmit_number)}|` +
      `${chk(msg.prior_patient_location)}|` +
      `${chk(msg.attending_doctor)}|` +
      `${chk(msg.referring_doctor)}|` +
      `${chk(msg.consulting_doctor)}|` +
      `${chk(msg.hospital_service)}|` +
      `${chk(msg.temporary_location)}|` +
      `${chk(msg.preadmit_test_indicator)}|` +
      `${chk(msg.re_admission_indicator)}|` +
      `${chk(msg.admit_source)}|` +
      `${chk(msg.ambulatory_status)}|` +
      `${chk(msg.vip_indicator)}|` +
      `${chk(msg.admitting_doctor)}|` +
      `${chk(msg.patient_type)}|` +
      `${chk(msg.visit_number)}|` +
      `${chk(msg.financial_class)}|` +
      `${chk(msg.charge_price_indicator)}|` +
      `${chk(msg.visit_number)}|` +
      `${chk(msg.financial_class)}|` +
      `${chk(msg.charge_price_indicator)}|` +
      `${chk(msg.courtesy_code)}|` +
      `${chk(msg.credit_rating)}|` +
      `${chk(msg.contract_code)}|` +
      `${chk(msg.contract_effective_date)}|` +
      `${chk(msg.contract_amount)}|` +
      `${chk(msg.contract_period)}|` +
      `${chk(msg.interest_code)}|` +
      `${chk(msg.transfer_to_bad_debt_code)}|` +
      `${chk(msg.transfer_to_bad_debt_date)}|` +
      `${chk(msg.bad_debt_agency_code)}|` +
      `${chk(msg.bad_debt_transfer_amount)}|` +
      `${chk(msg.bad_debt_recovery_amount)}|` +
      `${chk(msg.delete_account_indicator)}|` +
      `${chk(msg.delete_account_date)}|` +
      `${chk(msg.discharge_disposition)}|` +
      `${chk(msg.discharged_to_location)}|` +
      `${chk(msg.diet_type)}|` +
      `${chk(msg.servicing_facility)}|` +
      `${chk(msg.bed_sta)}`
      )
}

module.exports = createHL7String
