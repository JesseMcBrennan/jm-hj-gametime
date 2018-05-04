/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Background.js":
/*!***************************!*\
  !*** ./lib/Background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Grass
var drawBackground = function drawBackground(c) {
  c.fillStyle = "#4CA432";
  c.fillRect(0, 650, 1200, 50);
  c.fillRect(0, 350, 1200, 50);

  //Road

  c.fillStyle = "black";
  c.fillRect(0, 400, 1200, 250);

  // Water 

  c.fillStyle = "#967967";
  c.fillRect(0, 0, 1200, 50);

  //Lanes

  c.beginPath();
  c.moveTo(0, 450);
  c.lineTo(1200, 450);
  c.strokeStyle = "white";
  c.setLineDash([5]);
  c.strokeWidth = 4;
  c.stroke();

  //Lanes

  c.beginPath();
  c.moveTo(0, 500);
  c.lineTo(1200, 500);
  c.strokeStyle = "white";
  c.setLineDash([5]);
  c.strokeWidth = 4;
  c.stroke();

  //Lanes

  c.beginPath();
  c.moveTo(0, 550);
  c.lineTo(1200, 550);
  c.strokeStyle = "white";
  c.setLineDash([5]);
  c.strokeWidth = 4;
  c.stroke();

  //Lanes

  c.beginPath();
  c.moveTo(0, 600);
  c.lineTo(1200, 600);
  c.strokeStyle = "white";
  c.setLineDash([5]);
  c.strokeWidth = 4;
  c.stroke();
};

module.exports = drawBackground;

/***/ }),

/***/ "./lib/Car.js":
/*!********************!*\
  !*** ./lib/Car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// var Character = require('../lib/Enemies.js');

// // class Car {
// //   constructor(x, y) {
// //     this.x = x;
// //     this.y = y;
// //   }
// // }

// function Car(height, width, x, y) {
//   this.x = x;
//   this.y = y;
// }


// // class Enemies {
// //   constructor(img, x, y)
// //   this.img = 
// // }

// carImg.onload = function() {
//     c.drawImage(carImg, 10, 600, 50, 50)
// }

// module.exports = Car;


/***/ }),

/***/ "./lib/Character.js":
/*!**************************!*\
  !*** ./lib/Character.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function Character(img, x, y, height, width) {
  _classCallCheck(this, Character);

  this.img = img;
  this.x = x;
  this.y = y;
  this.height = height, this.width = width;
};

module.exports = Character;

/***/ }),

