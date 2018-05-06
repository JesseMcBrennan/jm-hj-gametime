class Frog {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

   drawFrog(c) {
    const img = new Image();
    img.src = '../images/frog.png';
    c.drawImage(img, this.x, this.y, this.height, this.width);   
  }

  moveUp() {
    this.y -= 50;
  }

  moveDown() {
    this.y += 50;
  }

  moveLeft() {
    this.x -= 50;
  }

  moveRight() {
    this.x += 50;
  }
}

module.exports = Frog;
