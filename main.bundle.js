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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = function (_Enemies) {
  _inherits(Car, _Enemies);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
  }

  _createClass(Car, [{
    key: 'super',
    value: function _super(c) {
      this.x = 0;
      this.y = 10;
      this.height = 50;
      this.width = 50;
    }
  }, {
    key: 'drawCar',
    value: function drawCar(c) {
      var img = new Image();
      img.src = '../images/Car.png';
      c.drawImage(img, this.x, this.y, this.height, this.width);
    }
  }]);

  return Car;
}(Enemies(height, width, x, y));

module.exports = Car;

/***/ }),

/***/ "./lib/Enemies.js":
/*!************************!*\
  !*** ./lib/Enemies.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemies = function Enemies(c, x, y, height, width) {
  _classCallCheck(this, Enemies);

  this.x = 600;
  this.y = 10;
  this.height = height;
  this.width = width;
};

module.exports = Enemies;

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
      this.enemies.drawCar(c);
    }
  }, {
    key: 'drawFrog',
    value: function drawFrog() {
      this.c.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event) {
      // console.log('hi');
      if (event.keyCode === 38) {
        this.frog.moveUp();
      } else {
        if (event.keyCode === 40) {
          this.frog.moveDown();
        } else {
          if (event.keyCode === 37) {
            this.frog.moveLeft();
          } else {
            if (event.keyCode === 39) {
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
var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");
var game = void 0;

window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();
gameLoop();

function gameLoop() {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.drawCharacters(c); //draw all characters
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
}

function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
  console.log('hi');
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2FyIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImltZyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiRW5lbWllcyIsIkZyb2ciLCJyZXF1aXJlIiwiSW5kZXgiLCJHYW1lIiwiaW1hZ2UiLCJmcm9nIiwiZHJhd0Zyb2ciLCJlbmVtaWVzIiwiZHJhd0NhciIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXdDaGFyYWN0ZXJzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZUZyb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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bEIsS0FBZDtBQUNEOztBQUVELFNBQVNhLFNBQVQsQ0FBbUJNLENBQW5CLEVBQXNCO0FBQ3BCQSxJQUFFQyxjQUFGO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7O0FBSUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFzQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEscUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCIvL0dyYXNzXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IChjKSA9PiB7XG5jLmZpbGxTdHlsZSA9IFwiIzRDQTQzMlwiO1xuYy5maWxsUmVjdCgwLCA2NTAsIDEyMDAsIDUwKTtcbmMuZmlsbFJlY3QoMCwgMzUwLCAxMjAwLCA1MCk7XG5cbi8vUm9hZFxuXG5jLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmMuZmlsbFJlY3QoMCwgNDAwLCAxMjAwLCAyNTApO1xuXG4vLyBXYXRlciBcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG4gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzKGhlaWdodCwgd2lkdGgsIHgsIHkpIHtcbiAgc3VwZXIoYykge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAxMDtcbiAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgdGhpcy53aWR0aCA9IDUwO1xufVxuXG5kcmF3Q2FyKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9DYXIucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7IiwiXG5jbGFzcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoYywgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IDYwMDtcbiAgICB0aGlzLnkgPSAxMDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5jb25zdCBJbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDEwO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZygpO1xuICB9XG5cbiAgZHJhd0NoYXJhY3RlcnMoYykge1xuICAgIHRoaXMuZnJvZy5kcmF3RnJvZyhjKVxuICAgIHRoaXMuZW5lbWllcy5kcmF3Q2FyKGMpXG4gIH1cblxuICBkcmF3RnJvZygpIHtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aClcbiAgfVxuXG4gIG1vdmVGcm9nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpJyk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7IHsgICBcbiAgICB9XG4gIH1cbiAgXG4gIH1cbn1cblxufVxufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMueCA9IDYwMDtcbiAgICB0aGlzLnkgPSA2NTA7XG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvL2NsZWFyLCBkcmF3LCBtb3ZlIGxvb3AgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmRyYXdDaGFyYWN0ZXJzKGMpOyAvL2RyYXcgYWxsIGNoYXJhY3RlcnNcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG59XG5cbmZ1bmN0aW9uIG1vdmVVcChldmVudCkge1xuICBnYW1lLm1vdmVGcm9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZygnaGknKTtcbn1cblxuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVEb3duKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVMZWZ0KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVSaWdodCk7XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbi8vICAgZ2FtZSA9IG5ldyBHYW1lKClcbi8vIH1cblxuLy8gdmFyIGZyb2cgPSBuZXcgRnJvZyhmcm9nSW1nLCA2MDAsIDY1MCwgNTAsIDUwKTtcbi8vIHZhciBmcm9nSW1nID0gbmV3IEltYWdlKCk7XG4vLyBmcm9nSW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuXG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoYywgZnJvZ0ltZyk7XG4vLyBnYW1lLmdhbWVMb29wKCkgXG4vLyBnYW1lLmRyYXdGcm9nKGZyb2dJbWcpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCB4ID0gYy54XG4vLyBsZXQgeSA9IGMueVxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgIGMuY2xlYXJSZWN0KHgsIHksIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuLy8gfTtcblxuXG4vL01vdmVtZW50XG5cblxuLy8gYW5pbWF0ZSgpOyAgXG5cbi8vIHZhciBtb3ZlRnJvZyA9IFtdO1xuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgICBjLmNsZWFyUmVjdCgwLCAwICwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHRcbi8vICAgICAgICAgKTtcblxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW92ZUZyb2cubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIG1vdmVGcm9nW2ldLnVwZGF0ZSgpXG4vLyB9O1xuXG5cbi8vaW5kZXguanMgd2lsbCBydW4gdGhlIGdhbWUgbG9vcC4gXG5cbi8vR2FtZSBjbGFzcyBpcyBnb2luZyB0byBiZSB0b3AgbGV2ZWwgLSB3aGVyZSB3ZSBjcmVhdGUgZnJvZywgZW5lbWllc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9