const chai = require('chai');
const assert = chai.assert;
const Frog = require('../lib/frog.js');

describe('Frog', function() {
  it('should have a width and a height of 30', function() {
    var frog = new Frog();
    // var expectedHeight = 30;
    // var expected

    assert.equal(frog.height, 50);
    assert.equal(frog.width, 50);
  });
});

describe('Frog', function() {
  it('should have a color of green', function() {
    var frog = new Frog();

    assert.equal(frog.color, 'green');
  });
});

describe('Frog', function() {
  it('should start out at the bottom in the middle');
    var frog = new Frog();

    assert.equal(frog.x, 600);
    assert.equal(frog.y, 700);
})


// describe('Frog', function() )
//When a frog is created it should have a width and height, color, position

//A frog should be able to move up, down, left, right

//should not be able to move beyond height or width of canvas

