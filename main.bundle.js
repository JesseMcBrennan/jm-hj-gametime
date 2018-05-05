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

  function Car(x, y, width, height) {
    _classCallCheck(this, Car);

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, x, y, width, height));

    _this.x = x; //10
    _this.y = y; //555
    _this.width = width; //40
    _this.height = height; //70
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

var Enemies = function Enemies(c, x, y, height, width) {
  _classCallCheck(this, Enemies);

  // this.img = img;
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

    this.car = new Car(10, 555, 40, 70);
    this.car2 = new Car(400, 505, 40, 70);
    this.car3 = new Car(250, 605, 40, 70);

    this.log = new Log(10, 40, 70, 100);

    this.truck = new Truck(10, 380, 90, 140);
    this.truck2 = new Truck(400, 430, 90, 140);
  }

  _createClass(Game, [{
    key: 'drawCharacters',
    value: function drawCharacters(c) {
      this.log.drawLog(c);

      this.car.drawCar(c);
      this.car2.drawCar(c);
      this.car3.drawCar(c);

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

  function Log(x, y, width, height) {
    _classCallCheck(this, Log);

    var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, x, y, width, height));

    _this.x = x; //10
    _this.y = y; //50
    _this.width = width; //50
    _this.height = height; //70
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

  function Truck(x, y, width, height) {
    _classCallCheck(this, Truck);

    var _this = _possibleConstructorReturn(this, (Truck.__proto__ || Object.getPrototypeOf(Truck)).call(this, x, y, width, height));

    _this.x = x; //10
    _this.y = y; //380
    _this.width = width; //90
    _this.height = height; //140
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
      if (this.x < -150) {
        this.x = 1200;
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
  game.car2.move(c);
  game.car3.move(c);
  game.log.move(c);
  game.truck.move(c);
  game.truck2.move(c); //draw all characters
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkdhbWUiLCJGcm9nIiwiSW5kZXgiLCJMb2ciLCJUcnVjayIsImltYWdlIiwiZnJvZyIsImNhciIsImNhcjIiLCJjYXIzIiwibG9nIiwidHJ1Y2siLCJ0cnVjazIiLCJkcmF3TG9nIiwiZHJhd1RydWNrIiwiZHJhd0Zyb2ciLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJkcmF3Q2hhcmFjdGVycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiLCJtb3ZlRnJvZyIs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dEI7QUFDQUosT0FBS25CLEdBQUwsQ0FBUzJCLElBQVQsQ0FBYzNELENBQWQ7QUFDQW1ELE9BQUtsQixJQUFMLENBQVUwQixJQUFWLENBQWUzRCxDQUFmO0FBQ0FtRCxPQUFLakIsSUFBTCxDQUFVeUIsSUFBVixDQUFlM0QsQ0FBZjtBQUNBbUQsT0FBS2hCLEdBQUwsQ0FBU3dCLElBQVQsQ0FBYzNELENBQWQ7QUFDQW1ELE9BQUtmLEtBQUwsQ0FBV3VCLElBQVgsQ0FBZ0IzRCxDQUFoQjtBQUNBbUQsT0FBS2QsTUFBTCxDQUFZc0IsSUFBWixDQUFpQjNELENBQWpCLEVBWHFCLENBV0E7QUFDdEI7O0FBSUQsU0FBUzJDLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCVSxPQUFLUyxRQUFMLENBQWNuQixLQUFkO0FBQ0Q7O0FBRUQsU0FBU2EsU0FBVCxDQUFtQk8sQ0FBbkIsRUFBc0I7QUFDcEJBLElBQUVDLGNBQUY7QUFDRDs7QUFJRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQXNDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxxRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG5jLmZpbGxTdHlsZSA9IFwiIzk2Nzk2N1wiO1xuYy5maWxsUmVjdCgwLDAsIDEyMDAsIDUwKVxuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDQ1MCk7XG5jLmxpbmVUbygxMjAwLCA0NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1MDApO1xuYy5saW5lVG8oMTIwMCwgNTAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTUwKTtcbmMubGluZVRvKDEyMDAsIDU1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDYwMCk7XG5jLmxpbmVUbygxMjAwLCA2MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcbiBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTU1XG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy80MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy83MFxuICB0aGlzLmRyYXdDYXIgPSB0aGlzLmRyYXdDYXIuYmluZCh0aGlzKVxufVxuXG5kcmF3Q2FyKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy92b2xrc3dhZ29uLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICByZXR1cm4gdGhpczsgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCArPSAzO1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3RvcihjLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgLy8gdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxuICAvLyBtb3ZlKCkge1xuICAvLyAgIHRoaXMueCArPSAxO1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgSW5kZXggPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuXG4vLyB2YXIgY2FyID0gbmV3IENhcigxMCwgNTUwLCA1MCwgNTApXG4vLyB2YXIgbG9nID0gbmV3IExvZygxMCwgNTAsIDcwLCA1MClcblxuLy8gdmFyIGVuZW1pZXMgPSBbY2FyLCBsb2ddO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMTA7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKCk7XG5cbiAgICB0aGlzLmNhciA9IG5ldyBDYXIoMTAsIDU1NSwgNDAsIDcwKTtcbiAgICB0aGlzLmNhcjIgPSBuZXcgQ2FyKDQwMCwgNTA1LCA0MCwgNzApO1xuICAgIHRoaXMuY2FyMyA9IG5ldyBDYXIoMjUwLCA2MDUsIDQwLCA3MCk7XG5cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2coMTAsIDQwLCA3MCwgMTAwKTtcblxuICAgIHRoaXMudHJ1Y2sgPSBuZXcgVHJ1Y2soMTAsIDM4MCwgOTAsIDE0MCk7XG4gICAgdGhpcy50cnVjazIgPSBuZXcgVHJ1Y2soNDAwLCA0MzAsIDkwLCAxNDApO1xuICB9XG5cbiAgZHJhd0NoYXJhY3RlcnMoYykge1xuICAgIHRoaXMubG9nLmRyYXdMb2coYylcblxuICAgIHRoaXMuY2FyLmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjIuZHJhd0NhcihjKVxuICAgIHRoaXMuY2FyMy5kcmF3Q2FyKGMpXG5cbiAgICB0aGlzLnRydWNrLmRyYXdUcnVjayhjKVxuICAgIHRoaXMudHJ1Y2syLmRyYXdUcnVjayhjKVxuICAgIHRoaXMuZnJvZy5kcmF3RnJvZyhjKVxuICB9XG4gXG4gIG1vdmVGcm9nKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7IHsgICBcbiAgICB9XG4gIH1cbiAgXG4gIH1cbn1cblxufVxufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggKz0gNDtcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgVHJ1Y2sgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgLy8xMFxuICB0aGlzLnkgPSB5OyAvLzM4MFxuICB0aGlzLndpZHRoID0gd2lkdGg7IC8vOTBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vMTQwXG4gIHRoaXMuZHJhd1RydWNrID0gdGhpcy5kcmF3VHJ1Y2suYmluZCh0aGlzKVxufVxuXG5kcmF3VHJ1Y2soYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3RydWNrMi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggLT0gNDtcbiAgICBpZiAodGhpcy54IDwgLTE1MCkgeyBcbiAgICAgIHRoaXMueCA9IDEyMDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRydWNrOyIsImNsYXNzIEZyb2cge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy54ID0gNjAwO1xuICAgIHRoaXMueSA9IDY1MDtcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgfVxuXG4gICBkcmF3RnJvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0gNTA7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcbiAgICB0aGlzLnkgKz0gNTA7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICB0aGlzLnggLT0gNTA7XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDUwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJylcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cblxubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcbi8vIHZhciBjYXIgPSBuZXcgQ2FyKCk7XG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChjYXIpIHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy9jbGVhciwgZHJhdywgbW92ZSBsb29wIFxuICBkcmF3QmFja2dyb3VuZChjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUubG9nLm1vdmUoYyk7XG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG59O1xuXG5cblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlRG93bik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlTGVmdCk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlUmlnaHQpO1xuXG4vLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4vLyAgIGdhbWUgPSBuZXcgR2FtZSgpXG4vLyB9XG5cbi8vIHZhciBmcm9nID0gbmV3IEZyb2coZnJvZ0ltZywgNjAwLCA2NTAsIDUwLCA1MCk7XG4vLyB2YXIgZnJvZ0ltZyA9IG5ldyBJbWFnZSgpO1xuLy8gZnJvZ0ltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcblxuLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGMsIGZyb2dJbWcpO1xuLy8gZ2FtZS5nYW1lTG9vcCgpIFxuLy8gZ2FtZS5kcmF3RnJvZyhmcm9nSW1nKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgeCA9IGMueFxuLy8gbGV0IHkgPSBjLnlcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICBjLmNsZWFyUmVjdCh4LCB5LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbi8vIH07XG5cblxuLy9Nb3ZlbWVudFxuXG5cbi8vIGFuaW1hdGUoKTsgIFxuXG4vLyB2YXIgbW92ZUZyb2cgPSBbXTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0XG4vLyAgICAgICAgICk7XG5cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVGcm9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBtb3ZlRnJvZ1tpXS51cGRhdGUoKVxuLy8gfTtcblxuXG4vL2luZGV4LmpzIHdpbGwgcnVuIHRoZSBnYW1lIGxvb3AuIFxuXG4vL0dhbWUgY2xhc3MgaXMgZ29pbmcgdG8gYmUgdG9wIGxldmVsIC0gd2hlcmUgd2UgY3JlYXRlIGZyb2csIGVuZW1pZXNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==