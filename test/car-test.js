global.document = {
  getElementById: function() { },
  querySelector: function() {
    return {innerText: 'innerText'};
  }
}

const chai = require('chai');
const assert = chai.assert;
const Car = require('../lib/Car.js');

describe('Car', function(x, y, height, width) {
  it('should have an x value', function() {
    var car = new Car(x, y, height, width);
    assert.equal(car.x, x);
  });

  it('should have a y value', function() {
    var car = new Car(x, y, height, width);
    assert.equal(car.y, y);
  });

  it('should have a height of 45', function() {
    var car = new Car(x, y, 45, width);
    assert.equal(car.height, 45);
  });

  it('should have a width of 35', function() {
    var car = new Car(x, y, height, 35);
    assert.equal(car.width, 35);
  });

  it('should have the ability to move', function() {
    var car = new Car(x, y, height, width);
    assert.isFunction(car.move);
  });
});