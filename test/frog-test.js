const chai = require('chai');
const assert = chai.assert;
const Frog = require('../lib/Frog.js');

describe('Frog', function(x, y, height, width) {
  it('should have a starting x position of 600', function() {
    var frog = new Frog(600, 700, 50, 50);
    assert.equal(frog.x, 600);
  });
  it('should have a starting y position of 700', function() {
    var frog = new Frog(600, 700, 50, 50);
    assert.equal(frog.y, 700);
  });
  it('should have a height of 50', function() {
    var frog = new Frog(600, 700, 50, 50);
    assert.equal(frog.height, 50);
  });
  it('should have a width of 50', function() {
    var frog = new Frog(600, 700, 50, 50);
    assert.equal(frog.width, 50);
  });
  it('should have the ability to move up', function() {
    var frog = new Frog(600, 700, 50, 50)
    assert.isFunction(frog.moveUp);
  });
  it('should have the ability to move down', function() {
    var frog = new Frog(600, 700, 50, 50)
    assert.isFunction(frog.moveDown);
  });
  it('should have the ability to move left', function() {
    var frog = new Frog(600, 700, 50, 50)
    assert.isFunction(frog.moveLeft);
  });
  it('should have the ability to move right', function() {
    var frog = new Frog(600, 700, 50, 50)
    assert.isFunction(frog.moveRight);
  });
  it('should move up 50 pixels when moved', function() {
    var frog = new Frog(600, 700, 50, 50)
    assert.equal(frog.y, 700);
    frog.moveUp();
    assert.equal(frog.y, 650);
  })
});



