const Enemies = require('./Enemies.js');

class Truck extends Enemies {
  constructor(x, y, width, height) {
  super(x, y, width, height) 
  this.x = x; 
  this.y = y; 
  this.width = width; 
  this.height = height; 
  this.drawTruck = this.drawTruck.bind(this)
}

drawTruck(c) {
    const img = new Image();
    img.src = '../images/truck2.png';
    c.drawImage(img, this.x, this.y, this.height, this.width);   
    return this;
  }
move() {
    this.x -= 4;
    if (this.x < -150) { 
      this.x = 1200
    }
    return this;
  }

}

module.exports = Truck;