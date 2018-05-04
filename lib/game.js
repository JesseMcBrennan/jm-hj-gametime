const Frog = require('./Character.js');
const Enemies = require('./Enemies.js');
const Car = require('./Car.js');
const drawBackground = require('./Background.js');




class Game {
  constructor(c, image) {
    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;

    this.gameLoop = this.gameLoop.bind(this);
  }

  gameLoop() {
    drawBackground(this.c)
    this.drawFrog()
    requestAnimationFrame(this.gameLoop);
  }   

  drawFrog() {
    this.c.drawImage(this.image, this.x, this.y, this.height, this.width)
  }
}



module.exports = Game;