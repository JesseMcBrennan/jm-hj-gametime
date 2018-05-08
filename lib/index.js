var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
const Game = require('./Game.js');
const Enemies = require('./Enemies.js')
const drawBackground = require('./Background.js');

let game; 

window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();

gameLoop();

function gameLoop(car, frog) {
  c.clearRect(0, 0, canvas.width, canvas.height); 
  drawBackground(c);
  game.livesLeft(c);
  game.currentLevel(c);
  game.drawCharacters(c);
  game.roadCollision(c);
  game.riverCollision(c);
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
  game.truck2.move(c); 
  game.truck3.move(c); 
  game.truck4.move(c); 
};

function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
}

// module.exports = Index;

