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

var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");

var Car = function (_Enemies) {
  _inherits(Car, _Enemies);

  function Car(c, img, x, y, width, height) {
    _classCallCheck(this, Car);

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, img, x, y, width, height));

    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    _this.drawCar = _this.drawCar.bind(_this);
    return _this;
  }

  _createClass(Car, [{
    key: 'drawCar',
    value: function drawCar(c) {
      var img = new Image();
      img.src = '../images/volkswagon.png';
      c.drawImage(img, this.x, this.y, this.height, this.width);
      return this;
    }
  }, {
    key: 'move',
    value: function move() {
      this.x += 3;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }]);

  return Car;
}(Enemies);

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

var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");

var Enemies = function Enemies(img, c, x, y, height, width) {
  _classCallCheck(this, Enemies);

  this.img = img;
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
}
// move() {
//   this.x += 1;
//   return this;
// }
;

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
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");
var Index = __webpack_require__(/*! ./index.js */ "./lib/index.js");
var Car = __webpack_require__(/*! ./Car.js */ "./lib/Car.js");
var Log = __webpack_require__(/*! ./Log.js */ "./lib/Log.js");
var Truck = __webpack_require__(/*! ./Truck.js */ "./lib/Truck.js");

// var car = new Car(10, 550, 50, 50)
// var log = new Log(10, 50, 70, 50)

