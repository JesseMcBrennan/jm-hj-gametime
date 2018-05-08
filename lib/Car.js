const Enemies = require('./Enemies.js');

class Car extends Enemies {
  constructor(x, y, width, height) {
  super(x, y, width, height) 
  this.x = x; 
  this.y = y; 
  this.width = width; 
  this.height = height; 
  this.drawCar = this.drawCar.bind(this)
  this.cars = [];
  }

  drawCar(c) {
      const img = new Image();
      img.src = '../images/volkswagon.png';
      c.drawImage(img, this.x, this.y, this.height, this.width); 
      return this;  
  }
  move() {
      this.x += 3;
      if (this.x > 1200) { 
        this.x = -20
      }
      return this;
  }
}

module.exports = Car;

//test default behavior on line 21. It should move the x coordinate by 3

//Create a car that has an x coordinate of 1198. Call move, expect X would be less 20.