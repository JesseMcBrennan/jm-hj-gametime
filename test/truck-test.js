const chai = require('chai');
const assert = chai.assert;
const Truck = require('../lib/Truck.js');

describe('Truck', function(x, y, height, width) {
  it('should have an x value', function() {
    var truck = new Truck(x, y, height, width);
    assert.equal(truck.x, x);
  });

  it('should have a y value', function() {
    var truck = new Truck(x, y, height, width);
    assert.equal(truck.y, y);
  });

  it('should have a height of 90', function() {
    var truck = new Truck(x, y, height, width);
    assert.equal(truck.height, height);
  });

  it('should have a width of 140', function() {
    var truck = new Truck(x, y, height, width);
    assert.equal(truck.width, width);
  });

  it('should have the ability to move', function() {
    var truck = new Truck(x, y, height, width);
    assert.isFunction(truck.move);
  });
});