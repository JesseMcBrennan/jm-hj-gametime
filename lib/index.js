var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
const Game = require('./Game.js');

var frogImg = new Image();
frogImg.src = '../images/frog.png';

const game = new Game(c, frogImg);
game.gameLoop() 


// game.drawFrog()

//Frog c, height, width

// requestAnimationFrame(game.gameLoop);

































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

