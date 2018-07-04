 const Frog = require('./frog.js');
const Enemies = require('./Enemies.js');
const drawBackground = require('./Background.js');
const Car = require('./Car.js');
const Log = require('./Log.js');
const Truck = require('./Truck.js');


let roadObstaclesTrucks = [
    new Truck(10, 430, 90, 140),
    new Truck(600, 430, 90, 140),
    new Truck(300, 380, 90, 140),
    new Truck(900, 380, 90, 140)
]

let riverObstacles = [
    new Log(-10, 40, 70, 70),
    new Log(-370, 40, 70, 70),
    new Log(-200, 90, 70, 70),
    new Log(-300, 90, 70, 70),
    new Log(-650, 90, 70, 70),
    new Log(-400, 140, 70, 70),
    new Log(-70, 140, 70, 70),
    new Log(-10, 190, 70, 70),
    new Log(-400, 190, 70, 70),
    new Log(-200, 290, 70, 70),
    new Log(-10, 230, 70, 70)
]

let roadObstaclesCars = [
    new Car(10, 605, 45, 35),
    new Car(400, 605, 45, 35),
    new Car(250, 605, 45, 35),
    new Car(10, 555, 45, 35),
    new Car(280, 555, 45, 35),
    new Car(-300, 555, 45, 35),
    new Car(400, 505, 45, 35),
    new Car(800, 505, 45, 35),
    new Car(60, 505, 45, 35)
]

class Game {
    constructor(c, image) {
        this.lives = 3;
        this.level = 1;
        this.frog = new Frog(600, 650, 50, 50);
    }

    drawCharacters(c) {
        this.frog.drawFrog(c);

        roadObstaclesCars.forEach(function(car) {
            car.drawCar(c).move(c);
        })

        roadObstaclesTrucks.forEach(function(truck) {
            truck.drawTruck(c).move(c);
        })

        riverObstacles.forEach(function(log) {
            log.drawLog(c).move(c);
        })
    }

    gameOver(c) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "white";
        c.font = "150px 'Indie Flower', cursive";
        c.fillText("GAME OVER", 250, 350);
        c.font = "28px 'Indie Flower', cursive";
        c.fillText("Refresh to try again", 460, 450);
    }

    livesLeft(c) {
        c.fillStyle = "black";
        c.font = "45px 'Indie Flower', cursive";
        c.fillText("lives: " + this.lives, 20, 690);
    }

    currentLevel(c) {
        c.fillStyle = "black";
        c.font = "45px 'Indie Flower', cursive";
        c.fillText("level: " + this.level, 200, 690);
    }

    resetFrog() {
        this.frog.x = 600;
        this.frog.y = 650;
    }

    restartGame(c) {
        this.lives--;
        this.resetFrog();
        if (this.lives === 0) {
            this.gameOver(c);
        }
    }

    levelUp() {
        this.level++;
        this.resetFrog();
    }

    moveFrog(event, frog) {

        if (event.keyCode === 38) {
            this.frog.moveUp();
            if (this.frog.y === 0) {
                this.levelUp();
            }
        } else {
            if (event.keyCode === 40) {
                this.frog.moveDown();
                if (this.frog.y >= 700) {
                    this.restartGame();
                }
            } else {
                if (event.keyCode === 37) {
                    this.frog.moveLeft();
                    if (this.frog.x < 0) {
                        this.restartGame();
                    }
                } else {
                    if (event.keyCode === 39) {
                        this.frog.moveRight();
                        if (this.frog.x >= 1200) {
                            this.restartGame();
                        }
                    }
                }
            }
        }
    }

    roadCollision(c) {
        let frog = this.frog;
        roadObstaclesCars.forEach(car => {
            if (frog.x < car.x + car.width &&
                frog.x + frog.width > car.x &&
                frog.y < car.y + car.height &&
                frog.height + frog.y > car.y) {
                return this.restartGame(c);
            }
        })

        roadObstaclesTrucks.forEach(truck => {
            if (frog.x < truck.x + truck.width &&
                frog.x + frog.width > truck.x &&
                frog.y < truck.y + truck.height &&
                frog.height + frog.y > truck.y) {
                return this.restartGame(c);
            }
        })
    }
    riverCollision(c) {
        let frog = this.frog;
        riverObstacles.forEach(log => {
            if (frog.x < log.x + log.width &&
                frog.x + frog.width > log.x &&
                frog.y < log.y + log.height &&
                frog.height + frog.y > log.y) {
                return this.restartGame(c);
            }
        })
    }
}




module.exports = Game;