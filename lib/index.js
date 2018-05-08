var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
const Game = require('./Game.js');
const Enemies = require('./Enemies.js')
const drawBackground = require('./Background.js');


let game; 


window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();
// var car = new Car();
gameLoop();

function gameLoop(car, frog) {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.roadCollision(c);
  game.drawCharacters(c);
  game.rideLog(c);
  // game.animate(); //moves enemies
  if (game.lives >= 1) {
    requestAnimationFrame(gameLoop);
  }
  game.car.move(c);
  game.car2.move(c);
  game.car3.move(c);
  game.car4.move(c);
  game.car5.move(c);
  game.car6.move(c);
  game.car7.move(c);  
  game.car8.move(c);
  game.car9.move(c);
  
  game.logLaneOne.moveMediumRight(c);
  game.logLaneOne2.moveMediumRight(c);

  game.logLaneTwo.moveMediumRight(c);
  game.logLaneTwo2.moveMediumRight(c);
  game.logLaneTwo3.moveMediumRight(c);


  game.logLaneThree.moveFastRight(c);
  game.logLaneThree2.moveFastRight(c);

  game.log4.moveSlowRight(c);
  game.log5.moveSlowRight(c);
  game.log6.moveMediumRight(c);
  game.log7.moveFastRight(c);

  game.truck.move(c);
  game.truck2.move(c); //draw all characters
  game.truck3.move(c); //draw all characters
  game.truck4.move(c); //draw all characters

  // game.gameOver(c);
};

// function gameOver(game) {
//   if (game.lives === 0) {
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     c.fillStyle = "white";
//     c.font = "72px Arial";
//     c.fillText("GAME OVER", 6, 100);
//     c.font = "28px Arial";
//     c.fillText("Refresh to try again", 50, 150);
//   }
// }



function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
}



// window.addEventListener('keypress', moveDown);
// window.addEventListener('keypress', moveLeft);
// window.addEventListener('keypress', moveRight);

// function startGame() {
//   game = new Game()
// }

// var frog = new Frog(frogImg, 600, 650, 50, 50);
// var frogImg = new Image();
// frogImg.src = '../images/frog.png';

// const game = new Game(c, frogImg);
// game.gameLoop() 
// game.drawFrog(frogImg)





































// let x = c.x
// let y = c.y

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(x, y, innerWidth, innerHeight)
// };


//Movement


// animate();  

// var moveFrog = [];

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0 , innerWidth, innerHeight
//         );

//     for (var i = 0; i < moveFrog.length; i++) {
//       moveFrog[i].update()
// };


//index.js will run the game loop. 

//Game class is going to be top level - where we create frog, enemies

module.exports = Index;

