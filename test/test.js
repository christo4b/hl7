const assert = require('assert')
const request = require('request')
const { expect } = require('chai')
const { app, closeServer } = require('../server.js')
const hl7Class = require('../src/class.js')
const testData = require('./testData.js')
const sampleStrings = require('./sampleStrings.js')
const { concatName } = require('../src/helpers.js')
const { createHL7String, chk } = require('../src/message.js')

const hl7 = new hl7Class()

describe("Server Running", function () {
  describe("GET /", function () {
    it("returns status code 200", function (done) {
      request.get("http://localhost:7777/", function (err, res, body) {
        if (err) console.log(err)
        assert.equal(200, res.statusCode)
        
        done()
      })
    })
    // this test is only useful if we're not serving an html page
    xit("sends back Hello Hl7", function (done) {
      request.get("http://localhost:7777/", function (err, res, body) {
        if (err) console.log(err)
        assert.equal("Hello HL7", body)
        closeServer()
        done()
      })
    })    
  })
})

describe("HL7 class", function(){

  describe("Parse function", function (){
    it("method parse is a function", function(done){
      expect(hl7.parse).to.be.a('function')
      done()
    })

    it("throws an error if not given any data", function(done){
      expect(()=>hl7.parse()).to.throw(Error)
      done()
    })

    it("accepts only one argument", function(done) {
      expect(()=> hl7.parse({}).to.not.throw(Error))
      expect(()=> hl7.parse({},'secondArg').to.throw(Error))
      done()
    })

    it("does not accept an Array or a function", function(done){
      const taco = function(){};
      expect(()=> hl7.parse({}).to.not.throw(Error))
      expect(()=> hl7.parse([]).to.throw(Error))
      expect(()=> hl7.parse(taco).to.throw(Error))
      done()
    })

    describe("Checks to make sure we have required items", function(){
      // This test should be split into different tests for each required item
      // but for brevity they're all wrapped into one here
      testData.forEach(function(msg){
        it("checks for patient ID, patient Name, patient Class", function(done){
          expect(()=> hl7.parse(msg)).to.not.throw(Error)
          expect(()=> hl7.parse({failing: 23423})).to.throw(Error)
          done()
        })
      })

    })
  })
})

describe("Helper functions", function(){
  describe("createHL7String", function(){
    it("should produce correct string", function(done){
      testData.forEach(function(msg, i){
        assert.equal(createHL7String(testData[i]), sampleStrings[i])
      })
      done()
    })
  })
  describe("chk function", function(){
    const msg = {
      patient_name: "OBAMA^TESTPATIENT",
      internal_ID: 8882222,
      ssn_number: 098823333,
      citizenship: "null",
      birth_order: null,
      nationality: undefined,
      phone_number_home: NaN
    }
    it("returns the value when one is provided", function(done){
      assert.equal(chk(msg.patient_name), "OBAMA^TESTPATIENT")
      assert.equal(chk(msg.internal_ID), 8882222)
      assert.equal(chk(msg.citizenship), "null")
      done()
    })
    it("returns an empty string when a value is not provided", function(done){
      assert.equal(chk(msg.external_ID), '')
      assert.equal(chk(msg.birth_order), '')
      assert.equal(chk(msg.nationality), '')
      assert.equal(chk(msg.phone_number_home), '')
      done()
    })
  })
  describe("concatName", function(){
    const data = {
      first: "BARACK",
      last: "OBAMA"
    }
    it("concatenates a first and last name", function(done){
      expect(()=> concatName(data.last, data.first).to.not.throw(Error))
      assert.equal(concatName(data.last, data.first), "OBAMA^BARACK")
      done()
    })
    it("throws an error if passed falsey values", function(done){
      expect(()=> concatName(undefined, data.first).to.throw(Error))
      expect(()=> concatName(data.last, null).to.throw(Error))
      expect(()=> concatName(data.last, NaN).to.throw(Error))
      expect(()=> concatName(data.last, '').to.throw(Error))
      done()
    })
    it("throws an error if missing parameters", function(done){
      expect(()=> concatName(undefined).to.throw(Error))
      expect(()=> concatName("george").to.throw(Error))
      done()
    })

  })
})




