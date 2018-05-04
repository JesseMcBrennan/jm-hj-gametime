var Frog = require('../lib/frog.js');
var Car = require('../lib/Car.js');
const drawBackground = require('./Background.js')

class Game {
  constructor(c) {
    this.c = c;
    this.gameLoop = this.gameLoop.bind(this);
    // this.height = height;
    // this.width = width;
  }

  gameLoop() {
    drawBackground(this.c)
    requestAnimationFrame(this.gameLoop);
  }   
}



module.exports = Game;