const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const drawBackground = require('./Background.js');
const Index = require('./index.js');
const Car = require('./Car.js');
const Log = require('./Log.js');
const Truck = require('./Truck.js');
const Collision = require('./Collision.js');

// var car = new Car(10, 550, 50, 50)
// var log = new Log(10, 50, 70, 50)

// var enemies = [car, log];

class Game {
  constructor(c, image) {
    this.frog = new Frog(600, 650, 50, 50);


    this.car = new Car(10, 555, 40, 70);
    this.car2 = new Car(400, 505, 40, 70);
    this.car3 = new Car(250, 605, 40, 70);

    //first array of logs -- line one
    this.logLaneOne = new Log(10, 40, 70, 100);
    this.logLaneOne2 = new Log(370, 40, 70, 100);

    //second array of logs -- line two
    this.logLaneTwo = new Log(-200, 90, 70, 100);
    this.logLaneTwo2 = new Log(300, 90, 70, 100);
    this.logLaneTwo3 = new Log(650, 90, 70, 100);


    //third array of logs -- line three
    this.logLaneThree = new Log(-400, 140, 70, 100);
    this.logLaneThree2 = new Log(100, 140, 70, 100);


    //fourth array of logs -- line four
    this.log4 = new Log(-10, 190, 70, 100);
    this.log5 = new Log(-400, 190, 70, 100);

    //fifth array of logs -- line five
    this.log6 = new Log(-200, 290, 70, 100);

    //sixth array of logs -- line six
    this.log7 = new Log(-10, 230, 70, 100);

    this.truck = new Truck(10, 380, 90, 140);
    this.truck2 = new Truck(400, 430, 90, 140);
  }

  drawCharacters(c) {
    this.logLaneOne.drawLog(c)
    this.logLaneOne2.drawLog(c)


    this.logLaneTwo.drawLog(c)
    this.logLaneOne2.drawLog(c)
    this.logLaneTwo3.drawLog(c)

    this.logLaneThree.drawLog(c)
    this.logLaneThree2.drawLog(c)

    this.log4.drawLog(c)
    this.log5.drawLog(c)
    this.log6.drawLog(c)
    this.log7.drawLog(c)

    this.car.drawCar(c)
    // console.log(this.car.x)
    let carX = this.car.x;
    let carY = this.car.y;

    this.car2.drawCar(c)
    this.car3.drawCar(c)

    this.truck.drawTruck(c)
    this.truck2.drawTruck(c)
    this.frog.drawFrog(c)
    // console.log(this.frog.x)
    let frogX = this.frog.x;
    let frogY = this.frog.y;
    let frogW = this.frog.width;
    let frogH = this.frog.height;
  }
 
  moveFrog(even, frog) {
    if (event.keyCode === 38){
    this.frog.moveUp();
    // let frogY = this.frog.y;
    } else {
    if (event.keyCode === 40){
    this.frog.moveDown();
    // let frogY = this.frog.y;
    } else {
    if (event.keyCode === 37) {
    this.frog.moveLeft();
    // let frogX = this.frog.x;
    } else {
    if (event.keyCode === 39) {
    this.frog.moveRight();
    // let frogX = this.frog.x;
    }
    }
    }  
    }
    }
  collision(car, frog) {

    if (this.frog.x === this.carX) {
      // if (this.frog.x === this.car.x + this.car.width && this.frog.x + this.frog.width) {
        console.log('hi')
    }
}
}
// }


module.exports = Game;