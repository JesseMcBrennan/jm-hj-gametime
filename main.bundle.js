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

    _this.x = x;
    _this.y = y;
    _this.width = width;
    _this.height = height;
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
    this.level = 1;
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
      c.fillText("GAME OVER", 350, 350);
      c.font = "28px Arial";
      c.fillText("Refresh to try again", 450, 450);
    }
  }, {
    key: 'livesLeft',
    value: function livesLeft(c) {
      c.fillStyle = "black";
      c.font = "45px Arial";
      c.fillText("lives: " + this.lives, 20, 690);
    }
  }, {
    key: 'currentLevel',
    value: function currentLevel(c) {
      c.fillStyle = "black";
      c.font = "45px Arial";
      c.fillText("level: " + this.level, 200, 690);
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
    key: 'levelUp',
    value: function levelUp() {
      this.level++;
      console.log(this.level);
      this.resetFrog();
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event, frog) {
      // event.preventDefault();
      if (event.keyCode === 38) {
        this.frog.moveUp();
        if (this.frog.y === 0) {
          this.levelUp();
        }
      } else {
        if (event.keyCode === 40) {
          this.frog.moveDown();
          if (this.frog.y >= 700) {
            this.restartGame();
          }
        } else {
          if (event.keyCode === 37) {
            this.frog.moveLeft();
            if (this.frog.x < 0) {
              this.restartGame();
            }
          } else {
            if (event.keyCode === 39) {
              this.frog.moveRight();
              if (this.frog.x >= 1200) {
                this.restartGame();
              }
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
  game.livesLeft(c);
  game.currentLevel(c);
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
}

if (game.lives >= 1 && game.level === 2) {
  requestAnimationFrame(gameLoop);
}
game.car.moveFastRight(c);
game.car2.moveFastRight(c);
game.car3.moveFastRight(c);
game.car4.moveFastRight(c);
game.car5.moveFastRight(c);
game.car6.moveFastRight(c);
game.car7.moveFastRight(c);
game.car8.moveFastRight(c);
game.car9.moveFastRight(c);
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

function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
}

// module.exports = Index;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiZGVhdGgiLCJGcm9nIiwiTG9nIiwiVHJ1Y2siLCJpbWFnZSIsImxpdmVzIiwibGV2ZWwiLCJmcm9nIiwiY2FyIiwiY2FyMiIsImNhcjMiLCJjYXI0IiwiY2FyNSIsImNhcjYiLCJjYXI3IiwiY2FyOCIsImNhcjkiLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwidHJ1Y2siLCJ0cnVjazIiLCJ0cnVjazMiLCJ0cnVjazQiLCJkcmF3TG9nIiwiZHJhd1RydWNrIiwiZHJhd0Zyb2ciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJmb250IiwiZmlsbFRleHQiLCJyZXNldEZyb2ciLCJnYW1lT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJsZXZlbFVwIiwibW92ZURvd24iLCJyZXN0YXJ0R2FtZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJsaXZlc0xlZnQiLCJjdXJyZW50TGV2ZWwiLCJyb2FkQ29sbGlzaW9uIiwiZHJhd0NoYXJhY3RlcnMiLCJyaWRlTG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSIsIm1vdmVNZWRpdW1SaWdodCIsIm1vdmVGYXN0UmlnaHQiLCJtb3ZlU2xvd1JpZ2h0IiwibW92ZUZyb2ciLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM5QkEsSUFBRUMsU0FBRixHQUFjLFNBQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFk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LGFBQVYsQ0FBd0IvRixDQUF4QjtBQUNBaUYsS0FBSzdCLElBQUwsQ0FBVTJDLGFBQVYsQ0FBd0IvRixDQUF4QjtBQUNBaUYsS0FBSzVCLElBQUwsQ0FBVXdDLGVBQVYsQ0FBMEI3RixDQUExQjtBQUNBaUYsS0FBSzNCLElBQUwsQ0FBVXdDLGFBQVYsQ0FBd0I5RixDQUF4QjtBQUNBaUYsS0FBSzFCLEtBQUwsQ0FBV3FDLElBQVgsQ0FBZ0I1RixDQUFoQjtBQUNBaUYsS0FBS3pCLE1BQUwsQ0FBWW9DLElBQVosQ0FBaUI1RixDQUFqQjtBQUNBaUYsS0FBS3hCLE1BQUwsQ0FBWW1DLElBQVosQ0FBaUI1RixDQUFqQjtBQUNBaUYsS0FBS3ZCLE1BQUwsQ0FBWWtDLElBQVosQ0FBaUI1RixDQUFqQjs7QUFHRixTQUFTd0UsTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUI7QUFDckJXLE9BQUtlLFFBQUwsQ0FBYzFCLEtBQWQ7QUFDRDs7QUFFRCxTQUFTYyxTQUFULENBQW1CYSxDQUFuQixFQUFzQjtBQUNwQkEsSUFBRUMsY0FBRjtBQUNEOztBQUVELDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXdCYWNrZ3JvdW5kOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IFxuICB0aGlzLnkgPSB5OyBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IFxuICB0aGlzLmRyYXdDYXIgPSB0aGlzLmRyYXdDYXIuYmluZCh0aGlzKVxuICB0aGlzLmNhcnMgPSBbXTtcbiAgfVxuXG4gIGRyYXdDYXIoYykge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy92b2xrc3dhZ29uLnBuZyc7XG4gICAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7IFxuICAgICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxuICBtb3ZlKCkge1xuICAgICAgdGhpcy54ICs9IDM7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcjtcblxuLy90ZXN0IGRlZmF1bHQgYmVoYXZpb3Igb24gbGluZSAyMS4gSXQgc2hvdWxkIG1vdmUgdGhlIHggY29vcmRpbmF0ZSBieSAzXG5cbi8vQ3JlYXRlIGEgY2FyIHRoYXQgaGFzIGFuIHggY29vcmRpbmF0ZSBvZiAxMTk4LiBDYWxsIG1vdmUsIGV4cGVjdCBYIHdvdWxkIGJlIGxlc3MgMjAuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3RvcihjLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgLy8gdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRlYXRoID0gW107XG4gIH1cblxuICBtb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIG1vdmVNZWRpdW1SaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTtcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgICAgIHRoaXMueCA9IC00MDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlRmFzdFJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA3O1xuICAgICAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcbmNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgVHJ1Y2sgPSByZXF1aXJlKCcuL1RydWNrLmpzJyk7XG5cblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZyg2MDAsIDY1MCwgNTAsIDUwKTtcblxuICAvLyBSb2FkIE9ic3RhY2xlc1xuXG4gICAgICB0aGlzLmNhciA9IG5ldyBDYXIoMTAsIDYwNSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyMiA9IG5ldyBDYXIoNDAwLCA2MDUsIDM1LCA0NSk7XG4gICAgICB0aGlzLmNhcjMgPSBuZXcgQ2FyKDI1MCwgNjA1LCAzNSwgNDUpOyAgICBcbiAgICAgIHRoaXMuY2FyNCA9IG5ldyBDYXIoMTAsIDU1NSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyNSA9IG5ldyBDYXIoMjgwLCA1NTUsIDM1LCA0NSk7XG4gICAgICB0aGlzLmNhcjYgPSBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KTsgICAgXG4gICAgICB0aGlzLmNhcjcgPSBuZXcgQ2FyKDQwMCwgNTA1LCAzNSwgNDUpO1xuICAgICAgdGhpcy5jYXI4ID0gbmV3IENhcig4MDAsIDUwNSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyOSA9IG5ldyBDYXIoNjAsIDUwNSwgMzUsIDQ1KTtcblxuICAvL1JpdmVyIE9ic3RhY2xlc1xuXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUgPSBuZXcgTG9nKC0xMCwgNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lT25lMiA9IG5ldyBMb2coLTM3MCwgNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVHdvID0gbmV3IExvZygtMjAwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUd28yID0gbmV3IExvZygtMzAwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUd28zID0gbmV3IExvZygtNjUwLCA5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUaHJlZSA9IG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVRocmVlMiA9IG5ldyBMb2coLTEwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nNCA9IG5ldyBMb2coLTEwLCAxOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c1ID0gbmV3IExvZygtNDAwLCAxOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c2ID0gbmV3IExvZygtMjAwLCAyOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c3ID0gbmV3IExvZygtMTAsIDIzMCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApO1xuICAgICAgdGhpcy50cnVjazIgPSBuZXcgVHJ1Y2soNjAwLCA0MzAsIDkwLCAxNDApO1xuICAgICAgdGhpcy50cnVjazMgPSBuZXcgVHJ1Y2soMzAwLCA0MzAsIDkwLCAxNDApOyAgIFxuICAgICAgdGhpcy50cnVjazQgPSBuZXcgVHJ1Y2soOTAwLCA0MzAsIDkwLCAxNDApO1xuICAgIH1cblxuICAgIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICAgIHRoaXMubG9nTGFuZU9uZS5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3by5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3bzMuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNC5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZzUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2c2LmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNy5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmNhci5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjIuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXIzLmRyYXdDYXIoYykgICAgXG4gICAgICB0aGlzLmNhcjQuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXI1LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyNi5kcmF3Q2FyKGMpICAgIFxuICAgICAgdGhpcy5jYXI3LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyOC5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjkuZHJhd0NhcihjKSBcbiAgICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLnRydWNrMi5kcmF3VHJ1Y2soYylcbiAgICAgIHRoaXMudHJ1Y2szLmRyYXdUcnVjayhjKVxuICAgICAgdGhpcy50cnVjazQuZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLmZyb2cuZHJhd0Zyb2coYylcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihjKSB7XG4gICAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjLmZvbnQgPSBcIjcycHggQXJpYWxcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMzUwLCAzNTApO1xuICAgICAgYy5mb250ID0gXCIyOHB4IEFyaWFsXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiUmVmcmVzaCB0byB0cnkgYWdhaW5cIiwgNDUwLCA0NTApO1xuICAgIH1cblxuICAgIGxpdmVzTGVmdChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCBBcmlhbFwiO1xuICAgICAgYy5maWxsVGV4dChcImxpdmVzOiBcIiArIHRoaXMubGl2ZXMsIDIwLCA2OTApO1xuICAgIH1cblxuICAgIGN1cnJlbnRMZXZlbChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCBBcmlhbFwiO1xuICAgICAgYy5maWxsVGV4dChcImxldmVsOiBcIiArIHRoaXMubGV2ZWwsIDIwMCwgNjkwKTtcbiAgICB9XG5cbiAgICByZXNldEZyb2coY8KgKSB7XG4gICAgICB0aGlzLmZyb2cueCA9IDYwMDtcbiAgICAgIHRoaXMuZnJvZy55ID0gNjUwO1xuICAgIH1cbiAgICByZXN0YXJ0R2FtZShjKSB7XG4gICAgICB0aGlzLmxpdmVzIC0tOyBcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGMpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBsZXZlbFVwKCkge1xuICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgY29uc29sZS5sb2codGhpcy5sZXZlbClcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgfVxuICAgIG1vdmVGcm9nKGV2ZW50LCBmcm9nKSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueSA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKXtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPj0gNzAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlTGVmdCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA+PSAxMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgfSAgXG4gICAgIH1cbiAgIH1cblxuICAgIHJvYWRDb2xsaXNpb24oYykge1xuICAgICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIueCArIHRoaXMuY2FyLndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIueSArIHRoaXMuY2FyLmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIueSkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYylcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyMi54ICsgdGhpcy5jYXIyLndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyMi55ICsgdGhpcy5jYXIyLmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIyLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjMueCArIHRoaXMuY2FyMy53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjMueSArIHRoaXMuY2FyMy5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMy55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI0LnggKyB0aGlzLmNhcjQud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI0LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI0LnkgKyB0aGlzLmNhcjQuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjQueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNS54ICsgdGhpcy5jYXI1LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNS55ICsgdGhpcy5jYXI1LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI1LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjYueCArIHRoaXMuY2FyNi53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjYueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjYueSArIHRoaXMuY2FyNi5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNi55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI3LnggKyB0aGlzLmNhcjcud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI3LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI3LnkgKyB0aGlzLmNhcjcuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjcueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyOC54ICsgdGhpcy5jYXI4LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyOC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOC55ICsgdGhpcy5jYXI4LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI4LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjkueCArIHRoaXMuY2FyOS53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjkueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjkueSArIHRoaXMuY2FyOS5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyOS55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjay54ICsgKHRoaXMudHJ1Y2sud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjay55ICArICh0aGlzLnRydWNrLmhlaWdodCAtIDkwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjay55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazIueCArICh0aGlzLnRydWNrMi53aWR0aCAtIDQwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMudHJ1Y2syLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazIueSArICh0aGlzLnRydWNrMi5oZWlnaHQgLSA5MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2syLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrMy54ICsgKHRoaXMudHJ1Y2szLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrMy55ICsgKHRoaXMudHJ1Y2szLmhlaWdodCAtIDkwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrMy55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazQueCArICh0aGlzLnRydWNrNC53aWR0aCAtIDQwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrNC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2s0LnkgKyAodGhpcy50cnVjazQuaGVpZ2h0IC0gOTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2s0Lnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgXG4gIH1cbiAgICByaWRlTG9nKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZU9uZS54ICsgKHRoaXMubG9nTGFuZU9uZS53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVPbmUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVPbmUueSArICh0aGlzLmxvZ0xhbmVPbmUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZU9uZS55KSB7IFxuICAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZU9uZS54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUyLnggKyAodGhpcy5sb2dMYW5lT25lMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZTIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVPbmUyLnkgKyAodGhpcy5sb2dMYW5lT25lMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lMi55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lT25lMi54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28ueCArICh0aGlzLmxvZ0xhbmVUd28ud2lkdGggLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvLnkgKyAodGhpcy5sb2dMYW5lVHdvLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28ueSkgeyBcbiAgICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUd28ueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVHdvMi54ICsgKHRoaXMubG9nTGFuZVR3bzIud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28yLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMi55ICsgKHRoaXMubG9nTGFuZVR3bzIuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3bzIueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVR3bzIueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVHdvMy54ICsgKHRoaXMubG9nTGFuZVR3bzMud2lkdGggLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvMy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3bzMueSArICh0aGlzLmxvZ0xhbmVUd28zLmhlaWdodCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMy55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvMy54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUaHJlZS54ICsgKHRoaXMubG9nTGFuZVRocmVlLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVGhyZWUueSArICh0aGlzLmxvZ0xhbmVUaHJlZS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVRocmVlLng7ICBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUaHJlZTIueCArICh0aGlzLmxvZ0xhbmVUaHJlZTIud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUaHJlZTIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUaHJlZTIueSArICh0aGlzLmxvZ0xhbmVUaHJlZTIuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVRocmVlMi55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVGhyZWUyLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNC54ICsgKHRoaXMubG9nNC53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNC54XG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c0LnkgKyAodGhpcy5sb2c0LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzQueSkgeyBcbiAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNC54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzUueCArICh0aGlzLmxvZzUud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzUueSArICh0aGlzLmxvZzUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNS55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c1Lng7ICBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzYueCArICh0aGlzLmxvZzYud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzYueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzYueSArICh0aGlzLmxvZzYuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNi55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c2Lng7ICBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzcueCArICh0aGlzLmxvZzcud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzcueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzcueSArICh0aGlzLmxvZzcuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNy55KSB7IFxuICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c3Lng7IFxuICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgTG9nIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy81MFxuICB0aGlzLndpZHRoID0gd2lkdGg7IC8vNTBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vNzBcbiAgdGhpcy5kcmF3TG9nID0gdGhpcy5kcmF3TG9nLmJpbmQodGhpcylcbn1cblxuZHJhd0xvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvbG9nLnN2Zyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgXG5cblxuICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZzsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIFRydWNrIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy8zODBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzkwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzE0MFxuICB0aGlzLmRyYXdUcnVjayA9IHRoaXMuZHJhd1RydWNrLmJpbmQodGhpcylcbn1cblxuZHJhd1RydWNrKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy90cnVjazIucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cbm1vdmUoKSB7XG4gICAgdGhpcy54IC09IDQ7XG4gICAgaWYgKHRoaXMueCA8IC0xNTApIHsgXG4gICAgICB0aGlzLnggPSAxMjAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcnVjazsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcblxuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyLCBmcm9nKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IFxuICBkcmF3QmFja2dyb3VuZChjKTtcbiAgZ2FtZS5saXZlc0xlZnQoYyk7XG4gIGdhbWUuY3VycmVudExldmVsKGMpO1xuICBnYW1lLnJvYWRDb2xsaXNpb24oYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIGdhbWUucmlkZUxvZyhjKTtcbiAgaWYgKGdhbWUubGl2ZXMgPj0gMSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cbiAgZ2FtZS5jYXIubW92ZShjKTtcbiAgZ2FtZS5jYXIyLm1vdmUoYyk7XG4gIGdhbWUuY2FyMy5tb3ZlKGMpO1xuICBnYW1lLmNhcjQubW92ZShjKTtcbiAgZ2FtZS5jYXI1Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNi5tb3ZlKGMpO1xuICBnYW1lLmNhcjcubW92ZShjKTsgIFxuICBnYW1lLmNhcjgubW92ZShjKTtcbiAgZ2FtZS5jYXI5Lm1vdmUoYyk7ICBcbiAgZ2FtZS5sb2dMYW5lT25lLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lT25lMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3by5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28zLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVGhyZWUubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVGhyZWUyLm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUubG9nNC5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzUubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c2Lm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2c3Lm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2szLm1vdmUoYyk7IFxuICBnYW1lLnRydWNrNC5tb3ZlKGMpOyBcbn1cblxuaWYgKGdhbWUubGl2ZXMgPj0gMSAmJiBnYW1lLmxldmVsID09PSAyKXtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBnYW1lLmNhci5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmNhcjIubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5jYXIzLm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmNhcjUubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5jYXI2Lm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlRmFzdFJpZ2h0KGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmNhcjkubW92ZUZhc3RSaWdodChjKTsgIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzMubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2c0Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNS5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzYubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZzcubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyBcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IFxuXG5cbmZ1bmN0aW9uIG1vdmVVcChldmVudCkge1xuICBnYW1lLm1vdmVGcm9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9