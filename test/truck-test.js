const chai = require('chai');
const assert = chai.assert;
const Truck = require('../lib/Truck.js');

describe('Truck', function() {
  it('should have a width of x', function() {
    var truck = new Truck();
    // var expectedHeight = 30;
    // var expected

    assert.equal(truck.width, x);
  });
});