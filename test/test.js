const assert = require('assert')
const request = require('request')
const { expect } = require('chai')
const { app, closeServer } = require('../server.js')
const hl7Class = require('../src/class.js')

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
  // tests to see if class has props such as | ^ & (the delimiters)
  // xdescribe("contains helper properties", function(){
  //   it("contains helper strings for creating HL7 strings", function(done){
      
  //     done()
  //   })
  // })

  describe("checks for existence of helper functions", function(){
    it("instance has a method parse that is a function", function(done){
      expect(hl7.parse).to.be.a('function')
      done()
    })
  })

})

describe("parse function", function (){

  it("throws an error if not given any data", function(done){
    expect(function(){
      hl7.parse()
    }).to.throw(Error)
    done()
  })



}) 


