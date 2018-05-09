const Enemies = require('./Enemies.js');

class Log extends Enemies {
  constructor(x, y, height, width) {
    super(x, y, height, width); 
    this.drawLog = this.drawLog.bind(this)
  }

  drawLog(c) {
    const img = new Image();
    img.src = '../images/log.svg';
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

module.exports = Log;