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

// Road Obstacles

var roadObstaclesTrucks = [new Truck(10, 430, 90, 140), new Truck(600, 430, 90, 140), new Truck(300, 380, 90, 140), new Truck(900, 380, 90, 140)];

//River Obstacles

var riverObstacles = [new Log(-10, 40, 70, 100), new Log(-370, 40, 70, 100), new Log(-200, 90, 70, 100), new Log(-300, 90, 70, 100), new Log(-650, 90, 70, 100), new Log(-400, 140, 70, 100), new Log(-100, 140, 70, 100), new Log(-10, 190, 70, 100), new Log(-400, 190, 70, 100), new Log(-200, 290, 70, 100), new Log(-10, 230, 70, 100)];

var roadObstaclesCars = [new Car(10, 605, 35, 45), new Car(400, 605, 35, 45), new Car(250, 605, 35, 45), new Car(10, 555, 35, 45), new Car(280, 555, 35, 45), new Car(-300, 555, 35, 45), new Car(400, 505, 35, 45), new Car(800, 505, 35, 45), new Car(60, 505, 35, 45)];

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.level = 1;
    this.frog = new Frog(600, 650, 50, 50);
  }

  _createClass(Game, [{
    key: 'drawCharacters',
    value: function drawCharacters(c) {
      console.log(roadObstaclesCars);
      roadObstaclesCars.forEach(function (car) {
        console.log(drawCar);
        car.drawCar(c);
      });
    }

    // this.riverObstacles[i].drawLog(c);

    // this.roadObstaclesTrucks[i].drawTruck(c);
    // this.frog.drawFrog(c)


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

var Enemies = __webpack_require__(/*! ./Enemies.js */ "./lib/Enemies.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJkZWF0aCIsIkZyb2ciLCJMb2ciLCJUcnVjayIsInJvYWRPYnN0YWNsZXNUcnVja3MiLCJyaXZlck9ic3RhY2xlcyIsInJvYWRPYnN0YWNsZXNDYXJzIiwiR2FtZSIsImltYWdlIiwibGl2ZXMiLCJsZXZlbCIsImZyb2ciLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImNhciIsImNsZWFyUmVjdCIsImNhbnZhcyIsInJlc2V0RnJvZyIsImdhbWVPdmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZVVwIiwibGV2ZWxVcCIsIm1vdmVEb3duIiwicmVzdGFydEdhbWUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImNhcjUiLCJjYXI2IiwiY2FyNyIsImNhcjgiLCJjYXI5IiwidHJ1Y2siLCJ0cnVjazIiLCJ0cnVjazMiLCJ0cnVjazQiLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwiZHJhd0xvZyIsImRyYXdUcnVjayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwibGl2ZXNMZWZ0IiwiY3VycmVudExldmVsIiwiZHJhd0NoYXJhY3RlcnMiLCJyb2FkQ29sbGlzaW9uIiwicml2ZXJDb2xsaXNpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwibW92ZU1lZGl1bVJpZ2h0IiwibW92ZUZhc3RSaWdodCIsIm1vdmVTbG93UmlnaHQiLCJtb3ZlRnJvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFP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LElBQUwsQ0FBVW1CLGVBQVYsQ0FBMEJoRyxDQUExQjtBQUNBb0YsT0FBS04sSUFBTCxDQUFVbUIsYUFBVixDQUF3QmpHLENBQXhCO0FBQ0FvRixPQUFLcEIsS0FBTCxDQUFXK0IsSUFBWCxDQUFnQi9GLENBQWhCO0FBQ0FvRixPQUFLbkIsTUFBTCxDQUFZOEIsSUFBWixDQUFpQi9GLENBQWpCO0FBQ0FvRixPQUFLbEIsTUFBTCxDQUFZNkIsSUFBWixDQUFpQi9GLENBQWpCO0FBQ0FvRixPQUFLakIsTUFBTCxDQUFZNEIsSUFBWixDQUFpQi9GLENBQWpCO0FBQ0Q7O0FBRUQsU0FBU2tELE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCb0MsT0FBS2UsUUFBTCxDQUFjbkQsS0FBZDtBQUNEOztBQUVELFNBQVN1QyxTQUFULENBQW1CYSxDQUFuQixFQUFzQjtBQUNwQkEsSUFBRUMsY0FBRjtBQUNEOztBQUVELDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbi8vIFNhbmRcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcbmMuZmlsbFN0eWxlID0gXCIjNDM5QTJDXCI7XG5jLmZvbnQgPSBcIjU1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbmMuZmlsbFRleHQoXCJGUk9HR0VSXCIsIDUwMCwgNDApO1xuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbiAgdGhpcy5jYXJzID0gW107XG4gIH1cblxuICBkcmF3Q2FyKGMpIHtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICAgIHJldHVybiB0aGlzOyAgXG4gIH1cbiAgbW92ZSgpIHtcbiAgICAgIHRoaXMueCArPSAzO1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7XG5cblxuXG4iLCIvLyBjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG4gIG1vdmVTbG93UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDQ7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgbW92ZU1lZGl1bVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVGYXN0UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDc7XG4gICAgICBpZiAodGhpcy54ID4gMTMwMCkge1xuICAgICAgICB0aGlzLnggPSAtNDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IExvZyA9IHJlcXVpcmUoJy4vTG9nLmpzJyk7XG5jb25zdCBUcnVjayA9IHJlcXVpcmUoJy4vVHJ1Y2suanMnKTtcblxuICAvLyBSb2FkIE9ic3RhY2xlc1xuXG5sZXQgcm9hZE9ic3RhY2xlc1RydWNrcyA9IFtcbiAgICAgIG5ldyBUcnVjaygxMCwgNDMwLCA5MCwgMTQwKSxcbiAgICAgIG5ldyBUcnVjayg2MDAsIDQzMCwgOTAsIDE0MCksXG4gICAgICBuZXcgVHJ1Y2soMzAwLCAzODAsIDkwLCAxNDApLCAgIFxuICAgICAgbmV3IFRydWNrKDkwMCwgMzgwLCA5MCwgMTQwKVxuICBdXG5cbiAgLy9SaXZlciBPYnN0YWNsZXNcblxubGV0IHJpdmVyT2JzdGFjbGVzID0gW1xuICAgICAgbmV3IExvZygtMTAsIDQwLCA3MCwgMTAwKSxcbiAgICAgIG5ldyBMb2coLTM3MCwgNDAsIDcwLCAxMDApLFxuICAgICAgbmV3IExvZygtMjAwLCA5MCwgNzAsIDEwMCksXG4gICAgICBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgMTAwKSxcbiAgICAgIG5ldyBMb2coLTY1MCwgOTAsIDcwLCAxMDApLFxuICAgICAgbmV3IExvZygtNDAwLCAxNDAsIDcwLCAxMDApLFxuICAgICAgbmV3IExvZygtMTAwLCAxNDAsIDcwLCAxMDApLFxuICAgICAgbmV3IExvZygtMTAsIDE5MCwgNzAsIDEwMCksXG4gICAgICBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDEwMCksXG4gICAgICBuZXcgTG9nKC0yMDAsIDI5MCwgNzAsIDEwMCksXG4gICAgICBuZXcgTG9nKC0xMCwgMjMwLCA3MCwgMTAwKV1cblxuIGxldCByb2FkT2JzdGFjbGVzQ2FycyA9IFtcbiAgICAgICAgbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDQwMCwgNjA1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDI1MCwgNjA1LCAzNSwgNDUpLCAgICBcbiAgICAgICAgbmV3IENhcigxMCwgNTU1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDI4MCwgNTU1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KSwgICAgXG4gICAgICAgIG5ldyBDYXIoNDAwLCA1MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoODAwLCA1MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoNjAsIDUwNSwgMzUsIDQ1KV0gXG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgICB0aGlzLmxpdmVzID0gMztcbiAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG4gICAgfVxuXG5cbiAgICBkcmF3Q2hhcmFjdGVycyhjKSB7XG4gICAgICBjb25zb2xlLmxvZyhyb2FkT2JzdGFjbGVzQ2FycylcbiAgICAgIHJvYWRPYnN0YWNsZXNDYXJzLmZvckVhY2goZnVuY3Rpb24gKGNhcikge1xuICAgICAgICBjb25zb2xlLmxvZyhkcmF3Q2FyKVxuICAgICAgICAgIGNhci5kcmF3Q2FyKGMpO1xuICAgIH0pXG4gICAgfVxuICBcbiAgICAgIC8vIHRoaXMucml2ZXJPYnN0YWNsZXNbaV0uZHJhd0xvZyhjKTtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5yb2FkT2JzdGFjbGVzVHJ1Y2tzW2ldLmRyYXdUcnVjayhjKTtcbiAgICAgIC8vIHRoaXMuZnJvZy5kcmF3RnJvZyhjKVxuICAgIFxuXG4gICAgZ2FtZU92ZXIoYykge1xuICAgICAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgYy5mb250ID0gXCIxNTBweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNTAsIDM1MCk7XG4gICAgICBjLmZvbnQgPSBcIjI4cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJSZWZyZXNoIHRvIHRyeSBhZ2FpblwiLCA0NjAsIDQ1MCk7XG4gICAgfVxuXG4gICAgbGl2ZXNMZWZ0KGMpIHtcbiAgICAgIGMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgYy5mb250ID0gXCI0NXB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwibGl2ZXM6IFwiICsgdGhpcy5saXZlcywgMjAsIDY5MCk7XG4gICAgfVxuXG4gICAgY3VycmVudExldmVsKGMpIHtcbiAgICAgIGMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgYy5mb250ID0gXCI0NXB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwibGV2ZWw6IFwiICsgdGhpcy5sZXZlbCwgMjAwLCA2OTApO1xuICAgIH1cblxuICAgIHJlc2V0RnJvZyhjwqApIHtcbiAgICAgIHRoaXMuZnJvZy54ID0gNjAwO1xuICAgICAgdGhpcy5mcm9nLnkgPSA2NTA7XG4gICAgfVxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgIHRoaXMubGl2ZXMgLS07IFxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoYyk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV2ZWxVcCgpIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWwpXG4gICAgICB0aGlzLnJlc2V0RnJvZygpO1xuICAgIH1cbiAgICBtb3ZlRnJvZyhldmVudCwgZnJvZykge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzgpe1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlVXAoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPT09IDApe1xuICAgICAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVEb3duKCk7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvZy55ID49IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZUxlZnQoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnggPj0gMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIH0gIFxuICAgICB9XG4gICB9XG5cbiAgICByb2FkQ29sbGlzaW9uKGMpIHtcbiAgICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyLnggKyB0aGlzLmNhci53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhci54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyLnkgKyB0aGlzLmNhci5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyLnkpIHsgXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpXG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjIueCArIHRoaXMuY2FyMi53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjIueSArIHRoaXMuY2FyMi5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMi55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIzLnggKyB0aGlzLmNhcjMud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXIzLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIzLnkgKyB0aGlzLmNhcjMuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjMueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNC54ICsgdGhpcy5jYXI0LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNC54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNC55ICsgdGhpcy5jYXI0LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI0LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjUueCArIHRoaXMuY2FyNS53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjUueSArIHRoaXMuY2FyNS5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNS55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI2LnggKyB0aGlzLmNhcjYud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI2LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI2LnkgKyB0aGlzLmNhcjYuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjYueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNy54ICsgdGhpcy5jYXI3LndpZHRoIFxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNy55ICsgdGhpcy5jYXI3LmhlaWdodCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI3LnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjgueCArIHRoaXMuY2FyOC53aWR0aCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjgueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjgueSArIHRoaXMuY2FyOC5oZWlnaHQgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyOC55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI5LnggKyB0aGlzLmNhcjkud2lkdGggXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI5LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI5LnkgKyB0aGlzLmNhcjkuaGVpZ2h0IFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjkueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2sueCArICh0aGlzLnRydWNrLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjay54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2sueSAgKyAodGhpcy50cnVjay5oZWlnaHQgLSAxMDApIFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrMi54ICsgKHRoaXMudHJ1Y2syLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrMi55ICsgKHRoaXMudHJ1Y2syLmhlaWdodCAtIDEwMCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2syLnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gIH0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrMy54ICsgKHRoaXMudHJ1Y2szLndpZHRoIC0gNDApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazMueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrMy55ICsgKHRoaXMudHJ1Y2szLmhlaWdodCAtIDEwMClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazMueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgfSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2s0LnggKyAodGhpcy50cnVjazQud2lkdGggLSA0MCkgXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazQueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrNC55ICsgKHRoaXMudHJ1Y2s0LmhlaWdodCAtIDEwMClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazQueSl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICB9ICBcbiAgfVxuICAgIHJpdmVyQ29sbGlzaW9uKGMpIHtcbiAgICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZU9uZS54ICsgKHRoaXMubG9nTGFuZU9uZS53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVPbmUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVPbmUueSArICh0aGlzLmxvZ0xhbmVPbmUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZU9uZS55KSB7IFxuICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUyLnggKyAodGhpcy5sb2dMYW5lT25lMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZTIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVPbmUyLnkgKyAodGhpcy5sb2dMYW5lT25lMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lMi55KSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3by54ICsgKHRoaXMubG9nTGFuZVR3by53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28ueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28ueSArICh0aGlzLmxvZ0xhbmVUd28uaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3by55KSB7IFxuICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28yLnggKyAodGhpcy5sb2dMYW5lVHdvMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzIueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28yLnkgKyAodGhpcy5sb2dMYW5lVHdvMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMi55KSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpOyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28zLnggKyAodGhpcy5sb2dMYW5lVHdvMy53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28zLnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMy55ICsgKHRoaXMubG9nTGFuZVR3bzMuaGVpZ2h0IC0gNTApIFxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28zLnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUueCArICh0aGlzLmxvZ0xhbmVUaHJlZS53aWR0aCAtIDUwKSBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUaHJlZS54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVRocmVlLnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7IFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVRocmVlMi54ICsgKHRoaXMubG9nTGFuZVRocmVlMi53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlMi54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlMi55ICsgKHRoaXMubG9nTGFuZVRocmVlMi5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUyLnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c0LnggKyAodGhpcy5sb2c0LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c0LnhcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzQueSArICh0aGlzLmxvZzQuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNC55KSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpOyBcblxuICAgICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzUueCArICh0aGlzLmxvZzUud2lkdGggLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzUueCBcbiAgICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzUueSArICh0aGlzLmxvZzUuaGVpZ2h0IC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNS55KSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpOyAgXG5cbiAgICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c2LnggKyAodGhpcy5sb2c2LndpZHRoIC0gNTApXG4gICAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c2LnggXG4gICAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c2LnkgKyAodGhpcy5sb2c2LmhlaWdodCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzYueSkgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTsgIFxuXG4gICAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNy54ICsgKHRoaXMubG9nNy53aWR0aCAtIDUwKVxuICAgICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNy54IFxuICAgICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNy55ICsgKHRoaXMubG9nNy5oZWlnaHQgLSA1MClcbiAgICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c3LnkpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBMb2cgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgpOyBcbiAgICAvLyB0aGlzLnggPSB4OyAvLzEwXG4gICAgLy8gdGhpcy55ID0geTsgLy81MFxuICAgIC8vIHRoaXMud2lkdGggPSB3aWR0aDsgLy81MFxuICAgIC8vIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gICAgdGhpcy5kcmF3TG9nID0gdGhpcy5kcmF3TG9nLmJpbmQodGhpcylcbiAgfVxuXG5kcmF3TG9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9sb2cuc3ZnJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICBcblxuXG4gIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgVHJ1Y2sgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLndpZHRoID0gd2lkdGg7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMuZHJhd1RydWNrID0gdGhpcy5kcmF3VHJ1Y2suYmluZCh0aGlzKVxufVxuXG5kcmF3VHJ1Y2soYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3RydWNrMi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggLT0gNDtcbiAgICBpZiAodGhpcy54IDwgLTE1MCkgeyBcbiAgICAgIHRoaXMueCA9IDEyMDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRydWNrOyIsImNsYXNzIEZyb2cge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gICBkcmF3RnJvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0gNTA7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcbiAgICB0aGlzLnkgKz0gNTA7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICB0aGlzLnggLT0gNTA7XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDUwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuXG5sZXQgZ2FtZTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVVcCk7XG5cbmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChjYXIsIGZyb2cpIHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmxpdmVzTGVmdChjKTtcbiAgZ2FtZS5jdXJyZW50TGV2ZWwoYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIGdhbWUucm9hZENvbGxpc2lvbihjKTtcbiAgZ2FtZS5yaXZlckNvbGxpc2lvbihjKTtcbiAgaWYgKGdhbWUubGl2ZXMgPj0gMSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cbiAgZ2FtZS5jYXIubW92ZShjKTtcbiAgZ2FtZS5jYXIyLm1vdmUoYyk7XG4gIGdhbWUuY2FyMy5tb3ZlKGMpO1xuICBnYW1lLmNhcjQubW92ZShjKTtcbiAgZ2FtZS5jYXI1Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNi5tb3ZlKGMpO1xuICBnYW1lLmNhcjcubW92ZShjKTsgIFxuICBnYW1lLmNhcjgubW92ZShjKTtcbiAgZ2FtZS5jYXI5Lm1vdmUoYyk7ICBcbiAgZ2FtZS5sb2dMYW5lT25lLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lT25lMi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3by5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28zLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVGhyZWUubW92ZUZhc3RSaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVGhyZWUyLm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUubG9nNC5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzUubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c2Lm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2c3Lm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgXG4gIGdhbWUudHJ1Y2szLm1vdmUoYyk7IFxuICBnYW1lLnRydWNrNC5tb3ZlKGMpOyBcbn07XG5cbmZ1bmN0aW9uIG1vdmVVcChldmVudCkge1xuICBnYW1lLm1vdmVGcm9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9