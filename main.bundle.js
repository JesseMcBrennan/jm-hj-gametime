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

// const Game = require('./Game.js')

var Enemies = function () {
  function Enemies(x, y, height, width) {
    _classCallCheck(this, Enemies);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.death = [];
  }

  _createClass(Enemies, [{
    key: "moveSlowRight",
    value: function moveSlowRight() {
      this.x += 4;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }, {
    key: "moveMediumRight",
    value: function moveMediumRight() {
      this.x += 5;
      if (this.x > 1200) {
        this.x = -40;
      }
      return this;
    }
  }, {
    key: "moveFastRight",
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

    var roadObstacles = [new Car(10, 605, 35, 45), new Car(400, 605, 35, 45), new Car(250, 605, 35, 45), new Car(10, 555, 35, 45), new Car(280, 555, 35, 45), new Car(-300, 555, 35, 45), new Car(400, 505, 35, 45), new Car(800, 505, 35, 45), new Car(60, 505, 35, 45), new Truck(10, 430, 90, 140), new Truck(600, 430, 90, 140), new Truck(300, 380, 90, 140), new Truck(900, 380, 90, 140)];
    console.log(roadObstacles);
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
      }if (this.frog.x < this.truck.x + (this.truck.width - 40) && this.frog.x + this.frog.width > this.truck.x && this.frog.y < this.truck.y + (this.truck.height - 100) && this.frog.height + this.frog.y > this.truck.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck2.x + (this.truck2.width - 40) && this.frog.x + this.frog.width > this.truck2.x && this.frog.y < this.truck2.y + (this.truck2.height - 100) && this.frog.height + this.frog.y > this.truck2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck3.x + (this.truck3.width - 40) && this.frog.x + this.frog.width > this.truck3.x && this.frog.y < this.truck3.y + (this.truck3.height - 100) && this.frog.height + this.frog.y > this.truck3.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.truck4.x + (this.truck4.width - 40) && this.frog.x + this.frog.width > this.truck4.x && this.frog.y < this.truck4.y + (this.truck4.height - 100) && this.frog.height + this.frog.y > this.truck4.y) {
        return this.restartGame(c);
      }
    }
  }, {
    key: 'riverCollision',
    value: function riverCollision(c) {
      if (this.frog.x < this.logLaneOne.x + (this.logLaneOne.width - 50) && this.frog.x + this.frog.width > this.logLaneOne.x && this.frog.y < this.logLaneOne.y + (this.logLaneOne.height - 50) && this.frog.height + this.frog.y > this.logLaneOne.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneOne2.x + (this.logLaneOne2.width - 50) && this.frog.x + this.frog.width > this.logLaneOne2.x && this.frog.y < this.logLaneOne2.y + (this.logLaneOne2.height - 50) && this.frog.height + this.frog.y > this.logLaneOne2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneTwo.x + (this.logLaneTwo.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo.x && this.frog.y < this.logLaneTwo.y + (this.logLaneTwo.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneTwo2.x + (this.logLaneTwo2.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo2.x && this.frog.y < this.logLaneTwo2.y + (this.logLaneTwo2.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneTwo3.x + (this.logLaneTwo3.width - 50) && this.frog.x + this.frog.width > this.logLaneTwo3.x && this.frog.y < this.logLaneTwo3.y + (this.logLaneTwo3.height - 50) && this.frog.height + this.frog.y > this.logLaneTwo3.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneThree.x + (this.logLaneThree.width - 50) && this.frog.x + this.frog.width > this.logLaneThree.x && this.frog.y < this.logLaneThree.y + (this.logLaneThree.height - 50) && this.frog.height + this.frog.y > this.logLaneThree.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.logLaneThree2.x + (this.logLaneThree2.width - 50) && this.frog.x + this.frog.width > this.logLaneThree2.x && this.frog.y < this.logLaneThree2.y + (this.logLaneThree2.height - 50) && this.frog.height + this.frog.y > this.logLaneThree2.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.log4.x + (this.log4.width - 50) && this.frog.x + this.frog.width > this.log4.x && this.frog.y < this.log4.y + (this.log4.height - 50) && this.frog.height + this.frog.y > this.log4.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.log5.x + (this.log5.width - 50) && this.frog.x + this.frog.width > this.log5.x && this.frog.y < this.log5.y + (this.log5.height - 50) && this.frog.height + this.frog.y > this.log5.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.log6.x + (this.log6.width - 50) && this.frog.x + this.frog.width > this.log6.x && this.frog.y < this.log6.y + (this.log6.height - 50) && this.frog.height + this.frog.y > this.log6.y) {
        return this.restartGame(c);
      }if (this.frog.x < this.log7.x + (this.log7.width - 50) && this.frog.x + this.frog.width > this.log7.x && this.frog.y < this.log7.y + (this.log7.height - 50) && this.frog.height + this.frog.y > this.log7.y) {
        return this.restartGame(c);
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

var Enemies = __webpack_require__(/*! ./enemies.js */ "./lib/enemies.js");

var Log = function (_Enemies) {
  _inherits(Log, _Enemies);

  function Log(x, y, height, width) {
    _classCallCheck(this, Log);

    // this.x = x; //10
    // this.y = y; //50
    // this.width = width; //50
    // this.height = height; //70
    var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, x, y, height, width));

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

/***/ "./lib/enemies.js":
/*!************************!*\
  !*** ./lib/enemies.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const Game = require('./Game.js')

var Enemies = function () {
  function Enemies(x, y, height, width) {
    _classCallCheck(this, Enemies);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.death = [];
  }

  _createClass(Enemies, [{
    key: "moveSlowRight",
    value: function moveSlowRight() {
      this.x += 4;
      if (this.x > 1200) {
        this.x = -20;
      }
      return this;
    }
  }, {
    key: "moveMediumRight",
    value: function moveMediumRight() {
      this.x += 5;
      if (this.x > 1200) {
        this.x = -40;
      }
      return this;
    }
  }, {
    key: "moveFastRight",
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
  game.drawCharacters(c);
  game.roadCollision(c);
  game.riverCollision(c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJkZWF0aCIsIkZyb2ciLCJMb2ciLCJUcnVjayIsIkdhbWUiLCJpbWFnZSIsImxpdmVzIiwibGV2ZWwiLCJmcm9nIiwicm9hZE9ic3RhY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwiZHJhd0xvZyIsImNhciIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImNhcjUiLCJjYXI2IiwiY2FyNyIsImNhcjgiLCJjYXI5IiwidHJ1Y2siLCJkcmF3VHJ1Y2siLCJ0cnVjazIiLCJ0cnVjazMiLCJ0cnVjazQiLCJkcmF3RnJvZyIsImNsZWFyUmVjdCIsImNhbnZhcyIsInJlc2V0RnJvZyIsImdhbWVPdmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZVVwIiwibGV2ZWxVcCIsIm1vdmVEb3duIiwicmVzdGFydEdhbWUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwibGl2ZXNMZWZ0IiwiY3VycmVudExldmVsIiwiZHJhd0NoYXJhY3RlcnMiLCJyb2FkQ29sbGlzaW9uIiwicml2ZXJDb2xsaXNpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwibW92ZU1lZGl1bVJpZ2h0IiwibW92ZUZhc3RSaWdodCIsIm1vdmVTbG93UmlnaHQiLCJtb3ZlRnJvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxJQUFF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QUFLaEMsSUFBTCxDQUFVNkMsYUFBVixDQUF3Qi9GLENBQXhCO0FBQ0FrRixPQUFLckIsS0FBTCxDQUFXZ0MsSUFBWCxDQUFnQjdGLENBQWhCO0FBQ0FrRixPQUFLbkIsTUFBTCxDQUFZOEIsSUFBWixDQUFpQjdGLENBQWpCO0FBQ0FrRixPQUFLbEIsTUFBTCxDQUFZNkIsSUFBWixDQUFpQjdGLENBQWpCO0FBQ0FrRixPQUFLakIsTUFBTCxDQUFZNEIsSUFBWixDQUFpQjdGLENBQWpCO0FBQ0Q7O0FBRUQsU0FBU3lFLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCVyxPQUFLZSxRQUFMLENBQWMxQixLQUFkO0FBQ0Q7O0FBRUQsU0FBU2MsU0FBVCxDQUFtQmEsQ0FBbkIsRUFBc0I7QUFDcEJBLElBQUVDLGNBQUY7QUFDRDs7QUFFRCwwQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG4vLyBTYW5kXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5jLmZpbGxTdHlsZSA9IFwiIzQzOUEyQ1wiO1xuYy5mb250ID0gXCI1NXB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG5jLmZpbGxUZXh0KFwiRlJPR0dFUlwiLCA1MDAsIDQwKTtcbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLndpZHRoID0gd2lkdGg7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMuZHJhd0NhciA9IHRoaXMuZHJhd0Nhci5iaW5kKHRoaXMpXG4gIHRoaXMuY2FycyA9IFtdO1xuICB9XG5cbiAgZHJhd0NhcihjKSB7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3ZvbGtzd2Fnb24ucG5nJztcbiAgICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgICByZXR1cm4gdGhpczsgIFxuICB9XG4gIG1vdmUoKSB7XG4gICAgICB0aGlzLnggKz0gMztcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgICB0aGlzLnggPSAtMjBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyO1xuXG5cblxuIiwiLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRlYXRoID0gW107XG4gIH1cblxuICBtb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIG1vdmVNZWRpdW1SaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTtcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgICAgIHRoaXMueCA9IC00MDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlRmFzdFJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA3O1xuICAgICAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcbmNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgVHJ1Y2sgPSByZXF1aXJlKCcuL1RydWNrLmpzJyk7XG5cblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZyg2MDAsIDY1MCwgNTAsIDUwKTtcblxuICAvLyBSb2FkIE9ic3RhY2xlc1xuXG4gIGxldCByb2FkT2JzdGFjbGVzID0gW1xuICAgICAgbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpLFxuICAgICAgbmV3IENhcig0MDAsIDYwNSwgMzUsIDQ1KSxcbiAgICAgIG5ldyBDYXIoMjUwLCA2MDUsIDM1LCA0NSksICAgIFxuICAgICAgbmV3IENhcigxMCwgNTU1LCAzNSwgNDUpLFxuICAgICAgbmV3IENhcigyODAsIDU1NSwgMzUsIDQ1KSxcbiAgICAgIG5ldyBDYXIoLTMwMCwgNTU1LCAzNSwgNDUpLCAgICBcbiAgICAgIG5ldyBDYXIoNDAwLCA1MDUsIDM1LCA0NSksXG4gICAgICBuZXcgQ2FyKDgwMCwgNTA1LCAzNSwgNDUpLFxuICAgICAgbmV3IENhcig2MCwgNTA1LCAzNSwgNDUpLFxuICAgICAgbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApLFxuICAgICAgbmV3IFRydWNrKDYwMCwgNDMwLCA5MCwgMTQwKSxcbiAgICAgIG5ldyBUcnVjaygzMDAsIDM4MCwgOTAsIDE0MCksICAgXG4gICAgICBuZXcgVHJ1Y2soOTAwLCAzODAsIDkwLCAxNDApXVxuICAgICAgY29uc29sZS5sb2cocm9hZE9ic3RhY2xlcylcbiAgLy9SaXZlciBPYnN0YWNsZXNcblxuICAgICAgdGhpcy5sb2dMYW5lT25lID0gbmV3IExvZygtMTAsIDQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZU9uZTIgPSBuZXcgTG9nKC0zNzAsIDQwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nTGFuZVR3byA9IG5ldyBMb2coLTIwMCwgOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVHdvMiA9IG5ldyBMb2coLTMwMCwgOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVHdvMyA9IG5ldyBMb2coLTY1MCwgOTAsIDcwLCAxMDApO1xuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUgPSBuZXcgTG9nKC00MDAsIDE0MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZ0xhbmVUaHJlZTIgPSBuZXcgTG9nKC0xMDAsIDE0MCwgNzAsIDEwMCk7XG4gICAgICB0aGlzLmxvZzQgPSBuZXcgTG9nKC0xMCwgMTkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nNSA9IG5ldyBMb2coLTQwMCwgMTkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nNiA9IG5ldyBMb2coLTIwMCwgMjkwLCA3MCwgMTAwKTtcbiAgICAgIHRoaXMubG9nNyA9IG5ldyBMb2coLTEwLCAyMzAsIDcwLCAxMDApO1xuICAgIH1cblxuICAgIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICAgIHRoaXMubG9nTGFuZU9uZS5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3by5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nTGFuZVR3bzMuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2dMYW5lVGhyZWUyLmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNC5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmxvZzUuZHJhd0xvZyhjKVxuICAgICAgdGhpcy5sb2c2LmRyYXdMb2coYylcbiAgICAgIHRoaXMubG9nNy5kcmF3TG9nKGMpXG4gICAgICB0aGlzLmNhci5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjIuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXIzLmRyYXdDYXIoYykgICAgXG4gICAgICB0aGlzLmNhcjQuZHJhd0NhcihjKVxuICAgICAgdGhpcy5jYXI1LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyNi5kcmF3Q2FyKGMpICAgIFxuICAgICAgdGhpcy5jYXI3LmRyYXdDYXIoYylcbiAgICAgIHRoaXMuY2FyOC5kcmF3Q2FyKGMpXG4gICAgICB0aGlzLmNhcjkuZHJhd0NhcihjKSBcbiAgICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLnRydWNrMi5kcmF3VHJ1Y2soYylcbiAgICAgIHRoaXMudHJ1Y2szLmRyYXdUcnVjayhjKVxuICAgICAgdGhpcy50cnVjazQuZHJhd1RydWNrKGMpXG4gICAgICB0aGlzLmZyb2cuZHJhd0Zyb2coYylcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihjKSB7XG4gICAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjLmZvbnQgPSBcIjE1MHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI1MCwgMzUwKTtcbiAgICAgIGMuZm9udCA9IFwiMjhweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcIlJlZnJlc2ggdG8gdHJ5IGFnYWluXCIsIDQ2MCwgNDUwKTtcbiAgICB9XG5cbiAgICBsaXZlc0xlZnQoYykge1xuICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICBjLmZvbnQgPSBcIjQ1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJsaXZlczogXCIgKyB0aGlzLmxpdmVzLCAyMCwgNjkwKTtcbiAgICB9XG5cbiAgICBjdXJyZW50TGV2ZWwoYykge1xuICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICBjLmZvbnQgPSBcIjQ1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJsZXZlbDogXCIgKyB0aGlzLmxldmVsLCAyMDAsIDY5MCk7XG4gICAgfVxuXG4gICAgcmVzZXRGcm9nKGPCoCkge1xuICAgICAgdGhpcy5mcm9nLnggPSA2MDA7XG4gICAgICB0aGlzLmZyb2cueSA9IDY1MDtcbiAgICB9XG4gICAgcmVzdGFydEdhbWUoYykge1xuICAgICAgdGhpcy5saXZlcyAtLTsgXG4gICAgICB0aGlzLnJlc2V0RnJvZygpO1xuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcihjKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBsZXZlbFVwKCkge1xuICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgY29uc29sZS5sb2codGhpcy5sZXZlbClcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgfVxuICAgIG1vdmVGcm9nKGV2ZW50LCBmcm9nKSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueSA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKXtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPj0gNzAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlTGVmdCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA+PSAxMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgfSAgXG4gICAgIH1cbiAgIH1cblxuICAgIHJvYWRDb2xsaXNpb24oYykge1xuICAgICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIueCArIHRoaXMuY2FyLndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIueSArIHRoaXMuY2FyLmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIueSkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYylcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyMi54ICsgdGhpcy5jYXIyLndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyMi55ICsgdGhpcy5jYXIyLmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIyLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjMueCArIHRoaXMuY2FyMy53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjMueSArIHRoaXMuY2FyMy5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMy55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI0LnggKyB0aGlzLmNhcjQud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI0LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI0LnkgKyB0aGlzLmNhcjQuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjQueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNS54ICsgdGhpcy5jYXI1LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNS55ICsgdGhpcy5jYXI1LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI1LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjYueCArIHRoaXMuY2FyNi53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjYueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjYueSArIHRoaXMuY2FyNi5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNi55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI3LnggKyB0aGlzLmNhcjcud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI3LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI3LnkgKyB0aGlzLmNhcjcuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjcueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyOC54ICsgdGhpcy5jYXI4LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyOC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOC55ICsgdGhpcy5jYXI4LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI4LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjkueCArIHRoaXMuY2FyOS53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjkueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjkueSArIHRoaXMuY2FyOS5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyOS55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjay54ICsgKHRoaXMudHJ1Y2sud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjay55ICArICh0aGlzLnRydWNrLmhlaWdodCAtIDEwMCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2sueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2syLnggKyAodGhpcy50cnVjazIud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2syLnkgKyAodGhpcy50cnVjazIuaGVpZ2h0IC0gMTAwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazIueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2szLnggKyAodGhpcy50cnVjazMud2lkdGggLSA0MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrMy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2szLnkgKyAodGhpcy50cnVjazMuaGVpZ2h0IC0gMTAwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrMy55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazQueCArICh0aGlzLnRydWNrNC53aWR0aCAtIDQwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrNC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2s0LnkgKyAodGhpcy50cnVjazQuaGVpZ2h0IC0gMTAwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrNC55KXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gIFxuICB9XG4gICAgcml2ZXJDb2xsaXNpb24oYykge1xuICAgICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lT25lLnggKyAodGhpcy5sb2dMYW5lT25lLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZS55ICsgKHRoaXMubG9nTGFuZU9uZS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lLnkpIHsgXG4gICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZU9uZTIueCArICh0aGlzLmxvZ0xhbmVPbmUyLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lT25lMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZTIueSArICh0aGlzLmxvZ0xhbmVPbmUyLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVPbmUyLnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVHdvLnggKyAodGhpcy5sb2dMYW5lVHdvLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3by54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3by55ICsgKHRoaXMubG9nTGFuZVR3by5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvLnkpIHsgXG4gICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzIueCArICh0aGlzLmxvZ0xhbmVUd28yLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3bzIueSArICh0aGlzLmxvZ0xhbmVUd28yLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28yLnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzMueCArICh0aGlzLmxvZ0xhbmVUd28zLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28zLnkgKyAodGhpcy5sb2dMYW5lVHdvMy5oZWlnaHQgLSA1MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3bzMueSkgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUaHJlZS54ICsgKHRoaXMubG9nTGFuZVRocmVlLndpZHRoIC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVGhyZWUueSArICh0aGlzLmxvZ0xhbmVUaHJlZS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUueSkgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTsgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnggKyAodGhpcy5sb2dMYW5lVGhyZWUyLndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVGhyZWUyLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUyLmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZTIueSkgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzQueCArICh0aGlzLmxvZzQud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzQueFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNC55ICsgKHRoaXMubG9nNC5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c0LnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNS54ICsgKHRoaXMubG9nNS53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNS55ICsgKHRoaXMubG9nNS5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c1LnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7ICBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzYueCArICh0aGlzLmxvZzYud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzYueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzYueSArICh0aGlzLmxvZzYuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNi55KSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpOyAgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c3LnggKyAodGhpcy5sb2c3LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c3LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c3LnkgKyAodGhpcy5sb2c3LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzcueSkgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9lbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCk7IFxuICAgIC8vIHRoaXMueCA9IHg7IC8vMTBcbiAgICAvLyB0aGlzLnkgPSB5OyAvLzUwXG4gICAgLy8gdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gICAgLy8gdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vNzBcbiAgICB0aGlzLmRyYXdMb2cgPSB0aGlzLmRyYXdMb2cuYmluZCh0aGlzKVxuICB9XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRlYXRoID0gW107XG4gIH1cblxuICBtb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIG1vdmVNZWRpdW1SaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTtcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgICAgIHRoaXMueCA9IC00MDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlRmFzdFJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA3O1xuICAgICAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJylcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cbmxldCBnYW1lOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGNhciwgZnJvZykge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUubGl2ZXNMZWZ0KGMpO1xuICBnYW1lLmN1cnJlbnRMZXZlbChjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgZ2FtZS5yb2FkQ29sbGlzaW9uKGMpO1xuICBnYW1lLnJpdmVyQ29sbGlzaW9uKGMpO1xuICBpZiAoZ2FtZS5saXZlcyA+PSAxKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlKGMpO1xuICBnYW1lLmNhcjUubW92ZShjKTtcbiAgZ2FtZS5jYXI2Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlKGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlKGMpO1xuICBnYW1lLmNhcjkubW92ZShjKTsgIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzMubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2c0Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNS5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzYubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZzcubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyBcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IFxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=