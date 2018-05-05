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

var Frog = __webpack_require__(/*! ./frog.js */ "./lib/frog.js");
var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");
var Car = __webpack_require__(/*! ./Car.js */ "./lib/Car.js");
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");
var Index = __webpack_require__(/*! ./index.js */ "./lib/index.js");

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;
    this.frog = new Frog();
  }

  _createClass(Game, [{
    key: 'drawCharacters',
    value: function drawCharacters(c) {
      this.frog.drawFrog(c);
    }
  }, {
    key: 'drawFrog',
    value: function drawFrog(frogImg) {
      this.c.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(keyCode) {
      if (keyCode === 38) {
        this.frog.moveUp();
      } else {
        if (keyCode === 40) {
          this.frog.moveDown();
        } else {
          if (keyCode === 37) {
            this.frog.moveLeft();
          } else {
            if (keyCode === 39) {
              this.frog.moveRight();{}
            }
          }
        }
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/frog.js":
/*!*********************!*\
  !*** ./lib/frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = __webpack_require__(/*! ../lib/Character.js */ "./lib/Character.js");

var Frog = function () {
  function Frog(c) {
    _classCallCheck(this, Frog);

    this.x = 600;
    this.y = 650;
    this.height = 50;
    this.width = 50;
  }

  _createClass(Frog, [{
    key: 'drawFrog',
    value: function drawFrog(c) {
      var img = new Image();
      img.src = '../images/frog.png';
      c.drawImage(img, this.x, this.y, this.height, this.width);
      // this.c.drawImage(
      //   this.image, 
      //   this.x, 
      //   this.y, 
      //   this.height, 
      //   this.width)
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      this.y -= 50;
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      this.y += 50;
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      this.x -= 50;
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      this.x += 50;
    }
  }]);

  return Frog;
}();

// var frogImg = new Image();
//    frogImg.src = '../images/frog.png';

module.exports = Frog;

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
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");
var game = void 0;

window.addEventListener('keypress', moveUp);
window.addEventListener('keypress', moveDown);

game = new Game();
gameLoop();

function gameLoop() {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.drawCharacters(c); //draw all characters
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
}

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaGFyYWN0ZXIiLCJpbWciLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiRnJvZyIsInJlcXVpcmUiLCJFbmVtaWVzIiwiQ2FyIiwiSW5kZXgiLCJHYW1lIiwiaW1hZ2UiLCJmcm9nIiwiZHJhd0Zyb2ciLCJmcm9nSW1nIiwiZHJhd0ltYWdlIiwia2V5Q29kZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJJbWFnZSIsInNyYyIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZHJhd0NoYXJhY3RlcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFD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VSxFQUFWO0FBQ0Q7Ozs7OztBQUdGO0FBQ0E7O0FBRURKLE9BQU9DLE9BQVAsR0FBaUJPLElBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDM0NBLElBQUlrQixTQUFTQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxJQUFJdEMsSUFBSW9DLE9BQU9HLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBUjtBQUNBLElBQU1oQixPQUFPLG1CQUFBSixDQUFRLGdDQUFSLENBQWI7QUFDQSxJQUFNcEIsaUJBQWlCLG1CQUFBb0IsQ0FBUSw0Q0FBUixDQUF2QjtBQUNBLElBQUlxQixhQUFKOztBQUVBQyxPQUFPQyxnQkFBUCxDQUF3QixVQUF4QixFQUFvQ1osTUFBcEM7QUFDQVcsT0FBT0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0NYLFFBQXBDOztBQUVBUyxPQUFPLElBQUlqQixJQUFKLEVBQVA7QUFDQW9COztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIzQyxJQUFFNEMsU0FBRixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCUixPQUFPbkIsS0FBekIsRUFBZ0NtQixPQUFPcEIsTUFBdkMsRUFEa0IsQ0FDOEI7QUFDaERqQixpQkFBZUMsQ0FBZjtBQUNBd0MsT0FBS0ssY0FBTCxDQUFvQjdDLENBQXBCLEVBSGtCLENBR007QUFDeEI7QUFDQThDLHdCQUFzQkgsUUFBdEI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBc0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLHFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXdCYWNrZ3JvdW5kOyIsIi8vIHZhciBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuLi9saWIvRW5lbWllcy5qcycpO1xuXG4vLyAvLyBjbGFzcyBDYXIge1xuLy8gLy8gICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4vLyAvLyAgICAgdGhpcy54ID0geDtcbi8vIC8vICAgICB0aGlzLnkgPSB5O1xuLy8gLy8gICB9XG4vLyAvLyB9XG5cbi8vIGZ1bmN0aW9uIENhcihoZWlnaHQsIHdpZHRoLCB4LCB5KSB7XG4vLyAgIHRoaXMueCA9IHg7XG4vLyAgIHRoaXMueSA9IHk7XG4vLyB9XG5cblxuLy8gLy8gY2xhc3MgRW5lbWllcyB7XG4vLyAvLyAgIGNvbnN0cnVjdG9yKGltZywgeCwgeSlcbi8vIC8vICAgdGhpcy5pbWcgPSBcbi8vIC8vIH1cblxuLy8gY2FySW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGMuZHJhd0ltYWdlKGNhckltZywgMTAsIDYwMCwgNTAsIDUwKVxuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENhcjsiLCJjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihpbWcsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQsXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyOyIsIi8vIHZhciBjYXJJbWcgPSBuZXcgSW1hZ2UoKTtcbi8vIGNhckltZy5zcmMgPSBcImltYWdlcy9jYXIucG5nXCI7XG4vLyB2YXIgeCA9IHg7XG4vLyB2YXIgeSA9IHk7XG5cbi8vIGNsYXNzIENhciB7XG4vLyAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbi8vICAgICB0aGlzLnggPSB4O1xuLy8gICAgIHRoaXMueSA9IHk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gQ2FyKGNhckltZywgaGVpZ2h0LCB3aWR0aCwgeCwgeSkge1xuLy8gICB0aGlzLmhlaWdodCA9IDQwO1xuLy8gICB0aGlzLndpZHRoID0gNjA7XG4vLyB9XG5cblxuLy8gLy8gY2xhc3MgRW5lbWllcyB7XG4vLyAvLyAgIGNvbnN0cnVjdG9yKGltZywgeCwgeSlcbi8vIC8vICAgdGhpcy5pbWcgPSBcbi8vIC8vIH1cblxuLy8gY2FySW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGMuZHJhd0ltYWdlKGNhckltZywgMTAsIDYwMCwgNTAsIDUwKVxuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENhcjsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcbmNvbnN0IEluZGV4ID0gcmVxdWlyZSgnLi9pbmRleC5qcycpO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMTA7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKCk7XG4gIH1cblxuICBkcmF3Q2hhcmFjdGVycyhjKSB7XG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gIH1cblxuICBkcmF3RnJvZyhmcm9nSW1nKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpXG4gIH1cblxuICBtb3ZlRnJvZyhrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleUNvZGUgPT09IDQwKXtcbiAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLmZyb2cubW92ZUxlZnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7IHtcbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgfVxufVxuXG59XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsInZhciBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuLi9saWIvQ2hhcmFjdGVyLmpzJyk7XG5cbmNsYXNzIEZyb2cge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy54ID0gNjAwO1xuICAgIHRoaXMueSA9IDY1MDtcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgfVxuXG4gICBkcmF3RnJvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcbiAgICAvLyB0aGlzLmMuZHJhd0ltYWdlKFxuICAgIC8vICAgdGhpcy5pbWFnZSwgXG4gICAgLy8gICB0aGlzLngsIFxuICAgIC8vICAgdGhpcy55LCBcbiAgICAvLyAgIHRoaXMuaGVpZ2h0LCBcbiAgICAvLyAgIHRoaXMud2lkdGgpXG4gICBcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0gNTA7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcbiAgICB0aGlzLnkgKz0gNTA7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICB0aGlzLnggLT0gNTA7XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDUwO1xuICB9XG59XG5cbiAvLyB2YXIgZnJvZ0ltZyA9IG5ldyBJbWFnZSgpO1xuIC8vICAgIGZyb2dJbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlVXApO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgbW92ZURvd24pO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvL2NsZWFyLCBkcmF3LCBtb3ZlIGxvb3AgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmRyYXdDaGFyYWN0ZXJzKGMpOyAvL2RyYXcgYWxsIGNoYXJhY3RlcnNcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG59XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbi8vICAgZ2FtZSA9IG5ldyBHYW1lKClcbi8vIH1cblxuLy8gdmFyIGZyb2cgPSBuZXcgRnJvZyhmcm9nSW1nLCA2MDAsIDY1MCwgNTAsIDUwKTtcbi8vIHZhciBmcm9nSW1nID0gbmV3IEltYWdlKCk7XG4vLyBmcm9nSW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuXG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoYywgZnJvZ0ltZyk7XG4vLyBnYW1lLmdhbWVMb29wKCkgXG4vLyBnYW1lLmRyYXdGcm9nKGZyb2dJbWcpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCB4ID0gYy54XG4vLyBsZXQgeSA9IGMueVxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgIGMuY2xlYXJSZWN0KHgsIHksIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuLy8gfTtcblxuXG4vL01vdmVtZW50XG5cblxuLy8gYW5pbWF0ZSgpOyAgXG5cbi8vIHZhciBtb3ZlRnJvZyA9IFtdO1xuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgICBjLmNsZWFyUmVjdCgwLCAwICwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHRcbi8vICAgICAgICAgKTtcblxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW92ZUZyb2cubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIG1vdmVGcm9nW2ldLnVwZGF0ZSgpXG4vLyB9O1xuXG5cbi8vaW5kZXguanMgd2lsbCBydW4gdGhlIGdhbWUgbG9vcC4gXG5cbi8vR2FtZSBjbGFzcyBpcyBnb2luZyB0byBiZSB0b3AgbGV2ZWwgLSB3aGVyZSB3ZSBjcmVhdGUgZnJvZywgZW5lbWllc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9