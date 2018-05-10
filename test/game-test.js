const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js');
const Frog = require('../lib/Frog.js');

describe('Game', function() {
  it('should instantiate a new game', function() {
    var game = new Game();
    assert.isObject(game);
  });
  it('should have 3 lives to start', function() {
    var game = new Game();
    assert.equal(game.lives, 3);
  });

  it('should start at level 1', function() {
    var game = new Game();
    assert.equal(game.level, 1);
  });
  it('should be able to draw characters', function (){
    var game = new Game();
    assert.isFunction(game.drawCharacters);
   })
  it('should be able to end game', function (){
    var game = new Game();
    assert.isFunction(game.gameOver);
   })
  it('should keep track of lives', function (){
    var game = new Game();
    assert.isFunction(game.livesLeft);
  })
  it('should have a current level', function() {
    var game = new Game();
    assert.isFunction(game.currentLevel)
  })
  it('should have a reset function', function() {
    var game = new Game();
    assert.isFunction(game.resetFrog)
  })
  it('should reset to the starting position after death', function() {
    var game = new Game() 
    game.frog.moveLeft();
    assert.equal(game.frog.x, 550)
    game.resetFrog();
    assert.equal(game.frog.x, 600)
  })
  it('should be able to restart the game', function() {
    var game = new Game();
    assert.isFunction(game.restartGame);
  //THIS TEST WORKS IF WE COMMENT OUT CANVAS ELEMENTS FROM GAME!!!
    // assert.equal(game.lives, 3)
  //   game.restartGame();
  //   game.restartGame();
  //   game.restartGame();
  //   assert.equal(game.lives, 0);
  })
  it('should be able to increase level', function() {
    var game = new Game();
    assert.isFunction(game.levelUp);
    assert.equal(game.level, 1);
    game.levelUp();
    assert.equal(game.level, 2);
  });

  it('should reset when it hits road obstacles', function() {
    var game = new Game();
    assert.isFunction(game.roadCollision)
  })
  it('should reset when it hits river obstacle', function() {
    var game = new Game();
    assert.isFunction(game.riverCollision)
  })
});