// var enemies = [car, log];

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.c = c;
    this.x = 0;
    this.y = 10;
    this.image = image;
    this.frog = new Frog();
    this.car = new Car(10, 555, 70, 40);
    this.log = new Log();
    this.truck = new Truck(10, 400, 70, 50);
    this.truck2 = new Truck();
  }

  _createClass(Game, [{
    key: 'drawCharacters',
    value: function drawCharacters(c) {
      this.log.drawLog(c);
      this.car.drawCar(c);
      this.truck.drawTruck(c);
      this.truck2.drawTruck(c);
      this.frog.drawFrog(c);
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event) {
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

/***/ "./lib/Log.js":
/*!********************!*\
  !*** ./lib/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");

var Log = function (_Enemies) {
  _inherits(Log, _Enemies);

  function Log(c, img, x, y, width, height) {
    _classCallCheck(this, Log);

    var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, img, x, y, width, height));

    _this.x = 10;
    _this.y = 50;
    _this.height = 70;
    _this.width = 50;
    _this.drawLog = _this.drawLog.bind(_this);
    return _this;
  }

  _createClass(Log, [{
    key: 'drawLog',
    value: function drawLog(c) {
      var img = new Image();
      img.src = '../images/log.svg';
      c.drawImage(img, this.x, this.y, this.height, this.width);
    }
  }, {
    key: 'move',
    value: function move() {
      this.x += 4;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }]);

  return Log;
}(Enemies);

module.exports = Log;

/***/ }),

/***/ "./lib/Truck.js":
/*!**********************!*\
  !*** ./lib/Truck.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");

var Truck = function (_Enemies) {
  _inherits(Truck, _Enemies);

  function Truck(c, img, x, y, width, height) {
    _classCallCheck(this, Truck);

    var _this = _possibleConstructorReturn(this, (Truck.__proto__ || Object.getPrototypeOf(Truck)).call(this, img, x, y, width, height));

    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    _this.drawTruck = _this.drawTruck.bind(_this);
    return _this;
  }

  _createClass(Truck, [{
    key: 'drawTruck',
    value: function drawTruck(c) {
      var img = new Image();
      img.src = '../images/truck2.png';
      c.drawImage(img, this.x, this.y, this.height, this.width);
    }
  }, {
    key: 'move',
    value: function move() {
      this.x -= 4;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }]);

  return Truck;
}(Enemies);

module.exports = Truck;

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
// var car = new Car();
gameLoop();

function gameLoop(car) {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.drawCharacters(c);
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
  game.car.move(c);
  game.log.move(c);
  game.truck.move(c); //draw all characters
};

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJpbWciLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkdhbWUiLCJGcm9nIiwiSW5kZXgiLCJMb2ciLCJUcnVjayIsImltYWdlIiwiZnJvZyIsImNhciIsImxvZyIsInRydWNrIiwidHJ1Y2syIiwiZHJhd0xvZyIsImRyYXdUcnVjayIsImRyYXdGcm9nIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZHJhd0NoYXJhY3RlcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwibW92ZUZyb2ciLCJlIiwicHJldmVudERl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O0FBc0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLHFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXdCYWNrZ3JvdW5kOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB0aGlzLmRyYXdDYXIgPSB0aGlzLmRyYXdDYXIuYmluZCh0aGlzKVxufVxuXG5kcmF3Q2FyKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy92b2xrc3dhZ29uLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICByZXR1cm4gdGhpczsgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCArPSAzO1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3RvcihpbWcsIGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG4gIC8vIG1vdmUoKSB7XG4gIC8vICAgdGhpcy54ICs9IDE7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBFbmVtaWVzOyIsImNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5jb25zdCBJbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcbmNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgVHJ1Y2sgPSByZXF1aXJlKCcuL1RydWNrLmpzJyk7XG5cbi8vIHZhciBjYXIgPSBuZXcgQ2FyKDEwLCA1NTAsIDUwLCA1MClcbi8vIHZhciBsb2cgPSBuZXcgTG9nKDEwLCA1MCwgNzAsIDUwKVxuXG4vLyB2YXIgZW5lbWllcyA9IFtjYXIsIGxvZ107XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAxMDtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5mcm9nID0gbmV3IEZyb2coKTtcbiAgICB0aGlzLmNhciA9IG5ldyBDYXIoMTAsIDU1NSwgNzAsIDQwKTtcbiAgICB0aGlzLmxvZyA9IG5ldyBMb2coKTtcbiAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCA0MDAsIDcwLCA1MCk7XG4gICAgdGhpcy50cnVjazIgPSBuZXcgVHJ1Y2soKTtcbiAgfVxuXG4gIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICB0aGlzLmxvZy5kcmF3TG9nKGMpXG4gICAgdGhpcy5jYXIuZHJhd0NhcihjKVxuICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazIuZHJhd1RydWNrKGMpXG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gIH1cbiBcbiAgbW92ZUZyb2coZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzgpe1xuICAgIHRoaXMuZnJvZy5tb3ZlVXAoKTtcbiAgICB9IGVsc2Uge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCl7XG4gICAgdGhpcy5mcm9nLm1vdmVEb3duKCk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLmZyb2cubW92ZUxlZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMuZnJvZy5tb3ZlUmlnaHQoKTsgeyAgIFxuICAgIH1cbiAgfVxuICBcbiAgfVxufVxuXG59XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgTG9nIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSAxMDtcbiAgdGhpcy55ID0gNTA7XG4gIHRoaXMuaGVpZ2h0ID0gNzA7XG4gIHRoaXMud2lkdGggPSA1MDtcbiAgdGhpcy5kcmF3TG9nID0gdGhpcy5kcmF3TG9nLmJpbmQodGhpcylcbn1cblxuZHJhd0xvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvbG9nLnN2Zyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3RvcihjLCBpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcnVjazsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMueCA9IDYwMDtcbiAgICB0aGlzLnkgPSA2NTA7XG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuXG5cbmxldCBnYW1lOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG4vLyB2YXIgY2FyID0gbmV3IENhcigpO1xuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vY2xlYXIsIGRyYXcsIG1vdmUgbG9vcCBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIC8vIGdhbWUuYW5pbWF0ZSgpOyAvL21vdmVzIGVuZW1pZXNcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgZ2FtZS5jYXIubW92ZShjKTtcbiAgZ2FtZS5sb2cubW92ZShjKTtcbiAgZ2FtZS50cnVjay5tb3ZlKGMpOyAvL2RyYXcgYWxsIGNoYXJhY3RlcnNcbn07XG5cblxuXG5mdW5jdGlvbiBtb3ZlVXAoZXZlbnQpIHtcbiAgZ2FtZS5tb3ZlRnJvZyhldmVudCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVEb3duKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVMZWZ0KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVSaWdodCk7XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbi8vICAgZ2FtZSA9IG5ldyBHYW1lKClcbi8vIH1cblxuLy8gdmFyIGZyb2cgPSBuZXcgRnJvZyhmcm9nSW1nLCA2MDAsIDY1MCwgNTAsIDUwKTtcbi8vIHZhciBmcm9nSW1nID0gbmV3IEltYWdlKCk7XG4vLyBmcm9nSW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuXG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoYywgZnJvZ0ltZyk7XG4vLyBnYW1lLmdhbWVMb29wKCkgXG4vLyBnYW1lLmRyYXdGcm9nKGZyb2dJbWcpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCB4ID0gYy54XG4vLyBsZXQgeSA9IGMueVxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgIGMuY2xlYXJSZWN0KHgsIHksIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuLy8gfTtcblxuXG4vL01vdmVtZW50XG5cblxuLy8gYW5pbWF0ZSgpOyAgXG5cbi8vIHZhciBtb3ZlRnJvZyA9IFtdO1xuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgICBjLmNsZWFyUmVjdCgwLCAwICwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHRcbi8vICAgICAgICAgKTtcblxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW92ZUZyb2cubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIG1vdmVGcm9nW2ldLnVwZGF0ZSgpXG4vLyB9O1xuXG5cbi8vaW5kZXguanMgd2lsbCBydW4gdGhlIGdhbWUgbG9vcC4gXG5cbi8vR2FtZSBjbGFzcyBpcyBnb2luZyB0byBiZSB0b3AgbGV2ZWwgLSB3aGVyZSB3ZSBjcmVhdGUgZnJvZywgZW5lbWllc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9