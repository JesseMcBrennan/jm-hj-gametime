const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const drawBackground = require('./Background.js');
const Car = require('./Car.js');
const Log = require('./Log.js');
const Truck = require('./Truck.js');
const Collision = require('./Collision.js');

class Game {
    constructor(c, image) {
      this.lives = 3;
      this.frog = new Frog(600, 650, 50, 50);

  // Road Obstacles

      this.car = new Car(10, 605, 35, 45);
      this.car2 = new Car(400, 605, 35, 45);
      this.car3 = new Car(250, 605, 35, 45);    
      this.car4 = new Car(10, 555, 35, 45);
      this.car5 = new Car(280, 555, 35, 45);
      this.car6 = new Car(-300, 555, 35, 45);    
      this.car7 = new Car(400, 505, 35, 45);
      this.car8 = new Car(800, 505, 35, 45);
      this.car9 = new Car(60, 505, 35, 45);

  //River Obstacles

      this.logLaneOne = new Log(-10, 40, 70, 100);
      this.logLaneOne2 = new Log(-370, 40, 70, 100);
      this.logLaneTwo = new Log(-200, 90, 70, 100);
      this.logLaneTwo2 = new Log(-300, 90, 70, 100);
      this.logLaneTwo3 = new Log(-650, 90, 70, 100);
      this.logLaneThree = new Log(-400, 140, 70, 100);
      this.logLaneThree2 = new Log(-100, 140, 70, 100);
      this.log4 = new Log(-10, 190, 70, 100);
      this.log5 = new Log(-400, 190, 70, 100);
      this.log6 = new Log(-200, 290, 70, 100);
      this.log7 = new Log(-10, 230, 70, 100);
      this.truck = new Truck(10, 430, 90, 140);
      this.truck2 = new Truck(600, 430, 90, 140);
      this.truck3 = new Truck(300, 430, 90, 140);   
      this.truck4 = new Truck(900, 430, 90, 140);
    }

    drawCharacters(c) {
      this.logLaneOne.drawLog(c)
      this.logLaneOne2.drawLog(c)
      this.logLaneTwo.drawLog(c)
      this.logLaneOne2.drawLog(c)
      this.logLaneTwo3.drawLog(c)
      this.logLaneThree.drawLog(c)
      this.logLaneThree2.drawLog(c)
      this.log4.drawLog(c)
      this.log5.drawLog(c)
      this.log6.drawLog(c)
      this.log7.drawLog(c)
      this.car.drawCar(c)
      this.car2.drawCar(c)
      this.car3.drawCar(c)    
      this.car4.drawCar(c)
      this.car5.drawCar(c)
      this.car6.drawCar(c)    
      this.car7.drawCar(c)
      this.car8.drawCar(c)
      this.car9.drawCar(c) 
      this.truck.drawTruck(c)
      this.truck2.drawTruck(c)
      this.truck3.drawTruck(c)
      this.truck4.drawTruck(c)
      this.frog.drawFrog(c)
    }

    gameOver(c) {
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "white";
      c.font = "72px Arial";
      c.fillText("GAME OVER", 6, 100);
      c.font = "28px Arial";
      c.fillText("Refresh to try again", 50, 150);
    }

    resetFrog(c ) {
      this.frog.x = 600;
      this.frog.y = 650;
    }
    restartGame(c) {
      this.lives --; 
      this.resetFrog();
        if (this.lives === 0) {
            this.gameOver(c);
        } 
    }
    
    moveFrog(event, frog) {
      event.preventDefault();
       if (event.keyCode === 38){
          this.frog.moveUp();
        } else {
       if (event.keyCode === 40){
          this.frog.moveDown();
        } else {
       if (event.keyCode === 37) {
          this.frog.moveLeft();
        } else {
       if (event.keyCode === 39) {
          this.frog.moveRight();
          }
        }
      }  
    }
  }

