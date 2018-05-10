const chai = require('chai');
const assert = chai.assert;
const Enemies = require('../lib/Enemies.js');

describe('Enemies', function(x, y, height, width) {
  it('should have an x value', function() {
    var enemies = new Enemies(x, y, height, width);
    assert.equal(enemies.x, x);
  });

  it('should have a y value', function() {
    var enemies = new Enemies(x, y, height, width);
    assert.equal(enemies.y, y);
  });

  it('should have a height', function() {
    var enemies = new Enemies(x, y, height, width);
    assert.equal(enemies.height, height);
  });

  it('should have a width', function() {
    var enemies = new Enemies(x, y, height, width);
    assert.equal(enemies.width, width);
  });
});