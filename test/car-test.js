global.document = {
  getElementById: function() { },
  querySelector: function() {
    return {innerText: 'innerText'};
  }
}

const chai = require('chai');
const assert = chai.assert;
const Car = require('../lib/Car.js');

describe('Car', function() {
  it('should have a width of x', function() {
    var car = new Car(10, 10, 50, 50);


    assert.equal(car.width, 50);
  });
});