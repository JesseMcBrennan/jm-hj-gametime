const Enemies = require('./Enemies.js');

class Truck extends Enemies {
  constructor(x, y, width, height) {
  super(x, y, width, height) 
  this.x = x; //10
  this.y = y; //380
  this.width = width; //90
  this.height = height; //140
  this.drawTruck = this.drawTruck.bind(this)
}

drawTruck(c) {
    const img = new Image();
    img.src = '../images/truck2.png';
    c.drawImage(img, this.x, this.y, this.height, this.width);   
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