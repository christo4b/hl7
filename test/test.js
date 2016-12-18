const assert = require('assert')
const request = require('request')
const { expect } = require('chai')
const { app, closeServer } = require('../server.js')
const hl7Class = require('../class.js')

const hl7 = new hl7Class()

// console.log(new hl7Class())
// console.log(hl7Class.parse(123))

xdescribe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

xdescribe("Server Running", function(){
  describe("GET /", function(){
    it("returns status code 200", function(done){
      request.get("http://localhost:7777/", function(err, res, body){
        if (err) console.log(err)
        assert.equal(200, res.statusCode)
        
        done()
      })
    })

    it("sends back Hello Hl7", function(done){
      request.get("http://localhost:7777/", function(err, res, body){
        if (err) console.log(err)
        assert.equal("Hello HL7", body)
        closeServer()
        done()
      })
    })    
  })
})

describe("HL7 class basic tests", function(){
  describe("checking methods", function(){
    it("hl7 class has a method parse that is a function", function(done){
      expect(hl7.parse).to.be.a('function')
      done()
    })
  })
})



