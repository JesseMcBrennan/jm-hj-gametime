const chai = require('chai');
const assert = chai.assert;
const Log = require('../lib/Log.js');

describe('Log', function(x, y, height, width) {
  it('should have an x value', function() {
    var log = new Log(x, y, height, width);
    assert.equal(log.x, x);
  });

  it('should have a y value', function() {
    var log = new Log(x, y, height, width);
    assert.equal(log.y, y);
  });

  it('should have a height of 70', function() {
    var log = new Log(x, y, height, width);
    assert.equal(log.height, height);
  });

  it('should have a width of 70', function() {
    var log = new Log(x, y, height, width);
    assert.equal(log.width, width);
  });

  it('should have the ability to move', function() {
    var log = new Log(x, y, height, width);
    assert.isFunction(log.move);
  });
});