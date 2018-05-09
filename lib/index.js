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
  
};

function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
}

// module.exports = Index;