/***/ "./lib/Enemies.js":
/*!************************!*\
  !*** ./lib/Enemies.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// var carImg = new Image();
// carImg.src = "images/car.png";
// var x = x;
// var y = y;

// class Car {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// function Car(carImg, height, width, x, y) {
//   this.height = 40;
//   this.width = 60;
// }


// // class Enemies {
// //   constructor(img, x, y)
// //   this.img = 
// // }

// carImg.onload = function() {
//     c.drawImage(carImg, 10, 600, 50, 50)
// }

// module.exports = Car;


/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frog = __webpack_require__(/*! ./Character.js */ "./lib/Character.js");
var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");
var Car = __webpack_require__(/*! ./Car.js */ "./lib/Car.js");
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;

    this.gameLoop = this.gameLoop.bind(this);
  }

  _createClass(Game, [{
    key: 'gameLoop',
    value: function gameLoop() {
      drawBackground(this.c);
      this.drawFrog();
      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: 'drawFrog',
    value: function drawFrog() {
      this.c.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");

var frogImg = new Image();
frogImg.src = '../images/frog.png';

var game = new Game(c, frogImg);
game.gameLoop();

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaGFyYWN0ZXIiLCJpbWciLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiRnJvZyIsInJlcXVpcmUiLCJFbmVtaWVzIiwiQ2FyIiwiR2FtZSIsImltYWdlIiwiZ2FtZUxvb3AiLCJiaW5kIiwiZHJhd0Zyb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZnJvZ0ltZyIsIkltYWdlIiwic3JjIiwiZ2FtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FB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QUVBLElBQUljLFVBQVUsSUFBSUMsS0FBSixFQUFkO0FBQ0FELFFBQVFFLEdBQVIsR0FBYyxvQkFBZDs7QUFFQSxJQUFNQyxPQUFPLElBQUlkLElBQUosQ0FBU3RCLENBQVQsRUFBWWlDLE9BQVosQ0FBYjtBQUNBRyxLQUFLWixRQUFMOztBQUdBOztBQUVBOztBQUVBOzs7QUFrQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEscUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCIvL0dyYXNzXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IChjKSA9PiB7XG5jLmZpbGxTdHlsZSA9IFwiIzRDQTQzMlwiO1xuYy5maWxsUmVjdCgwLCA2NTAsIDEyMDAsIDUwKTtcbmMuZmlsbFJlY3QoMCwgMzUwLCAxMjAwLCA1MCk7XG5cbi8vUm9hZFxuXG5jLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmMuZmlsbFJlY3QoMCwgNDAwLCAxMjAwLCAyNTApO1xuXG4vLyBXYXRlciBcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG4gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiLy8gdmFyIENoYXJhY3RlciA9IHJlcXVpcmUoJy4uL2xpYi9FbmVtaWVzLmpzJyk7XG5cbi8vIC8vIGNsYXNzIENhciB7XG4vLyAvLyAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbi8vIC8vICAgICB0aGlzLnggPSB4O1xuLy8gLy8gICAgIHRoaXMueSA9IHk7XG4vLyAvLyAgIH1cbi8vIC8vIH1cblxuLy8gZnVuY3Rpb24gQ2FyKGhlaWdodCwgd2lkdGgsIHgsIHkpIHtcbi8vICAgdGhpcy54ID0geDtcbi8vICAgdGhpcy55ID0geTtcbi8vIH1cblxuXG4vLyAvLyBjbGFzcyBFbmVtaWVzIHtcbi8vIC8vICAgY29uc3RydWN0b3IoaW1nLCB4LCB5KVxuLy8gLy8gICB0aGlzLmltZyA9IFxuLy8gLy8gfVxuXG4vLyBjYXJJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYy5kcmF3SW1hZ2UoY2FySW1nLCAxMCwgNjAwLCA1MCwgNTApXG4vLyB9XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQ2FyOyIsImNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGltZywgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMuaW1nID0gaW1nO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCxcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXI7IiwiLy8gdmFyIGNhckltZyA9IG5ldyBJbWFnZSgpO1xuLy8gY2FySW1nLnNyYyA9IFwiaW1hZ2VzL2Nhci5wbmdcIjtcbi8vIHZhciB4ID0geDtcbi8vIHZhciB5ID0geTtcblxuLy8gY2xhc3MgQ2FyIHtcbi8vICAgY29uc3RydWN0b3IoeCwgeSkge1xuLy8gICAgIHRoaXMueCA9IHg7XG4vLyAgICAgdGhpcy55ID0geTtcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBDYXIoY2FySW1nLCBoZWlnaHQsIHdpZHRoLCB4LCB5KSB7XG4vLyAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4vLyAgIHRoaXMud2lkdGggPSA2MDtcbi8vIH1cblxuXG4vLyAvLyBjbGFzcyBFbmVtaWVzIHtcbi8vIC8vICAgY29uc3RydWN0b3IoaW1nLCB4LCB5KVxuLy8gLy8gICB0aGlzLmltZyA9IFxuLy8gLy8gfVxuXG4vLyBjYXJJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYy5kcmF3SW1hZ2UoY2FySW1nLCAxMCwgNjAwLCA1MCwgNTApXG4vLyB9XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQ2FyOyIsImNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL0NoYXJhY3Rlci5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cblxuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAxMDtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2FtZUxvb3AoKSB7XG4gICAgZHJhd0JhY2tncm91bmQodGhpcy5jKVxuICAgIHRoaXMuZHJhd0Zyb2coKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgfSAgIFxuXG4gIGRyYXdGcm9nKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKVxuICB9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcblxudmFyIGZyb2dJbWcgPSBuZXcgSW1hZ2UoKTtcbmZyb2dJbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjLCBmcm9nSW1nKTtcbmdhbWUuZ2FtZUxvb3AoKSBcblxuXG4vLyBnYW1lLmRyYXdGcm9nKClcblxuLy9Gcm9nIGMsIGhlaWdodCwgd2lkdGhcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUuZ2FtZUxvb3ApO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IHggPSBjLnhcbi8vIGxldCB5ID0gYy55XG5cbi8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4vLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgYy5jbGVhclJlY3QoeCwgeSwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG4vLyB9O1xuXG5cbi8vTW92ZW1lbnRcblxuXG4vLyBhbmltYXRlKCk7ICBcblxuLy8gdmFyIG1vdmVGcm9nID0gW107XG5cbi8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICAgIGMuY2xlYXJSZWN0KDAsIDAgLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodFxuLy8gICAgICAgICApO1xuXG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3ZlRnJvZy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgbW92ZUZyb2dbaV0udXBkYXRlKClcbi8vIH07XG5cblxuLy9pbmRleC5qcyB3aWxsIHJ1biB0aGUgZ2FtZSBsb29wLiBcblxuLy9HYW1lIGNsYXNzIGlzIGdvaW5nIHRvIGJlIHRvcCBsZXZlbCAtIHdoZXJlIHdlIGNyZWF0ZSBmcm9nLCBlbmVtaWVzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=