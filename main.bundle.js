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

  // Sand

  c.fillStyle = "#967967";
  c.fillRect(0, 0, 1200, 50);
  c.fillStyle = "#439A2C";
  c.font = "55px 'Indie Flower', cursive";
  c.fillText("FROGGER", 500, 40);
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
      c.font = "150px 'Indie Flower', cursive";
      c.fillText("GAME OVER", 250, 350);
      c.font = "28px 'Indie Flower', cursive";
      c.fillText("Refresh to try again", 460, 450);
    }
  }, {
    key: 'livesLeft',
    value: function livesLeft(c) {
      c.fillStyle = "black";
      c.font = "45px 'Indie Flower', cursive";
      c.fillText("lives: " + this.lives, 20, 690);
    }
  }, {
    key: 'currentLevel',
    value: function currentLevel(c) {
      c.fillStyle = "black";
      c.font = "45px 'Indie Flower', cursive";
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

    _this.x = x;
    _this.y = y;
    _this.width = width;
    _this.height = height;
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
};

function moveUp(event) {
  game.moveFrog(event);
}

function startGame(e) {
  e.preventDefault();
}

// module.exports = Index;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiZGVhdGgiLCJGcm9nIiwiTG9nIiwiVHJ1Y2siLCJpbWFnZSIsImxpdmVzIiwibGV2ZWwiLCJmcm9nIiwiY2FyIiwiY2FyMiIsImNhcjMiLCJjYXI0IiwiY2FyNSIsImNhcjYiLCJjYXI3IiwiY2FyOCIsImNhcjkiLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwidHJ1Y2siLCJ0cnVjazIiLCJ0cnVjazMiLCJ0cnVjazQiLCJkcmF3TG9nIiwiZHJhd1RydWNrIiwiZHJhd0Zyb2ciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJyZXNldEZyb2ciLCJnYW1lT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJsZXZlbFVwIiwibW92ZURvd24iLCJyZXN0YXJ0R2FtZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJsaXZlc0xlZnQiLCJjdXJyZW50TGV2ZWwiLCJyb2FkQ29sbGlzaW9uIiwiZHJhd0NoYXJhY3RlcnMiLCJyaWRlTG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSIsIm1vdmVNZWRpdW1SaWdodCIsIm1vdmVGYXN0UmlnaHQiLCJtb3ZlU2xvd1JpZ2h0IiwibW92ZUZyb2ciLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM5QkEsSUFBRUMsU0FBRixHQUFjLFNBQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFk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QixNQUFMLENBQVlpQyxJQUFaLENBQWlCNUYsQ0FBakI7QUFDQWlGLE9BQUtyQixNQUFMLENBQVlnQyxJQUFaLENBQWlCNUYsQ0FBakI7QUFDRDs7QUFFRCxTQUFTd0UsTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUI7QUFDckJXLE9BQUtlLFFBQUwsQ0FBYzFCLEtBQWQ7QUFDRDs7QUFFRCxTQUFTYyxTQUFULENBQW1CYSxDQUFuQixFQUFzQjtBQUNwQkEsSUFBRUMsY0FBRjtBQUNEOztBQUVELDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbi8vIFNhbmRcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcbmMuZmlsbFN0eWxlID0gXCIjNDM5QTJDXCI7XG5jLmZvbnQgPSBcIjU1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbmMuZmlsbFRleHQoXCJGUk9HR0VSXCIsIDUwMCwgNDApO1xuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbiAgdGhpcy5jYXJzID0gW107XG4gIH1cblxuICBkcmF3Q2FyKGMpIHtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICAgIHJldHVybiB0aGlzOyAgXG4gIH1cbiAgbW92ZSgpIHtcbiAgICAgIHRoaXMueCArPSAzO1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7XG5cblxuXG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG4gIG1vdmVTbG93UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDQ7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgbW92ZU1lZGl1bVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVGYXN0UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDc7XG4gICAgICBpZiAodGhpcy54ID4gMTMwMCkge1xuICAgICAgICB0aGlzLnggPSAtNDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IExvZyA9IHJlcXVpcmUoJy4vTG9nLmpzJyk7XG5jb25zdCBUcnVjayA9IHJlcXVpcmUoJy4vVHJ1Y2suanMnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgICAgdGhpcy5saXZlcyA9IDM7XG4gICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKDYwMCwgNjUwLCA1MCwgNTApO1xuXG4gIC8vIFJvYWQgT2JzdGFjbGVzXG5cbiAgICAgIHRoaXMuY2FyID0gbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpO1xuICAgICAgdGhpcy5jYXIyID0gbmV3IENhcig0MDAsIDYwNSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyMyA9IG5ldyBDYXIoMjUwLCA2MDUsIDM1LCA0NSk7ICAgIFxuICAgICAgdGhpcy5jYXI0ID0gbmV3IENhcigxMCwgNTU1LCAzNSwgNDUpO1xuICAgICAgdGhpcy5jYXI1ID0gbmV3IENhcigyODAsIDU1NSwgMzUsIDQ1KTtcbiAgICAgIHRoaXMuY2FyNiA9IG5ldyBDYXIoLTMwMCwgNTU1LCAzNSwgNDUpOyAgICBcbiAgICAgIHRoaXMuY2FyNyA9IG5ldyBDYXIoNDAwLCA1MDUsIDM1LCA0NSk7XG4gICAgICB0aGlzLmNhcjggPSBuZXcgQ2FyKDgwMCwgNTA1LCAzNSwgNDUpO1xuICAgICAgdGhpcy5jYXI5ID0gbmV3IENhcig2MCwgNTA1LCAzNSwgNDUpO1xuXG4gIC8vUml2ZXIgT2JzdGFjbGVzXG5cbiAgICAgIHRoaXMubG9nTGFuZU9uZSA9IG5ldyBMb2coLTEwLCA0MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyID0gbmV3IExvZygtMzcwLCA0MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUd28gPSBuZXcgTG9nKC0yMDAsIDkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVR3bzIgPSBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVR3bzMgPSBuZXcgTG9nKC02NTAsIDkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVRocmVlID0gbmV3IExvZygtNDAwLCAxNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUyID0gbmV3IExvZygtMTAwLCAxNDAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2c0ID0gbmV3IExvZygtMTAsIDE5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZzUgPSBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZzYgPSBuZXcgTG9nKC0yMDAsIDI5MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZzcgPSBuZXcgTG9nKC0xMCwgMjMwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMudHJ1Y2sgPSBuZXcgVHJ1Y2soMTAsIDQzMCwgOTAsIDE0MCk7XG4gICAgICB0aGlzLnRydWNrMiA9IG5ldyBUcnVjayg2MDAsIDQzMCwgOTAsIDE0MCk7XG4gICAgICB0aGlzLnRydWNrMyA9IG5ldyBUcnVjaygzMDAsIDQzMCwgOTAsIDE0MCk7ICAgXG4gICAgICB0aGlzLnRydWNrNCA9IG5ldyBUcnVjayg5MDAsIDQzMCwgOTAsIDE0MCk7XG4gICAgfVxuXG4gICAgZHJhd0NoYXJhY3RlcnMoYykge1xuICAgICAgdGhpcy5sb2dMYW5lT25lLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVHdvLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVHdvMy5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVUaHJlZS5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVUaHJlZTIuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2c0LmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNS5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZzYuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2c3LmRyYXdMb2coYylcbiAgICAgIHRoaXMuY2FyLmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyMi5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjMuZHJhd0NhcihjKSAgICBcbiAgICAgIHRoaXMuY2FyNC5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjUuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXI2LmRyYXdDYXIoYykgICAgXG4gICAgICB0aGlzLmNhcjcuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXI4LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyOS5kcmF3Q2FyKGMpIFxuICAgICAgdGhpcy50cnVjay5kcmF3VHJ1Y2soYylcbiAgICAgIHRoaXMudHJ1Y2syLmRyYXdUcnVjayhjKVxuICAgICAgdGhpcy50cnVjazMuZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLnRydWNrNC5kcmF3VHJ1Y2soYylcbiAgICAgIHRoaXMuZnJvZy5kcmF3RnJvZyhjKVxuICAgIH1cblxuICAgIGdhbWVPdmVyKGMpIHtcbiAgICAgIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIGMuZm9udCA9IFwiMTUwcHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjUwLCAzNTApO1xuICAgICAgYy5mb250ID0gXCIyOHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiUmVmcmVzaCB0byB0cnkgYWdhaW5cIiwgNDYwLCA0NTApO1xuICAgIH1cblxuICAgIGxpdmVzTGVmdChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxpdmVzOiBcIiArIHRoaXMubGl2ZXMsIDIwLCA2OTApO1xuICAgIH1cblxuICAgIGN1cnJlbnRMZXZlbChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxldmVsOiBcIiArIHRoaXMubGV2ZWwsIDIwMCwgNjkwKTtcbiAgICB9XG5cbiAgICByZXNldEZyb2coY8KgKSB7XG4gICAgICB0aGlzLmZyb2cueCA9IDYwMDtcbiAgICAgIHRoaXMuZnJvZy55ID0gNjUwO1xuICAgIH1cbiAgICByZXN0YXJ0R2FtZShjKSB7XG4gICAgICB0aGlzLmxpdmVzIC0tOyBcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGMpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxldmVsVXAoKSB7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsKVxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICB9XG4gICAgbW92ZUZyb2coZXZlbnQsIGZyb2cpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvZy55ID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueSA+PSA3MDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvZy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvZy54ID49IDEyMDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICB9ICBcbiAgICAgfVxuICAgfVxuXG4gICAgcm9hZENvbGxpc2lvbihjKSB7XG4gICAgICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhci54ICsgdGhpcy5jYXIud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhci55ICsgdGhpcy5jYXIuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhci55KSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKVxuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIyLnggKyB0aGlzLmNhcjIud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXIyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIyLnkgKyB0aGlzLmNhcjIuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjIueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyMy54ICsgdGhpcy5jYXIzLndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyMy55ICsgdGhpcy5jYXIzLmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIzLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjQueCArIHRoaXMuY2FyNC53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjQueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjQueSArIHRoaXMuY2FyNC5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNC55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI1LnggKyB0aGlzLmNhcjUud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI1LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI1LnkgKyB0aGlzLmNhcjUuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjUueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNi54ICsgdGhpcy5jYXI2LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNi55ICsgdGhpcy5jYXI2LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI2LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjcueCArIHRoaXMuY2FyNy53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjcueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjcueSArIHRoaXMuY2FyNy5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNy55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI4LnggKyB0aGlzLmNhcjgud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI4LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI4LnkgKyB0aGlzLmNhcjguaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjgueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyOS54ICsgdGhpcy5jYXI5LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyOS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOS55ICsgdGhpcy5jYXI5LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI5LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrLnggKyAodGhpcy50cnVjay53aWR0aCAtIDQwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMudHJ1Y2sueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrLnkgICsgKHRoaXMudHJ1Y2suaGVpZ2h0IC0gOTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrMi54ICsgKHRoaXMudHJ1Y2syLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrMi55ICsgKHRoaXMudHJ1Y2syLmhlaWdodCAtIDkwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazIueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2szLnggKyAodGhpcy50cnVjazMud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrMy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2szLnkgKyAodGhpcy50cnVjazMuaGVpZ2h0IC0gOTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2szLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrNC54ICsgKHRoaXMudHJ1Y2s0LndpZHRoIC0gNDApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMudHJ1Y2s0LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazQueSArICh0aGlzLnRydWNrNC5oZWlnaHQgLSA5MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazQueSl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICBcbiAgfVxuICAgIHJpZGVMb2coeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lT25lLnggKyAodGhpcy5sb2dMYW5lT25lLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZS55ICsgKHRoaXMubG9nTGFuZU9uZS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lLnkpIHsgXG4gICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lT25lLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZU9uZTIueCArICh0aGlzLmxvZ0xhbmVPbmUyLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lT25lMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZTIueSArICh0aGlzLmxvZ0xhbmVPbmUyLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVPbmUyLnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVPbmUyLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3by54ICsgKHRoaXMubG9nTGFuZVR3by53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28ueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28ueSArICh0aGlzLmxvZ0xhbmVUd28uaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3by55KSB7IFxuICAgICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVR3by54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28yLnggKyAodGhpcy5sb2dMYW5lVHdvMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28yLnkgKyAodGhpcy5sb2dMYW5lVHdvMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMi55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvMi54OyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28zLnggKyAodGhpcy5sb2dMYW5lVHdvMy53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28zLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMy55ICsgKHRoaXMubG9nTGFuZVR3bzMuaGVpZ2h0IC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28zLnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUd28zLng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVRocmVlLnggKyAodGhpcy5sb2dMYW5lVGhyZWUud2lkdGggLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVGhyZWUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUaHJlZS55ICsgKHRoaXMubG9nTGFuZVRocmVlLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZS55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVGhyZWUueDsgIFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVRocmVlMi54ICsgKHRoaXMubG9nTGFuZVRocmVlMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlMi55ICsgKHRoaXMubG9nTGFuZVRocmVlMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUyLnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUaHJlZTIueDsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c0LnggKyAodGhpcy5sb2c0LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c0LnhcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzQueSArICh0aGlzLmxvZzQuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNC55KSB7IFxuICAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c0Lng7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNS54ICsgKHRoaXMubG9nNS53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNS55ICsgKHRoaXMubG9nNS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c1LnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzUueDsgIFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNi54ICsgKHRoaXMubG9nNi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNi55ICsgKHRoaXMubG9nNi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c2LnkpIHsgXG4gICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzYueDsgIFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNy54ICsgKHRoaXMubG9nNy53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNy55ICsgKHRoaXMubG9nNy5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c3LnkpIHsgXG4gICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzcueDsgXG4gICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBMb2cgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgLy8xMFxuICB0aGlzLnkgPSB5OyAvLzUwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy81MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy83MFxuICB0aGlzLmRyYXdMb2cgPSB0aGlzLmRyYXdMb2cuYmluZCh0aGlzKVxufVxuXG5kcmF3TG9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9sb2cuc3ZnJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICBcblxuXG4gIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgVHJ1Y2sgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLndpZHRoID0gd2lkdGg7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMuZHJhd1RydWNrID0gdGhpcy5kcmF3VHJ1Y2suYmluZCh0aGlzKVxufVxuXG5kcmF3VHJ1Y2soYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3RydWNrMi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggLT0gNDtcbiAgICBpZiAodGhpcy54IDwgLTE1MCkgeyBcbiAgICAgIHRoaXMueCA9IDEyMDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRydWNrOyIsImNsYXNzIEZyb2cge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gICBkcmF3RnJvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0gNTA7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcbiAgICB0aGlzLnkgKz0gNTA7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICB0aGlzLnggLT0gNTA7XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDUwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuXG5sZXQgZ2FtZTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVVcCk7XG5cbmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChjYXIsIGZyb2cpIHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmxpdmVzTGVmdChjKTtcbiAgZ2FtZS5jdXJyZW50TGV2ZWwoYyk7XG4gIGdhbWUucm9hZENvbGxpc2lvbihjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgZ2FtZS5yaWRlTG9nKGMpO1xuICBpZiAoZ2FtZS5saXZlcyA+PSAxKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlKGMpO1xuICBnYW1lLmNhcjUubW92ZShjKTtcbiAgZ2FtZS5jYXI2Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlKGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlKGMpO1xuICBnYW1lLmNhcjkubW92ZShjKTsgIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzMubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2c0Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNS5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzYubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZzcubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyBcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IFxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=