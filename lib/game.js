const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const Car = require('./Car.js');
const drawBackground = require('./Background.js');
const Index = require('./index.js');

class Game {
  constructor(c, image) {
    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;
    this.frog = new Frog();
  }

  drawCharacters(c) {
    this.frog.drawFrog(c)
  }

  drawFrog(frogImg) {
    this.c.drawImage(this.image, this.x, this.y, this.height, this.width)
  }

  moveFrog(event) {
    // console.log('hi');
    if (event.keyCode === 38){
    this.frog.moveUp();
    } else {
    if (event.keyCode === 40){
    this.frog.moveDown();
    } else {
    if (event.keyCode === 37) {
    this.frog.moveLeft();
    } else {
    if (event.keyCode === 39) {
    this.frog.moveRight(); {   
    }
  }
  
  }
}

}
}
}


module.exports = Game;