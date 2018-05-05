const Enemies = require('./Enemies.js');

class Car extends Enemies {
  constructor(x, y, width, height) {
  super(x, y, width, height) 
  this.x = x; //10
  this.y = y; //555
  this.width = width; //40
  this.height = height; //70
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