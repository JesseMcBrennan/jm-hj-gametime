const Enemies = require('./Enemies.js');

class Car extends Enemies {
  constructor(x, y, height, width) {
  super(x, y, width, height) 
  this.x = x; 
  this.y = y; 
  this.height = height; 
  this.width = width; 
  this.drawCar = this.drawCar.bind(this)
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



