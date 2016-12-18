const assert = require('assert')
const request = require('request')
const { app, closeServer } = require('../server.js')
const hl7 = require('../class.js')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe("Server Running", function(){
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




