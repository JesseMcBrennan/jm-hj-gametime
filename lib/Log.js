const Enemies = require('./Enemies.js');

class Log extends Enemies {
  constructor(x, y, width, height) {
  super(x, y, width, height) 
  this.x = x; //10
  this.y = y; //50
  this.width = width; //50
  this.height = height; //70
  this.drawLog = this.drawLog.bind(this)
}

drawLog(c) {
    const img = new Image();
    img.src = '../images/log.svg';
    c.drawImage(img, this.x, this.y, this.height, this.width);   
  }
move() {
    this.x += 4;
    if (this.x > 1200) { 
      this.x = -20
    }
    return this;
  }

}

module.exports = Log;