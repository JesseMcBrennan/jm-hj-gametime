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
    _this.cars = [];
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

/***/ "./lib/Collision.js":
/*!**************************!*\
  !*** ./lib/Collision.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// const Frog = require('./frog.js');
// const Car = require('./Car.js');

// var frog = {x: frogX, y: frogY, width: 50, height: 50};
// var car = {x: carX, y: carY, width: 40, height: 70};
// console.log(this)
// var car = new Car {x: 10,y: 555,width: 40,height: 70};


// if ()

// module.exports = Collision;


/***/ }),

/***/ "./lib/Enemies.js":
/*!************************!*\
  !*** ./lib/Enemies.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");

var Enemies = function () {
  function Enemies(c, x, y, height, width) {
    _classCallCheck(this, Enemies);

    // this.img = img;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.death = [];
  }

  _createClass(Enemies, [{
    key: 'moveSlowRight',
    value: function moveSlowRight() {
      this.x += 4;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }, {
    key: 'moveMediumRight',
    value: function moveMediumRight() {
      this.x += 5;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }, {
    key: 'moveFastRight',
    value: function moveFastRight() {
      this.x += 7;
      if (this.x > 1300) {
        this.x = -20;
      }
      return this;
    }

    // moveSlowLeft() {
    //   this.x -= 
    // }

    // moveSlowLeft() {
    //   this.x -=
    // }

  }]);

  return Enemies;
}();

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
var Collision = __webpack_require__(/*! ./Collision.js */ "./lib/Collision.js");
var numberOfLives = 3;
// var car = new Car(10, 550, 50, 50)
// var log = new Log(10, 50, 70, 50)

// var enemies = [car, log];

