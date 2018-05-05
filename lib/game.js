const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const drawBackground = require('./Background.js');
const Index = require('./index.js');
const Car = require('./Car.js');
const Log = require('./Log.js');

// var car = new Car(10, 550, 50, 50)
// var log = new Log(10, 50, 70, 50)

// var enemies = [car, log];

class Game {
  constructor(c, image) {
    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;
    this.frog = new Frog();
    this.car = new Car();
    this.log = new Log();
  }

  drawCharacters(c) {
    this.log.drawLog(c)
    this.car.drawCar(c)
    this.frog.drawFrog(c)
  }
 
  moveFrog(event) {
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