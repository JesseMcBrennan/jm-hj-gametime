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

//test default behavior on line 21. It should move the x coordinate by 3

//Create a car that has an x coordinate of 1198. Call move, expect X would be less 20.

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
        this.x = -40;
      }
      return this;
    }
  }, {
    key: 'moveFastRight',
    value: function moveFastRight() {
      this.x += 7;
      if (this.x > 1300) {
        this.x = -40;
      }
      return this;
    }
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
var Car = __webpack_require__(/*! ./Car.js */ "./lib/Car.js");
var Log = __webpack_require__(/*! ./Log.js */ "./lib/Log.js");
var Truck = __webpack_require__(/*! ./Truck.js */ "./lib/Truck.js");

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.frog = new Frog(600, 650, 50, 50);

    // Road Obstacles

    this.car = new Car(10, 605, 35, 45);
    this.car2 = new Car(400, 605, 35, 45);
    this.car3 = new Car(250, 605, 35, 45);
    this.car4 = new Car(10, 555, 35, 45);
    this.car5 = new Car(280, 555, 35, 45);
    this.car6 = new Car(-300, 555, 35, 45);
    this.car7 = new Car(400, 505, 35, 45);
    this.car8 = new Car(800, 505, 35, 45);
    this.car9 = new Car(60, 505, 35, 45);

    //River Obstacles

    this.logLaneOne = new Log(-10, 40, 70, 100);
    this.logLaneOne2 = new Log(-370, 40, 70, 100);
    this.logLaneTwo = new Log(-200, 90, 70, 100);
    this.logLaneTwo2 = new Log(-300, 90, 70, 100);
    this.logLaneTwo3 = new Log(-650, 90, 70, 100);
    this.logLaneThree = new Log(-400, 140, 70, 100);
    this.logLaneThree2 = new Log(-100, 140, 70, 100);
    this.log4 = new Log(-10, 190, 70, 100);
    this.log5 = new Log(-400, 190, 70, 100);
    this.log6 = new Log(-200, 290, 70, 100);
    this.log7 = new Log(-10, 230, 70, 100);
    this.truck = new Truck(10, 430, 90, 140);
    this.truck2 = new Truck(600, 430, 90, 140);
    this.truck3 = new Truck(300, 430, 90, 140);
    this.truck4 = new Truck(900, 430, 90, 140);
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
      this.truck3.drawTruck(c);
      this.truck4.drawTruck(c);
      this.frog.drawFrog(c);
    }
  }, {
    key: 'gameOver',
    value: function gameOver(c) {
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "white";
      c.font = "72px Arial";
      c.fillText("GAME OVER", 6, 100);
      c.font = "28px Arial";
      c.fillText("Refresh to try again", 50, 150);
    }
  }, {
    key: 'resetFrog',
    value: function resetFrog(c) {
      this.frog.x = 600;
      this.frog.y = 650;
    }
  }, {
    key: 'restartGame',
    value: function restartGame(c) {
      this.lives--;
      this.resetFrog();
      if (this.lives === 0) {
        this.gameOver(c);
      }
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event, frog) {
      event.preventDefault();
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
              this.frog.moveRight();
            }
          }
        }
      }
    }
  }, {
    key: 'roadCollision',
    value: function roadCollision(c) {
      if (this.frog.x < this.car.x + this.car.width && this.frog.x + this.frog.width > this.car.x && this.frog.y < this.car.y + this.car.height && this.frog.height + this.frog.y > this.car.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car2.x + this.car2.width && this.frog.x + this.frog.width > this.car2.x && this.frog.y < this.car2.y + this.car2.height && this.frog.height + this.frog.y > this.car2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car3.x + this.car3.width && this.frog.x + this.frog.width > this.car3.x && this.frog.y < this.car3.y + this.car3.height && this.frog.height + this.frog.y > this.car3.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car4.x + this.car4.width && this.frog.x + this.frog.width > this.car4.x && this.frog.y < this.car4.y + this.car4.height && this.frog.height + this.frog.y > this.car4.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car5.x + this.car5.width && this.frog.x + this.frog.width > this.car5.x && this.frog.y < this.car5.y + this.car5.height && this.frog.height + this.frog.y > this.car5.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car6.x + this.car6.width && this.frog.x + this.frog.width > this.car6.x && this.frog.y < this.car6.y + this.car6.height && this.frog.height + this.frog.y > this.car6.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car7.x + this.car7.width && this.frog.x + this.frog.width > this.car7.x && this.frog.y < this.car7.y + this.car7.height && this.frog.height + this.frog.y > this.car7.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car8.x + this.car8.width && this.frog.x + this.frog.width > this.car8.x && this.frog.y < this.car8.y + this.car8.height && this.frog.height + this.frog.y > this.car8.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.car9.x + this.car9.width && this.frog.x + this.frog.width > this.car9.x && this.frog.y < this.car9.y + this.car9.height && this.frog.height + this.frog.y > this.car9.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck.x + (this.truck.width - 40) && this.frog.x + this.frog.width > this.truck.x && this.frog.y < this.truck.y + (this.truck.height - 90) && this.frog.height + this.frog.y > this.truck.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck2.x + (this.truck2.width - 40) && this.frog.x + this.frog.width > this.truck2.x && this.frog.y < this.truck2.y + (this.truck2.height - 90) && this.frog.height + this.frog.y > this.truck2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck3.x + (this.truck3.width - 40) && this.frog.x + this.frog.width > this.truck3.x && this.frog.y < this.truck3.y + (this.truck3.height - 90) && this.frog.height + this.frog.y > this.truck3.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck4.x + (this.truck4.width - 40) && this.frog.x + this.frog.width > this.truck4.x && this.frog.y < this.truck4.y + (this.truck4.height - 90) && this.frog.height + this.frog.y > this.truck4.y) {
        return this.restartGame(c);
      }
    }
  }, {
    key: 'rideLog',
    value: function rideLog(x, y, height, width) {
      if (this.frog.x < this.logLaneOne.x + (this.logLaneOne.width - 50) && this.frog.x + this.frog.width > this.logLaneOne.x && this.frog.y < this.logLaneOne.y + (this.logLaneOne.height - 50) && this.frog.height + this.frog.y > this.logLaneOne.y) {
        this.frog.x = this.logLaneOne.x;
      }if (this.frog.x < this.logLaneOne2.x + (this.logLaneOne2.width - 50) && this.frog.x + this.frog.width > this.logLaneOne2.x && this.frog.y < this.logLaneOne2.y + (this.logLaneOne2.height - 50) && this.frog.height + this.frog.y > this.logLaneOne2.y) {
        this.frog.x = this.logLaneOne2.x;
      }if (this.frog.x < this.logLaneTwo.x + (this.logLaneTwo.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo.x && this.frog.y < this.logLaneTwo.y + (this.logLaneTwo.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo.y) {
        this.frog.x = this.logLaneTwo.x;
      }if (this.frog.x < this.logLaneTwo2.x + (this.logLaneTwo2.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo2.x && this.frog.y < this.logLaneTwo2.y + (this.logLaneTwo2.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo2.y) {
        this.frog.x = this.logLaneTwo2.x;
      }if (this.frog.x < this.logLaneTwo3.x + (this.logLaneTwo3.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo3.x && this.frog.y < this.logLaneTwo3.y + (this.logLaneTwo3.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo3.y) {
        this.frog.x = this.logLaneTwo3.x;
      }if (this.frog.x < this.logLaneThree.x + (this.logLaneThree.width - 50) && this.frog.x + this.frog.width > this.logLaneThree.x && this.frog.y < this.logLaneThree.y + (this.logLaneThree.height - 50) && this.frog.height + this.frog.y > this.logLaneThree.y) {
        this.frog.x = this.logLaneThree.x;
      }if (this.frog.x < this.logLaneThree2.x + (this.logLaneThree2.width - 50) && this.frog.x + this.frog.width > this.logLaneThree2.x && this.frog.y < this.logLaneThree2.y + (this.logLaneThree2.height - 50) && this.frog.height + this.frog.y > this.logLaneThree2.y) {
        this.frog.x = this.logLaneThree2.x;
      }if (this.frog.x < this.log4.x + (this.log4.width - 50) && this.frog.x + this.frog.width > this.log4.x && this.frog.y < this.log4.y + (this.log4.height - 50) && this.frog.height + this.frog.y > this.log4.y) {
        this.frog.x = this.log4.x;
      }if (this.frog.x < this.log5.x + (this.log5.width - 50) && this.frog.x + this.frog.width > this.log5.x && this.frog.y < this.log5.y + (this.log5.height - 50) && this.frog.height + this.frog.y > this.log5.y) {
        this.frog.x = this.log5.x;
      }if (this.frog.x < this.log6.x + (this.log6.width - 50) && this.frog.x + this.frog.width > this.log6.x && this.frog.y < this.log6.y + (this.log6.height - 50) && this.frog.height + this.frog.y > this.log6.y) {
        this.frog.x = this.log6.x;
      }if (this.frog.x < this.log7.x + (this.log7.width - 50) && this.frog.x + this.frog.width > this.log7.x && this.frog.y < this.log7.y + (this.log7.height - 50) && this.frog.height + this.frog.y > this.log7.y) {
        this.frog.x = this.log7.x;
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


var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");
var drawBackground = __webpack_require__(/*! ./Background.js */ "./lib/Background.js");

var game = void 0;

window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();

gameLoop();

function gameLoop(car, frog) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(c);
  game.roadCollision(c);
  game.drawCharacters(c);
  game.rideLog(c);
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

module.exports = Index;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiZGVhdGgiLCJGcm9nIiwiTG9nIiwiVHJ1Y2siLCJpbWFnZSIsImxpdmVzIiwiZnJvZyIsImNhciIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImNhcjUiLCJjYXI2IiwiY2FyNyIsImNhcjgiLCJjYXI5IiwibG9nTGFuZU9uZSIsImxvZ0xhbmVPbmUyIiwibG9nTGFuZVR3byIsImxvZ0xhbmVUd28yIiwibG9nTGFuZVR3bzMiLCJsb2dMYW5lVGhyZWUiLCJsb2dMYW5lVGhyZWUyIiwibG9nNCIsImxvZzUiLCJsb2c2IiwibG9nNyIsInRydWNrIiwidHJ1Y2syIiwidHJ1Y2szIiwidHJ1Y2s0IiwiZHJhd0xvZyIsImRyYXdUcnVjayIsImRyYXdGcm9nIiwiY2xlYXJSZWN0IiwiY2FudmFzIiwiZm9udCIsImZpbGxUZXh0IiwicmVzZXRGcm9nIiwiZ2FtZU92ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJyZXN0YXJ0R2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicm9hZENvbGxpc2lvbiIsImRyYXdDaGFyYWN0ZXJzIiwicmlkZUxvZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiLCJtb3ZlTWVkaXVtUmlnaHQiLCJtb3ZlRmFzdFJpZ2h0IiwibW92ZVNsb3dSaWdodCIsIm1vdmVGcm9nIiwiZSIsIkluZGV4Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLElBQUVDLFNBQUYsR0FBYyxTQUFkO0FBQ0FELElBQUVFLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixFQUF6QjtBQUNBRixJQUFFRSxRQUFGLENBQVcsQ0FBWCxF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QyxJQUFaLENBQWlCdkYsQ0FBakI7QUFDQThFLE9BQUt0QixNQUFMLENBQVkrQixJQUFaLENBQWlCdkYsQ0FBakI7QUFDQThFLE9BQUtyQixNQUFMLENBQVk4QixJQUFaLENBQWlCdkYsQ0FBakI7QUFDRDs7QUFFRCxTQUFTc0UsTUFBVCxDQUFnQkgsS0FBaEIsRUFBdUI7QUFDckJXLE9BQUthLFFBQUwsQ0FBY3hCLEtBQWQ7QUFDRDs7QUFFRCxTQUFTYyxTQUFULENBQW1CVyxDQUFuQixFQUFzQjtBQUNwQkEsSUFBRXhCLGNBQUY7QUFDRDs7QUFLRDFELE9BQU9DLE9BQVAsR0FBaUJrRixLQUFqQixDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXdCYWNrZ3JvdW5kOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy81NTVcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzQwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0NhciA9IHRoaXMuZHJhd0Nhci5iaW5kKHRoaXMpXG4gIHRoaXMuY2FycyA9IFtdO1xuICB9XG5cbiAgZHJhd0NhcihjKSB7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3ZvbGtzd2Fnb24ucG5nJztcbiAgICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgICByZXR1cm4gdGhpczsgIFxuICB9XG4gIG1vdmUoKSB7XG4gICAgICB0aGlzLnggKz0gMztcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgICB0aGlzLnggPSAtMjBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyO1xuXG4vL3Rlc3QgZGVmYXVsdCBiZWhhdmlvciBvbiBsaW5lIDIxLiBJdCBzaG91bGQgbW92ZSB0aGUgeCBjb29yZGluYXRlIGJ5IDNcblxuLy9DcmVhdGUgYSBjYXIgdGhhdCBoYXMgYW4geCBjb29yZGluYXRlIG9mIDExOTguIENhbGwgbW92ZSwgZXhwZWN0IFggd291bGQgYmUgbGVzcyAyMC4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAvLyB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG4gIG1vdmVTbG93UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDQ7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgbW92ZU1lZGl1bVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVGYXN0UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDc7XG4gICAgICBpZiAodGhpcy54ID4gMTMwMCkge1xuICAgICAgICB0aGlzLnggPSAtNDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IExvZyA9IHJlcXVpcmUoJy4vTG9nLmpzJyk7XG5jb25zdCBUcnVjayA9IHJlcXVpcmUoJy4vVHJ1Y2suanMnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgICAgdGhpcy5saXZlcyA9IDM7XG4gICAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZyg2MDAsIDY1MCwgNTAsIDUwKTtcblxuICAvLyBSb2FkIE9ic3RhY2xlc1xuXG4gICAgICB0aGlzLmNhciA9IG5ldyBDYXIoMTAsIDYwNSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyMiA9IG5ldyBDYXIoNDAwLCA2MDUsIDM1LCA0NSk7XG4gICAgICB0aGlzLmNhcjMgPSBuZXcgQ2FyKDI1MCwgNjA1LCAzNSwgNDUpOyAgICBcbiAgICAgIHRoaXMuY2FyNCA9IG5ldyBDYXIoMTAsIDU1NSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyNSA9IG5ldyBDYXIoMjgwLCA1NTUsIDM1LCA0NSk7XG4gICAgICB0aGlzLmNhcjYgPSBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KTsgICAgXG4gICAgICB0aGlzLmNhcjcgPSBuZXcgQ2FyKDQwMCwgNTA1LCAzNSwgNDUpO1xuICAgICAgdGhpcy5jYXI4ID0gbmV3IENhcig4MDAsIDUwNSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyOSA9IG5ldyBDYXIoNjAsIDUwNSwgMzUsIDQ1KTtcblxuICAvL1JpdmVyIE9ic3RhY2xlc1xuXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUgPSBuZXcgTG9nKC0xMCwgNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lT25lMiA9IG5ldyBMb2coLTM3MCwgNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVHdvID0gbmV3IExvZygtMjAwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUd28yID0gbmV3IExvZygtMzAwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUd28zID0gbmV3IExvZygtNjUwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUaHJlZSA9IG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVRocmVlMiA9IG5ldyBMb2coLTEwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nNCA9IG5ldyBMb2coLTEwLCAxOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c1ID0gbmV3IExvZygtNDAwLCAxOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c2ID0gbmV3IExvZygtMjAwLCAyOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c3ID0gbmV3IExvZygtMTAsIDIzMCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApO1xuICAgICAgdGhpcy50cnVjazIgPSBuZXcgVHJ1Y2soNjAwLCA0MzAsIDkwLCAxNDApO1xuICAgICAgdGhpcy50cnVjazMgPSBuZXcgVHJ1Y2soMzAwLCA0MzAsIDkwLCAxNDApOyAgIFxuICAgICAgdGhpcy50cnVjazQgPSBuZXcgVHJ1Y2soOTAwLCA0MzAsIDkwLCAxNDApO1xuICAgIH1cblxuICAgIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICAgIHRoaXMubG9nTGFuZU9uZS5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3by5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3bzMuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNC5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZzUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2c2LmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNy5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmNhci5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjIuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXIzLmRyYXdDYXIoYykgICAgXG4gICAgICB0aGlzLmNhcjQuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXI1LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyNi5kcmF3Q2FyKGMpICAgIFxuICAgICAgdGhpcy5jYXI3LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyOC5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjkuZHJhd0NhcihjKSBcbiAgICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLnRydWNrMi5kcmF3VHJ1Y2soYylcbiAgICAgIHRoaXMudHJ1Y2szLmRyYXdUcnVjayhjKVxuICAgICAgdGhpcy50cnVjazQuZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLmZyb2cuZHJhd0Zyb2coYylcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihjKSB7XG4gICAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjLmZvbnQgPSBcIjcycHggQXJpYWxcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgNiwgMTAwKTtcbiAgICAgIGMuZm9udCA9IFwiMjhweCBBcmlhbFwiO1xuICAgICAgYy5maWxsVGV4dChcIlJlZnJlc2ggdG8gdHJ5IGFnYWluXCIsIDUwLCAxNTApO1xuICAgIH1cblxuICAgIHJlc2V0RnJvZyhjwqApIHtcbiAgICAgIHRoaXMuZnJvZy54ID0gNjAwO1xuICAgICAgdGhpcy5mcm9nLnkgPSA2NTA7XG4gICAgfVxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgIHRoaXMubGl2ZXMgLS07IFxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoYyk7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIFxuICAgIG1vdmVGcm9nKGV2ZW50LCBmcm9nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVEb3duKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAgXG4gICAgfVxuICB9XG5cbiAgICByb2FkQ29sbGlzaW9uKGMpIHtcbiAgICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyLnggKyB0aGlzLmNhci53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhci54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyLnkgKyB0aGlzLmNhci5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyLnkpIHsgXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpXG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjIueCArIHRoaXMuY2FyMi53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjIueSArIHRoaXMuY2FyMi5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMi55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIzLnggKyB0aGlzLmNhcjMud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXIzLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIzLnkgKyB0aGlzLmNhcjMuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjMueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNC54ICsgdGhpcy5jYXI0LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNC55ICsgdGhpcy5jYXI0LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI0LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjUueCArIHRoaXMuY2FyNS53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjUueSArIHRoaXMuY2FyNS5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNS55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI2LnggKyB0aGlzLmNhcjYud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI2LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI2LnkgKyB0aGlzLmNhcjYuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjYueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNy54ICsgdGhpcy5jYXI3LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNy55ICsgdGhpcy5jYXI3LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI3LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjgueCArIHRoaXMuY2FyOC53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjgueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjgueSArIHRoaXMuY2FyOC5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyOC55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI5LnggKyB0aGlzLmNhcjkud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI5LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI5LnkgKyB0aGlzLmNhcjkuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjkueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2sueCArICh0aGlzLnRydWNrLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjay54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2sueSAgKyAodGhpcy50cnVjay5oZWlnaHQgLSA5MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2sueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2syLnggKyAodGhpcy50cnVjazIud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2syLnkgKyAodGhpcy50cnVjazIuaGVpZ2h0IC0gOTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrMi55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazMueCArICh0aGlzLnRydWNrMy53aWR0aCAtIDQwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMudHJ1Y2szLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazMueSArICh0aGlzLnRydWNrMy5oZWlnaHQgLSA5MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazMueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2s0LnggKyAodGhpcy50cnVjazQud2lkdGggLSA0MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazQueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrNC55ICsgKHRoaXMudHJ1Y2s0LmhlaWdodCAtIDkwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrNC55KXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gIFxuICB9XG4gICAgcmlkZUxvZyh4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUueCArICh0aGlzLmxvZ0xhbmVPbmUud2lkdGggLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lT25lLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lT25lLnkgKyAodGhpcy5sb2dMYW5lT25lLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVPbmUueSkgeyBcbiAgICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVPbmUueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lT25lMi54ICsgKHRoaXMubG9nTGFuZU9uZTIud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVPbmUyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lT25lMi55ICsgKHRoaXMubG9nTGFuZU9uZTIuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZU9uZTIueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZU9uZTIueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVHdvLnggKyAodGhpcy5sb2dMYW5lVHdvLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3by54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3by55ICsgKHRoaXMubG9nTGFuZVR3by5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvLnkpIHsgXG4gICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzIueCArICh0aGlzLmxvZ0xhbmVUd28yLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3bzIueSArICh0aGlzLmxvZ0xhbmVUd28yLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28yLnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUd28yLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzMueCArICh0aGlzLmxvZ0xhbmVUd28zLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28zLnkgKyAodGhpcy5sb2dMYW5lVHdvMy5oZWlnaHQgLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3bzMueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVR3bzMueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUueCArICh0aGlzLmxvZ0xhbmVUaHJlZS53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUaHJlZS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVRocmVlLnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUaHJlZS54OyAgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnggKyAodGhpcy5sb2dMYW5lVGhyZWUyLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVGhyZWUyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUyLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZTIueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVRocmVlMi54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzQueCArICh0aGlzLmxvZzQud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzQueFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNC55ICsgKHRoaXMubG9nNC5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c0LnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzQueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c1LnggKyAodGhpcy5sb2c1LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c1LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c1LnkgKyAodGhpcy5sb2c1LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzUueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNS54OyAgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c2LnggKyAodGhpcy5sb2c2LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c2LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c2LnkgKyAodGhpcy5sb2c2LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzYueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNi54OyAgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c3LnggKyAodGhpcy5sb2c3LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c3LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c3LnkgKyAodGhpcy5sb2c3LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzcueSkgeyBcbiAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNy54OyBcbiAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vMzgwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy85MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8xNDBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJylcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cbmxldCBnYW1lOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGNhciwgZnJvZykge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUucm9hZENvbGxpc2lvbihjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgZ2FtZS5yaWRlTG9nKGMpO1xuICBpZiAoZ2FtZS5saXZlcyA+PSAxKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlKGMpO1xuICBnYW1lLmNhcjUubW92ZShjKTtcbiAgZ2FtZS5jYXI2Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlKGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlKGMpO1xuICBnYW1lLmNhcjkubW92ZShjKTsgIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzMubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2c0Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNS5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzYubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZzcubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyBcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IFxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=