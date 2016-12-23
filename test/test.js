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

xdescribe("Server Running", function () {
  describe("GET /", function () {
    it("returns status code 200", function (done) {
      request.get("http://localhost:7777/", function (err, res, body) {
        if (err) console.log(err)
        assert.equal(200, res.statusCode)
        
        done()
      })
    })

    it("sends back Hello Hl7", function (done) {
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
        console.log("i", i)
        assert.equal(createHL7String(testData[i]), sampleStrings[i])
      })
      done()
    })

  })
})




