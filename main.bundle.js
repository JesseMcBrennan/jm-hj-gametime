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
  function Enemies(x, y, height, width) {
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

// Road Obstacles

var roadObstaclesTrucks = [new Truck(10, 430, 90, 140), new Truck(600, 430, 90, 140), new Truck(300, 380, 90, 140), new Truck(900, 380, 90, 140)];

//River Obstacles

var riverObstacles = [new Log(-10, 40, 40, 70), new Log(-370, 40, 40, 70), new Log(-200, 90, 70, 70), new Log(-300, 90, 70, 70), new Log(-650, 90, 70, 70), new Log(-400, 140, 70, 70), new Log(-70, 140, 70, 70), new Log(-10, 190, 70, 70), new Log(-400, 190, 70, 70), new Log(-200, 290, 70, 70), new Log(-10, 230, 70, 70)];

var roadObstaclesCars = [new Car(10, 605, 35, 45), new Car(400, 605, 35, 45), new Car(250, 605, 35, 45), new Car(10, 555, 35, 45), new Car(280, 555, 35, 45), new Car(-300, 555, 35, 45), new Car(400, 505, 35, 45), new Car(800, 505, 35, 45), new Car(60, 505, 35, 45)];

var Game = function () {
  function Game(c, image) {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.level = 1;
    this.frog = new Frog(600, 650, 50, 50);
    this.restartGame = this.restartGame.bind(this);
  }

  _createClass(Game, [{
    key: 'drawCharacters',
    value: function drawCharacters(c) {
      this.frog.drawFrog(c);

      roadObstaclesCars.forEach(function (car) {
        car.drawCar(c).move(c);
      });

      roadObstaclesTrucks.forEach(function (truck) {
        truck.drawTruck(c).move(c);
      });

      riverObstacles.forEach(function (log) {
        log.drawLog(c).move(c);
      });
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
      var _this = this;

      var frog = this.frog;
      // let restartGame = this.restartGame(c);
      roadObstaclesCars.forEach(function (car) {
        if (frog.x < car.x + car.width && frog.x + frog.width > car.x && frog.y < car.y + car.height && frog.height + frog.y > car.y) {
          return _this.restartGame(c);
        }
      });

      roadObstaclesTrucks.forEach(function (truck) {
        if (frog.x < truck.x + truck.width && frog.x + frog.width > truck.x && frog.y < truck.y + truck.height && frog.height + frog.y > truck.y) {
          return _this.restartGame(c);
        }
      });
    }
  }, {
    key: 'riverCollision',
    value: function riverCollision(c) {
      var _this2 = this;

      var frog = this.frog;
      riverObstacles.forEach(function (log) {
        if (frog.x < log.x + log.width && frog.x + frog.width > log.x && frog.y < log.y + log.height && frog.height + frog.y > log.y) {
          return _this2.restartGame(c);
        }
      });
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
      return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiZGVhdGgiLCJGcm9nIiwiTG9nIiwiVHJ1Y2siLCJyb2FkT2JzdGFjbGVzVHJ1Y2tzIiwicml2ZXJPYnN0YWNsZXMiLCJyb2FkT2JzdGFjbGVzQ2FycyIsImltYWdlIiwibGl2ZXMiLCJsZXZlbCIsImZyb2ciLCJyZXN0YXJ0R2FtZSIsImRyYXdGcm9nIiwiZm9yRWFjaCIsImNhciIsIm1vdmUiLCJ0cnVjayIsImRyYXdUcnVjayIsImxvZyIsImRyYXdMb2ciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJyZXNldEZyb2ciLCJnYW1lT3ZlciIsImNvbnNvbGUiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJsZXZlbFVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwibGl2ZXNMZWZ0IiwiY3VycmVudExldmVsIiwiZHJhd0NoYXJhY3RlcnMiLCJyb2FkQ29sbGlzaW9uIiwicml2ZXJDb2xsaXNpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlRnJvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxJQUFFQyxTQUFGLEdBQWMsU0FBZDtBQUNBRCxJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekI7QUFDQUYsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCOztBQUVBOztBQUVBRixJQUFFQyxTQUFGLEdBQWMsT0FBZDtBQUNBRCxJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekI7O0FB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LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG4vLyBTYW5kXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5jLmZpbGxTdHlsZSA9IFwiIzQzOUEyQ1wiO1xuYy5mb250ID0gXCI1NXB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG5jLmZpbGxUZXh0KFwiRlJPR0dFUlwiLCA1MDAsIDQwKTtcbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLndpZHRoID0gd2lkdGg7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMuZHJhd0NhciA9IHRoaXMuZHJhd0Nhci5iaW5kKHRoaXMpXG4gIHRoaXMuY2FycyA9IFtdO1xuICB9XG5cbiAgZHJhd0NhcihjKSB7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3ZvbGtzd2Fnb24ucG5nJztcbiAgICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgICByZXR1cm4gdGhpczsgIFxuICB9XG4gIG1vdmUoKSB7XG4gICAgICB0aGlzLnggKz0gMztcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgICB0aGlzLnggPSAtMjBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyO1xuXG5cblxuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRlYXRoID0gW107XG4gIH1cblxuICBtb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIG1vdmVNZWRpdW1SaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTtcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgICAgIHRoaXMueCA9IC00MDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlRmFzdFJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA3O1xuICAgICAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcbmNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgVHJ1Y2sgPSByZXF1aXJlKCcuL1RydWNrLmpzJyk7XG5cblxuICAvLyBSb2FkIE9ic3RhY2xlc1xuXG5sZXQgcm9hZE9ic3RhY2xlc1RydWNrcyA9IFtcbiAgICAgIG5ldyBUcnVjaygxMCwgNDMwLCA5MCwgMTQwKSxcbiAgICAgIG5ldyBUcnVjayg2MDAsIDQzMCwgOTAsIDE0MCksXG4gICAgICBuZXcgVHJ1Y2soMzAwLCAzODAsIDkwLCAxNDApLCAgIFxuICAgICAgbmV3IFRydWNrKDkwMCwgMzgwLCA5MCwgMTQwKVxuICBdXG5cbiAgLy9SaXZlciBPYnN0YWNsZXNcblxubGV0IHJpdmVyT2JzdGFjbGVzID0gW1xuICAgICAgbmV3IExvZygtMTAsIDQwLCA0MCwgNzApLFxuICAgICAgbmV3IExvZygtMzcwLCA0MCwgNDAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTIwMCwgOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtNjUwLCA5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtNzAsIDE0MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTEwLCAxOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTIwMCwgMjkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtMTAsIDIzMCwgNzAsIDcwKV1cblxuIGxldCByb2FkT2JzdGFjbGVzQ2FycyA9IFtcbiAgICAgICAgbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDQwMCwgNjA1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDI1MCwgNjA1LCAzNSwgNDUpLCAgICBcbiAgICAgICAgbmV3IENhcigxMCwgNTU1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKDI4MCwgNTU1LCAzNSwgNDUpLFxuICAgICAgICBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KSwgICAgXG4gICAgICAgIG5ldyBDYXIoNDAwLCA1MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoODAwLCA1MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoNjAsIDUwNSwgMzUsIDQ1KV0gXG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgICB0aGlzLmxpdmVzID0gMztcbiAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG4gICAgICB0aGlzLnJlc3RhcnRHYW1lID0gdGhpcy5yZXN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICAgIHRoaXMuZnJvZy5kcmF3RnJvZyhjKTtcblxuICAgICAgcm9hZE9ic3RhY2xlc0NhcnMuZm9yRWFjaChmdW5jdGlvbiAoY2FyKSB7XG4gICAgICAgY2FyLmRyYXdDYXIoYykubW92ZShjKTtcbiAgICAgIH0pXG5cbiAgICAgIHJvYWRPYnN0YWNsZXNUcnVja3MuZm9yRWFjaChmdW5jdGlvbih0cnVjayl7XG4gICAgICAgIHRydWNrLmRyYXdUcnVjayhjKS5tb3ZlKGMpO1xuICAgICAgfSlcblxuICAgICAgcml2ZXJPYnN0YWNsZXMuZm9yRWFjaChmdW5jdGlvbihsb2cpe1xuICAgICAgICBsb2cuZHJhd0xvZyhjKS5tb3ZlKGMpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihjKSB7XG4gICAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjLmZvbnQgPSBcIjE1MHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI1MCwgMzUwKTtcbiAgICAgIGMuZm9udCA9IFwiMjhweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcIlJlZnJlc2ggdG8gdHJ5IGFnYWluXCIsIDQ2MCwgNDUwKTtcbiAgICB9XG5cbiAgICBsaXZlc0xlZnQoYykge1xuICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICBjLmZvbnQgPSBcIjQ1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJsaXZlczogXCIgKyB0aGlzLmxpdmVzLCAyMCwgNjkwKTtcbiAgICB9XG5cbiAgICBjdXJyZW50TGV2ZWwoYykge1xuICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICBjLmZvbnQgPSBcIjQ1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJsZXZlbDogXCIgKyB0aGlzLmxldmVsLCAyMDAsIDY5MCk7XG4gICAgfVxuXG4gICAgcmVzZXRGcm9nKGPCoCkge1xuICAgICAgdGhpcy5mcm9nLnggPSA2MDA7XG4gICAgICB0aGlzLmZyb2cueSA9IDY1MDtcbiAgICB9XG5cbiAgICByZXN0YXJ0R2FtZShjKSB7XG4gICAgICB0aGlzLmxpdmVzIC0tOyBcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGMpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxldmVsVXAoKSB7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsKVxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICB9XG5cbiAgICBtb3ZlRnJvZyhldmVudCwgZnJvZykge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzgpe1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlVXAoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPT09IDApe1xuICAgICAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVEb3duKCk7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvZy55ID49IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZUxlZnQoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnggPj0gMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIH0gIFxuICAgICAgfVxuICAgICB9XG5cbiAgICByb2FkQ29sbGlzaW9uKGMpIHtcbiAgICAgIGxldCBmcm9nID0gdGhpcy5mcm9nO1xuICAgICAgLy8gbGV0IHJlc3RhcnRHYW1lID0gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgIHJvYWRPYnN0YWNsZXNDYXJzLmZvckVhY2goY2FyID0+IHtcbiAgICAgICAgaWYgKGZyb2cueCA8IGNhci54ICsgY2FyLndpZHRoIFxuICAgICAgICAmJiBmcm9nLnggKyBmcm9nLndpZHRoID4gY2FyLnggXG4gICAgICAgICYmIGZyb2cueSA8IGNhci55ICsgY2FyLmhlaWdodCBcbiAgICAgICAgJiYgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiBjYXIueSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJvYWRPYnN0YWNsZXNUcnVja3MuZm9yRWFjaCh0cnVjayA9PiB7XG4gICAgICAgIGlmIChmcm9nLnggPCB0cnVjay54ICsgdHJ1Y2sud2lkdGggXG4gICAgICAgICYmIGZyb2cueCArIGZyb2cud2lkdGggPiB0cnVjay54IFxuICAgICAgICAmJiBmcm9nLnkgPCB0cnVjay55ICsgdHJ1Y2suaGVpZ2h0IFxuICAgICAgICAmJiBmcm9nLmhlaWdodCArIGZyb2cueSA+IHRydWNrLnkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IFxuICAgIHJpdmVyQ29sbGlzaW9uKGMpIHtcbiAgICAgIGxldCBmcm9nID0gdGhpcy5mcm9nO1xuICAgICAgcml2ZXJPYnN0YWNsZXMuZm9yRWFjaChsb2cgPT4ge1xuICAgICAgICAgaWYgKGZyb2cueCA8IGxvZy54ICsgbG9nLndpZHRoIFxuICAgICAgICAmJiBmcm9nLnggKyBmcm9nLndpZHRoID4gbG9nLnggXG4gICAgICAgICYmIGZyb2cueSA8IGxvZy55ICsgbG9nLmhlaWdodCBcbiAgICAgICAgJiYgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiBsb2cueSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICAgICAgICB9XG4gICAgICB9KVxufVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBMb2cgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgpOyBcbiAgICB0aGlzLmRyYXdMb2cgPSB0aGlzLmRyYXdMb2cuYmluZCh0aGlzKVxuICB9XG5cbiAgZHJhd0xvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvbG9nLnN2Zyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgICAgdGhpcy54ICs9IDM7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZzsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIFRydWNrIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IFxuICB0aGlzLnkgPSB5OyBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IFxuICB0aGlzLmRyYXdUcnVjayA9IHRoaXMuZHJhd1RydWNrLmJpbmQodGhpcylcbn1cblxuZHJhd1RydWNrKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy90cnVjazIucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbm1vdmUoKSB7XG4gICAgdGhpcy54IC09IDQ7XG4gICAgaWYgKHRoaXMueCA8IC0xNTApIHsgXG4gICAgICB0aGlzLnggPSAxMjAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcnVjazsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcblxuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyLCBmcm9nKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IFxuICBkcmF3QmFja2dyb3VuZChjKTtcbiAgZ2FtZS5saXZlc0xlZnQoYyk7XG4gIGdhbWUuY3VycmVudExldmVsKGMpO1xuICBnYW1lLmRyYXdDaGFyYWN0ZXJzKGMpO1xuICBnYW1lLnJvYWRDb2xsaXNpb24oYyk7XG4gIGdhbWUucml2ZXJDb2xsaXNpb24oYyk7XG4gIGlmIChnYW1lLmxpdmVzID49IDEpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG4gIFxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=