var Game = function () {
      function Game(c, image) {
            _classCallCheck(this, Game);

            this.frog = new Frog(600, 650, 50, 50);

            this.car = new Car(10, 605, 35, 45);
            this.car2 = new Car(400, 605, 35, 45);
            this.car3 = new Car(250, 605, 35, 45);

            this.car4 = new Car(10, 555, 35, 45);
            this.car5 = new Car(280, 555, 35, 45);
            this.car6 = new Car(-300, 555, 35, 45);

            this.car7 = new Car(90, 505, 35, 45);
            this.car8 = new Car(800, 505, 35, 45);
            this.car9 = new Car(60, 505, 35, 45);

            //first array of logs -- line one
            this.logLaneOne = new Log(10, 40, 70, 100);
            this.logLaneOne2 = new Log(370, 40, 70, 100);

            //second array of logs -- line two
            this.logLaneTwo = new Log(-200, 90, 70, 100);
            this.logLaneTwo2 = new Log(300, 90, 70, 100);
            this.logLaneTwo3 = new Log(650, 90, 70, 100);

            //third array of logs -- line three
            this.logLaneThree = new Log(-400, 140, 70, 100);
            this.logLaneThree2 = new Log(100, 140, 70, 100);

            //fourth array of logs -- line four
            this.log4 = new Log(-10, 190, 70, 100);
            this.log5 = new Log(-400, 190, 70, 100);

            //fifth array of logs -- line five
            this.log6 = new Log(-200, 290, 70, 100);

            //sixth array of logs -- line six
            this.log7 = new Log(-10, 230, 70, 100);

            this.truck = new Truck(10, 380, 90, 140);
            this.truck2 = new Truck(400, 430, 90, 140);
      }

      _createClass(Game, [{
            key: 'drawCharacters',
            value: function drawCharacters(c) {
                  this.logLaneOne.drawLog(c);
                  this.logLaneOne2.drawLog(c);

                  this.logLaneTwo.drawLog(c);
                  this.logLaneOne2.drawLog(c);
                  this.logLaneTwo3.drawLog(c);

                  this.logLaneThree.drawLog(c);
                  this.logLaneThree2.drawLog(c);

                  this.log4.drawLog(c);
                  this.log5.drawLog(c);
                  this.log6.drawLog(c);
                  this.log7.drawLog(c);

                  this.car.drawCar(c);
                  this.car2.drawCar(c);
                  this.car3.drawCar(c);

                  this.car4.drawCar(c);
                  this.car5.drawCar(c);
                  this.car6.drawCar(c);

                  this.car7.drawCar(c);
                  this.car8.drawCar(c);
                  this.car9.drawCar(c);

                  this.truck.drawTruck(c);
                  this.truck2.drawTruck(c);
                  this.frog.drawFrog(c);
                  // console.log(this.frog.x)this.frog.x;

                  // console.log(this.frog.height)
                  // let frogW = this.frog.width;
                  // let frogH = this.frog.height;
            }
      }, {
            key: 'moveFrog',
            value: function moveFrog(even, frog) {
                  if (event.keyCode === 38) {
                        this.frog.moveUp();
                        // let frogY = this.frog.y;
                  } else {
                        if (event.keyCode === 40) {
                              this.frog.moveDown();
                              // let frogY = this.frog.y;
                        } else {
                              if (event.keyCode === 37) {
                                    this.frog.moveLeft();
                                    // let frogX = this.frog.x;
                              } else {
                                    if (event.keyCode === 39) {
                                          this.frog.moveRight();
                                          // let frogX = this.frog.x;
                                    }
                              }
                        }
                  }
            }
      }, {
            key: 'collision',
            value: function collision(x, y, height, width) {
                  if (this.frog.x < this.car.x + this.car.width && this.frog.x + this.frog.width > this.car.x && this.frog.y < this.car.y + this.car.height && this.frog.height + this.frog.y > this.car.y) {
                        console.log('hi');
                  }if (this.frog.x < this.car2.x + this.car2.width && this.frog.x + this.frog.width > this.car2.x && this.frog.y < this.car2.y + this.car2.height && this.frog.height + this.frog.y > this.car2.y) {
                        console.log('hey');
                  }if (this.frog.x < this.car3.x + this.car3.width && this.frog.x + this.frog.width > this.car3.x && this.frog.y < this.car3.y + this.car3.height && this.frog.height + this.frog.y > this.car3.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car4.x + this.car4.width && this.frog.x + this.frog.width > this.car4.x && this.frog.y < this.car4.y + this.car4.height && this.frog.height + this.frog.y > this.car4.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car5.x + this.car5.width && this.frog.x + this.frog.width > this.car5.x && this.frog.y < this.car5.y + this.car5.height && this.frog.height + this.frog.y > this.car5.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car6.x + this.car6.width && this.frog.x + this.frog.width > this.car6.x && this.frog.y < this.car6.y + this.car6.height && this.frog.height + this.frog.y > this.car6.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car7.x + this.car7.width && this.frog.x + this.frog.width > this.car7.x && this.frog.y < this.car7.y + this.car7.height && this.frog.height + this.frog.y > this.car7.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car8.x + this.car8.width && this.frog.x + this.frog.width > this.car8.x && this.frog.y < this.car8.y + this.car8.height && this.frog.height + this.frog.y > this.car8.y) {
                        console.log('hello');
                  }if (this.frog.x < this.car9.x + this.car9.width && this.frog.x + this.frog.width > this.car9.x && this.frog.y < this.car9.y + this.car9.height && this.frog.height + this.frog.y > this.car9.y) {
                        console.log('hello');
                  }
            }
            // restartGame() {
            //     numberOfLives -- {
            //       endGame()
            //     }
            //   }
            // }

      }]);

      return Game;
}();
// }


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
  function Frog(x, y, height, width) {
    _classCallCheck(this, Frog);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
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
console.log(game);

window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();
// var car = new Car();
gameLoop();

function gameLoop(car, frog) {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.collision(c);
  game.drawCharacters(c);
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RydWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbmVtaWVzIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2FyIiwiYmluZCIsImNhcnMiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkdhbWUiLCJkZWF0aCIsIkZyb2ciLCJJbmRleCIsIkxvZyIsIlRydWNrIiwiQ29sbGlzaW9uIiwibnVtYmVyT2ZMaXZlcyIsImltYWdlIiwiZnJvZyIsImNhciIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImNhcjUiLCJjYXI2IiwiY2FyNyIsImNhcjgiLCJjYXI5IiwibG9nTGFuZU9uZSIsImxvZ0xhbmVPbmUyIiwibG9nTGFuZVR3byIsImxvZ0xhbmVUd28yIiwibG9nTGFuZVR3bzMiLCJsb2dMYW5lVGhyZWUiLCJsb2dMYW5lVGhyZWUyIiwibG9nNCIsImxvZzUiLCJsb2c2IiwibG9nNyIsInRydWNrIiwidHJ1Y2syIiwiZHJhd0xvZyIsImRyYXdUcnVjayIsImRyYXdGcm9nIiwiZXZlbiIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJjb2xsaXNpb24iLCJkcmF3Q2hhcmFjdGVycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiLCJtb3ZlTWVkaXVtUmlnaHQiLCJtb3ZlRmFzdFJpZ2h0IiwibW92ZVNsb3dSaWdodCIsIm1vdmVGcm9nIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLElBQUVDLFNBQUYsR0FBYyxTQUFkO0FBQ0FELElBQUVFLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixFQUF6QjtBQUNBRixJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFB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QUdBOztBQUVBLHFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXdCYWNrZ3JvdW5kOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy81NTVcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzQwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0NhciA9IHRoaXMuZHJhd0Nhci5iaW5kKHRoaXMpXG4gIHRoaXMuY2FycyA9IFtdO1xufVxuXG5kcmF3Q2FyKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy92b2xrc3dhZ29uLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICByZXR1cm4gdGhpczsgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCArPSAzO1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyOyIsIi8vIGNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbi8vIGNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5cbi8vIHZhciBmcm9nID0ge3g6IGZyb2dYLCB5OiBmcm9nWSwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwfTtcbi8vIHZhciBjYXIgPSB7eDogY2FyWCwgeTogY2FyWSwgd2lkdGg6IDQwLCBoZWlnaHQ6IDcwfTtcbi8vIGNvbnNvbGUubG9nKHRoaXMpXG4vLyB2YXIgY2FyID0gbmV3IENhciB7eDogMTAseTogNTU1LHdpZHRoOiA0MCxoZWlnaHQ6IDcwfTtcblxuXG4vLyBpZiAoKVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENvbGxpc2lvbjsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAvLyB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG5tb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbm1vdmVNZWRpdW1SaWdodCgpIHtcbiAgdGhpcy54ICs9IDU7XG4gIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgdGhpcy54ID0gLTIwO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb3ZlRmFzdFJpZ2h0KCkge1xuICB0aGlzLnggKz0gNztcbiAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICB0aGlzLnggPSAtMjA7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIG1vdmVTbG93TGVmdCgpIHtcbi8vICAgdGhpcy54IC09IFxuLy8gfVxuXG4vLyBtb3ZlU2xvd0xlZnQoKSB7XG4vLyAgIHRoaXMueCAtPVxuLy8gfVxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgSW5kZXggPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuY29uc3QgQ29sbGlzaW9uID0gcmVxdWlyZSgnLi9Db2xsaXNpb24uanMnKTtcbmNvbnN0IG51bWJlck9mTGl2ZXMgPSAzO1xuLy8gdmFyIGNhciA9IG5ldyBDYXIoMTAsIDU1MCwgNTAsIDUwKVxuLy8gdmFyIGxvZyA9IG5ldyBMb2coMTAsIDUwLCA3MCwgNTApXG5cbi8vIHZhciBlbmVtaWVzID0gW2NhciwgbG9nXTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG5cblxuICAgIHRoaXMuY2FyID0gbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpO1xuICAgIHRoaXMuY2FyMiA9IG5ldyBDYXIoNDAwLCA2MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXIzID0gbmV3IENhcigyNTAsIDYwNSwgMzUsIDQ1KTsgICAgXG5cbiAgICB0aGlzLmNhcjQgPSBuZXcgQ2FyKDEwLCA1NTUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXI1ID0gbmV3IENhcigyODAsIDU1NSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjYgPSBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KTsgICAgXG5cbiAgICB0aGlzLmNhcjcgPSBuZXcgQ2FyKDkwLCA1MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXI4ID0gbmV3IENhcig4MDAsIDUwNSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjkgPSBuZXcgQ2FyKDYwLCA1MDUsIDM1LCA0NSk7XG5cbiAgICAvL2ZpcnN0IGFycmF5IG9mIGxvZ3MgLS0gbGluZSBvbmVcbiAgICB0aGlzLmxvZ0xhbmVPbmUgPSBuZXcgTG9nKDEwLCA0MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lT25lMiA9IG5ldyBMb2coMzcwLCA0MCwgNzAsIDEwMCk7XG5cbiAgICAvL3NlY29uZCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgdHdvXG4gICAgdGhpcy5sb2dMYW5lVHdvID0gbmV3IExvZygtMjAwLCA5MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lVHdvMiA9IG5ldyBMb2coMzAwLCA5MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lVHdvMyA9IG5ldyBMb2coNjUwLCA5MCwgNzAsIDEwMCk7XG5cblxuICAgIC8vdGhpcmQgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIHRocmVlXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUgPSBuZXcgTG9nKC00MDAsIDE0MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lVGhyZWUyID0gbmV3IExvZygxMDAsIDE0MCwgNzAsIDEwMCk7XG5cblxuICAgIC8vZm91cnRoIGFycmF5IG9mIGxvZ3MgLS0gbGluZSBmb3VyXG4gICAgdGhpcy5sb2c0ID0gbmV3IExvZygtMTAsIDE5MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2c1ID0gbmV3IExvZygtNDAwLCAxOTAsIDcwLCAxMDApO1xuXG4gICAgLy9maWZ0aCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgZml2ZVxuICAgIHRoaXMubG9nNiA9IG5ldyBMb2coLTIwMCwgMjkwLCA3MCwgMTAwKTtcblxuICAgIC8vc2l4dGggYXJyYXkgb2YgbG9ncyAtLSBsaW5lIHNpeFxuICAgIHRoaXMubG9nNyA9IG5ldyBMb2coLTEwLCAyMzAsIDcwLCAxMDApO1xuXG4gICAgdGhpcy50cnVjayA9IG5ldyBUcnVjaygxMCwgMzgwLCA5MCwgMTQwKTtcbiAgICB0aGlzLnRydWNrMiA9IG5ldyBUcnVjayg0MDAsIDQzMCwgOTAsIDE0MCk7XG4gIH1cblxuICBkcmF3Q2hhcmFjdGVycyhjKSB7XG4gICAgdGhpcy5sb2dMYW5lT25lLmRyYXdMb2coYylcbiAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcblxuICAgIHRoaXMubG9nTGFuZVR3by5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lT25lMi5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lVHdvMy5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmxvZ0xhbmVUaHJlZS5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUyLmRyYXdMb2coYylcblxuICAgIHRoaXMubG9nNC5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2c1LmRyYXdMb2coYylcbiAgICB0aGlzLmxvZzYuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nNy5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmNhci5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXIyLmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjMuZHJhd0NhcihjKSAgICBcblxuICAgIHRoaXMuY2FyNC5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXI1LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjYuZHJhd0NhcihjKSAgICBcblxuICAgIHRoaXMuY2FyNy5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXI4LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjkuZHJhd0NhcihjKVxuIFxuICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazIuZHJhd1RydWNrKGMpXG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLngpdGhpcy5mcm9nLng7XG4gXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLmhlaWdodClcbiAgICAvLyBsZXQgZnJvZ1cgPSB0aGlzLmZyb2cud2lkdGg7XG4gICAgLy8gbGV0IGZyb2dIID0gdGhpcy5mcm9nLmhlaWdodDtcbiAgfVxuIFxuICBtb3ZlRnJvZyhldmVuLCBmcm9nKSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgLy8gbGV0IGZyb2dZID0gdGhpcy5mcm9nLnk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgIC8vIGxldCBmcm9nWSA9IHRoaXMuZnJvZy55O1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfVxuICAgIH1cbiAgICB9ICBcbiAgICB9XG4gICAgfVxuICBjb2xsaXNpb24oeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyLnggKyB0aGlzLmNhci53aWR0aCAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyLnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhci55ICsgdGhpcy5jYXIuaGVpZ2h0ICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyLnkpIHsgXG4gICAgICBjb25zb2xlLmxvZygnaGknKTtcbn0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjIueCArIHRoaXMuY2FyMi53aWR0aCAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMi54ICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIyLnkgKyB0aGlzLmNhcjIuaGVpZ2h0ICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMi55KSB7XG4gICAgICBjb25zb2xlLmxvZygnaGV5Jyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIzLnggKyB0aGlzLmNhcjMud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjMueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyMy55ICsgdGhpcy5jYXIzLmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjMueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI0LnggKyB0aGlzLmNhcjQud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjQueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNC55ICsgdGhpcy5jYXI0LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjQueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI1LnggKyB0aGlzLmNhcjUud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjUueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNS55ICsgdGhpcy5jYXI1LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjUueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI2LnggKyB0aGlzLmNhcjYud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjYueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNi55ICsgdGhpcy5jYXI2LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjYueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI3LnggKyB0aGlzLmNhcjcud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjcueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNy55ICsgdGhpcy5jYXI3LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjcueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI4LnggKyB0aGlzLmNhcjgud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjgueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOC55ICsgdGhpcy5jYXI4LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjgueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI5LnggKyB0aGlzLmNhcjkud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjkueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOS55ICsgdGhpcy5jYXI5LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjkueSkge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59ICAgXG59XG4gIC8vIHJlc3RhcnRHYW1lKCkge1xuICAvLyAgICAgbnVtYmVyT2ZMaXZlcyAtLSB7XG4gIC8vICAgICAgIGVuZEdhbWUoKVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxufVxuLy8gfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vMzgwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy85MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8xNDBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxuXG5sZXQgZ2FtZTsgXG5jb25zb2xlLmxvZyhnYW1lKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcbi8vIHZhciBjYXIgPSBuZXcgQ2FyKCk7XG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChjYXIsIGZyb2cpIHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy9jbGVhciwgZHJhdywgbW92ZSBsb29wIFxuICBkcmF3QmFja2dyb3VuZChjKTtcbiAgZ2FtZS5jb2xsaXNpb24oYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIC8vIGdhbWUuYW5pbWF0ZSgpOyAvL21vdmVzIGVuZW1pZXNcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgZ2FtZS5jYXIubW92ZShjKTtcbiAgZ2FtZS5jYXIyLm1vdmUoYyk7XG4gIGdhbWUuY2FyMy5tb3ZlKGMpO1xuICBnYW1lLmNhcjQubW92ZShjKTtcbiAgZ2FtZS5jYXI1Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNi5tb3ZlKGMpO1xuICBnYW1lLmNhcjcubW92ZShjKTsgIFxuICBnYW1lLmNhcjgubW92ZShjKTtcbiAgZ2FtZS5jYXI5Lm1vdmUoYyk7XG4gIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcblxuICBnYW1lLmxvZ0xhbmVUd28ubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28yLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMy5tb3ZlTWVkaXVtUmlnaHQoYyk7XG5cblxuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcblxuICBnYW1lLmxvZzQubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c1Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nNy5tb3ZlRmFzdFJpZ2h0KGMpO1xuXG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG59O1xuXG5cblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlRG93bik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlTGVmdCk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlUmlnaHQpO1xuXG4vLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4vLyAgIGdhbWUgPSBuZXcgR2FtZSgpXG4vLyB9XG5cbi8vIHZhciBmcm9nID0gbmV3IEZyb2coZnJvZ0ltZywgNjAwLCA2NTAsIDUwLCA1MCk7XG4vLyB2YXIgZnJvZ0ltZyA9IG5ldyBJbWFnZSgpO1xuLy8gZnJvZ0ltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcblxuLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGMsIGZyb2dJbWcpO1xuLy8gZ2FtZS5nYW1lTG9vcCgpIFxuLy8gZ2FtZS5kcmF3RnJvZyhmcm9nSW1nKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgeCA9IGMueFxuLy8gbGV0IHkgPSBjLnlcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICBjLmNsZWFyUmVjdCh4LCB5LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbi8vIH07XG5cblxuLy9Nb3ZlbWVudFxuXG5cbi8vIGFuaW1hdGUoKTsgIFxuXG4vLyB2YXIgbW92ZUZyb2cgPSBbXTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0XG4vLyAgICAgICAgICk7XG5cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVGcm9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBtb3ZlRnJvZ1tpXS51cGRhdGUoKVxuLy8gfTtcblxuXG4vL2luZGV4LmpzIHdpbGwgcnVuIHRoZSBnYW1lIGxvb3AuIFxuXG4vL0dhbWUgY2xhc3MgaXMgZ29pbmcgdG8gYmUgdG9wIGxldmVsIC0gd2hlcmUgd2UgY3JlYXRlIGZyb2csIGVuZW1pZXNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==