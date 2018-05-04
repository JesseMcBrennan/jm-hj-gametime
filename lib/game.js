const Frog = require('./Character.js');
const Enemies = require('./Enemies.js');
const Car = require('./Car.js');
const drawBackground = require('./Background.js')

var frog = document.querySelector('.frog');
var sx = 350;
var sy = 350;
var swidth = 50;
var sheight = 50;
var x = x;
var y = y;

// var carImg = new Image();
// carImg.src = "images/car.png";



class Game {
  constructor(c) {
    this.c = c;
    this.gameLoop = this.gameLoop.bind(this);
  }

  gameLoop() {
    drawBackground(this.c)
    this.drawFrog()
    requestAnimationFrame(this.gameLoop);
  }   

  drawFrog() {
    this.c.drawImage(frog, sx, sy, swidth, sheight, x, y, this.height, this.width)
  }
}



module.exports = Game;