class Frog {
  constructor(c) {
    this.x = 600;
    this.y = 650;
    this.height = 50;
    this.width = 50;
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
