var carImg = new Image();
carImg.src = "images/car.png";
var x = x;
var y = y;

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function Car(carImg, height, width, x, y) {
  this.height = 40;
  this.width = 60;
}


// class Enemies {
//   constructor(img, x, y)
//   this.img = 
// }

carImg.onload = function() {
    c.drawImage(carImg, 10, 600, 50, 50)
}

module.exports = Car;