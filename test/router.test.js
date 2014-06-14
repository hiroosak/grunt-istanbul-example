
var assert = require("assert")
var req = {};
var res = {};

var requireHelper = require('./require_helper');
var router = requireHelper('routes/');

describe('router', function(){
  var req, res;

  beforeEach(function() {
    req = {};
    res = {};
  });

  describe('index', function(){
    it('should display title', function(done){
      res.render = function(viewPath) {
        assert.equal(viewPath, 'index');
        done();
      };
      router.handle({url: "/", method: "GET"}, res);
    })
  })
})
