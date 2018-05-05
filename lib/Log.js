const Enemies = require('./Enemies.js');

class Log extends Enemies {
  constructor(c, img, x, y, width, height) {
  super(img, x, y, width, height) 
  this.x = 10;
  this.y = 50;
  this.height = 70;
  this.width = 50;
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