    roadCollision(c) {
      if (this.frog.x < this.car.x + this.car.width 
        && this.frog.x + this.frog.width > this.car.x 
        && this.frog.y < this.car.y + this.car.height 
        && this.frog.height + this.frog.y > this.car.y) { 
        return this.restartGame(c)
  }   if (this.frog.x < this.car2.x + this.car2.width 
        && this.frog.x + this.frog.width > this.car2.x 
        && this.frog.y < this.car2.y + this.car2.height 
        && this.frog.height + this.frog.y > this.car2.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car3.x + this.car3.width 
        && this.frog.x + this.frog.width > this.car3.x 
        && this.frog.y < this.car3.y + this.car3.height 
        && this.frog.height + this.frog.y > this.car3.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car4.x + this.car4.width 
        && this.frog.x + this.frog.width > this.car4.x 
        && this.frog.y < this.car4.y + this.car4.height 
        && this.frog.height + this.frog.y > this.car4.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car5.x + this.car5.width 
        && this.frog.x + this.frog.width > this.car5.x 
        && this.frog.y < this.car5.y + this.car5.height 
        && this.frog.height + this.frog.y > this.car5.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car6.x + this.car6.width 
        && this.frog.x + this.frog.width > this.car6.x 
        && this.frog.y < this.car6.y + this.car6.height 
        && this.frog.height + this.frog.y > this.car6.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car7.x + this.car7.width 
        && this.frog.x + this.frog.width > this.car7.x 
        && this.frog.y < this.car7.y + this.car7.height 
        && this.frog.height + this.frog.y > this.car7.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car8.x + this.car8.width 
        && this.frog.x + this.frog.width > this.car8.x 
        && this.frog.y < this.car8.y + this.car8.height 
        && this.frog.height + this.frog.y > this.car8.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.car9.x + this.car9.width 
        && this.frog.x + this.frog.width > this.car9.x 
        && this.frog.y < this.car9.y + this.car9.height 
        && this.frog.height + this.frog.y > this.car9.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.truck.x + (this.truck.width - 40)
        && this.frog.x + this.frog.width > this.truck.x 
        && this.frog.y < this.truck.y  + (this.truck.height - 90) 
        && this.frog.height + this.frog.y > this.truck.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.truck2.x + (this.truck2.width - 40)
        && this.frog.x + this.frog.width > this.truck2.x 
        && this.frog.y < this.truck2.y + (this.truck2.height - 90) 
        && this.frog.height + this.frog.y > this.truck2.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.truck3.x + (this.truck3.width - 40)
        && this.frog.x + this.frog.width > this.truck3.x 
        && this.frog.y < this.truck3.y + (this.truck3.height - 90)
        && this.frog.height + this.frog.y > this.truck3.y) {
        return this.restartGame(c);
  }   if (this.frog.x < this.truck4.x + (this.truck4.width - 40) 
        && this.frog.x + this.frog.width > this.truck4.x 
        && this.frog.y < this.truck4.y + (this.truck4.height - 90)
        && this.frog.height + this.frog.y > this.truck4.y){
        return this.restartGame(c);
  }  
  }
    rideLog(x, y, height, width) {
      if (this.frog.x < this.logLaneOne.x + (this.logLaneOne.width - 50) 
        && this.frog.x + this.frog.width > this.logLaneOne.x 
        && this.frog.y < this.logLaneOne.y + (this.logLaneOne.height - 50)
        && this.frog.height + this.frog.y > this.logLaneOne.y) { 
           this.frog.x = this.logLaneOne.x; 

      } if (this.frog.x < this.logLaneOne2.x + (this.logLaneOne2.width - 50)
        && this.frog.x + this.frog.width > this.logLaneOne2.x 
        && this.frog.y < this.logLaneOne2.y + (this.logLaneOne2.height - 50)
        && this.frog.height + this.frog.y > this.logLaneOne2.y) { 
          this.frog.x = this.logLaneOne2.x; 

      } if (this.frog.x < this.logLaneTwo.x + (this.logLaneTwo.width - 50) 
        && this.frog.x + this.frog.width > this.logLaneTwo.x 
        && this.frog.y < this.logLaneTwo.y + (this.logLaneTwo.height - 50)
        && this.frog.height + this.frog.y > this.logLaneTwo.y) { 
           this.frog.x = this.logLaneTwo.x; 

      } if (this.frog.x < this.logLaneTwo2.x + (this.logLaneTwo2.width - 50)
        && this.frog.x + this.frog.width > this.logLaneTwo2.x 
        && this.frog.y < this.logLaneTwo2.y + (this.logLaneTwo2.height - 50)
        && this.frog.height + this.frog.y > this.logLaneTwo2.y) { 
          this.frog.x = this.logLaneTwo2.x; 

      } if (this.frog.x < this.logLaneTwo3.x + (this.logLaneTwo3.width - 50) 
        && this.frog.x + this.frog.width > this.logLaneTwo3.x 
        && this.frog.y < this.logLaneTwo3.y + (this.logLaneTwo3.height - 50) 
        && this.frog.height + this.frog.y > this.logLaneTwo3.y) { 
          this.frog.x = this.logLaneTwo3.x; 

      } if (this.frog.x < this.logLaneThree.x + (this.logLaneThree.width - 50) 
        && this.frog.x + this.frog.width > this.logLaneThree.x 
        && this.frog.y < this.logLaneThree.y + (this.logLaneThree.height - 50)
        && this.frog.height + this.frog.y > this.logLaneThree.y) { 
          this.frog.x = this.logLaneThree.x;  

      } if (this.frog.x < this.logLaneThree2.x + (this.logLaneThree2.width - 50)
        && this.frog.x + this.frog.width > this.logLaneThree2.x 
        && this.frog.y < this.logLaneThree2.y + (this.logLaneThree2.height - 50)
        && this.frog.height + this.frog.y > this.logLaneThree2.y) { 
          this.frog.x = this.logLaneThree2.x; 

      } if (this.frog.x < this.log4.x + (this.log4.width - 50)
        && this.frog.x + this.frog.width > this.log4.x
        && this.frog.y < this.log4.y + (this.log4.height - 50)
        && this.frog.height + this.frog.y > this.log4.y) { 
          this.frog.x = this.log4.x; 

      } if (this.frog.x < this.log5.x + (this.log5.width - 50)
        && this.frog.x + this.frog.width > this.log5.x 
        && this.frog.y < this.log5.y + (this.log5.height - 50)
        && this.frog.height + this.frog.y > this.log5.y) { 
          this.frog.x = this.log5.x;  

      } if (this.frog.x < this.log6.x + (this.log6.width - 50)
        && this.frog.x + this.frog.width > this.log6.x 
        && this.frog.y < this.log6.y + (this.log6.height - 50)
        && this.frog.height + this.frog.y > this.log6.y) { 
          this.frog.x = this.log6.x;  

      } if (this.frog.x < this.log7.x + (this.log7.width - 50)
        && this.frog.x + this.frog.width > this.log7.x 
        && this.frog.y < this.log7.y + (this.log7.height - 50)
        && this.frog.height + this.frog.y > this.log7.y) { 
       this.frog.x = this.log7.x; 
      }
    }
}




module.exports = Game;