const Game = require('./Game.js')

class Enemies {
  constructor(c, x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.death = [];
  }

  moveSlowRight() {
    this.x += 4;
      if (this.x > 1200) { 
        this.x = -20
      }
      return this;
    }

  moveMediumRight() {
    this.x += 5;
      if (this.x > 1200) {
        this.x = -40;
    }
    return this;
  }

  moveFastRight() {
    this.x += 7;
      if (this.x > 1300) {
        this.x = -40;
    }
    return this;
  }
}

module.exports = Enemies;