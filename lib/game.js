const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const drawBackground = require('./Background.js');
const Index = require('./index.js');
const Car = require('./Car.js');
const Log = require('./Log.js');
const Truck = require('./Truck.js');

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

    this.car = new Car(10, 555, 40, 70);
    this.car2 = new Car(400, 505, 40, 70);
    this.car3 = new Car(250, 605, 40, 70);

    this.log = new Log(10, 40, 70, 100);
    this.log2 = new Log(-200, 90, 70, 100);
    this.log3 = new Log(-400, 140, 70, 100);
    this.log4 = new Log(-10, 190, 70, 100);
    this.log5 = new Log(-400, 190, 70, 100);
    this.log6 = new Log(-200, 290, 70, 100);
    this.log7 = new Log(-10, 2340, 70, 100);

    this.truck = new Truck(10, 380, 90, 140);
    this.truck2 = new Truck(400, 430, 90, 140);
  }

  drawCharacters(c) {
    this.log.drawLog(c)
    this.log2.drawLog(c)
    this.log3.drawLog(c)
    this.log4.drawLog(c)
    this.log5.drawLog(c)
    this.log6.drawLog(c)
    this.log7.drawLog(c)

    this.car.drawCar(c)
    this.car2.drawCar(c)
    this.car3.drawCar(c)

    this.truck.drawTruck(c)
    this.truck2.drawTruck(c)
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