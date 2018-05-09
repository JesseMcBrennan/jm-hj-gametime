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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0NhciIsImJpbmQiLCJjYXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiZGVhdGgiLCJGcm9nIiwiTG9nIiwiVHJ1Y2siLCJyb2FkT2JzdGFjbGVzVHJ1Y2tzIiwicml2ZXJPYnN0YWNsZXMiLCJyb2FkT2JzdGFjbGVzQ2FycyIsImltYWdlIiwibGl2ZXMiLCJsZXZlbCIsImZyb2ciLCJyZXN0YXJ0R2FtZSIsImRyYXdGcm9nIiwiZm9yRWFjaCIsImNhciIsIm1vdmUiLCJ0cnVjayIsImRyYXdUcnVjayIsImxvZyIsImRyYXdMb2ciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJyZXNldEZyb2ciLCJnYW1lT3ZlciIsImNvbnNvbGUiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJsZXZlbFVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwibGl2ZXNMZWZ0IiwiY3VycmVudExldmVsIiwiZHJhd0NoYXJhY3RlcnMiLCJyb2FkQ29sbGlzaW9uIiwicml2ZXJDb2xsaXNpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlRnJvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxJQUFFQyxTQUFGLEdBQWMsU0FBZDtBQUNBRCxJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekI7QUFDQUYsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCOztBQUVBOztBQUVBRixJQUFFQyxTQUFGLEdBQWMsT0FBZDtBQUNBRCxJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekI7O0FB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TixRQUF0QjtBQUNEO0FBRUY7O0FBRUQsU0FBU1osTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUI7QUFDckJVLE9BQUtXLFFBQUwsQ0FBY3JCLEtBQWQ7QUFDRDs7QUFFRCxTQUFTYSxTQUFULENBQW1CUyxDQUFuQixFQUFzQjtBQUNwQkEsSUFBRUMsY0FBRjtBQUNEOztBQUVELDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbi8vIFNhbmRcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcbmMuZmlsbFN0eWxlID0gXCIjNDM5QTJDXCI7XG5jLmZvbnQgPSBcIjU1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbmMuZmlsbFRleHQoXCJGUk9HR0VSXCIsIDUwMCwgNDApO1xuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbiAgdGhpcy5jYXJzID0gW107XG4gIH1cblxuICBkcmF3Q2FyKGMpIHtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICAgIHJldHVybiB0aGlzOyAgXG4gIH1cbiAgbW92ZSgpIHtcbiAgICAgIHRoaXMueCArPSAzO1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7XG5cblxuXG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG4gIG1vdmVTbG93UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDQ7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgbW92ZU1lZGl1bVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1O1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHtcbiAgICAgICAgdGhpcy54ID0gLTQwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVGYXN0UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDc7XG4gICAgICBpZiAodGhpcy54ID4gMTMwMCkge1xuICAgICAgICB0aGlzLnggPSAtNDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IExvZyA9IHJlcXVpcmUoJy4vTG9nLmpzJyk7XG5jb25zdCBUcnVjayA9IHJlcXVpcmUoJy4vVHJ1Y2suanMnKTtcblxuXG4gIC8vIFJvYWQgT2JzdGFjbGVzXG5cbmxldCByb2FkT2JzdGFjbGVzVHJ1Y2tzID0gW1xuICAgICAgbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApLFxuICAgICAgbmV3IFRydWNrKDYwMCwgNDMwLCA5MCwgMTQwKSxcbiAgICAgIG5ldyBUcnVjaygzMDAsIDM4MCwgOTAsIDE0MCksICAgXG4gICAgICBuZXcgVHJ1Y2soOTAwLCAzODAsIDkwLCAxNDApXG4gIF1cblxuICAvL1JpdmVyIE9ic3RhY2xlc1xuXG5sZXQgcml2ZXJPYnN0YWNsZXMgPSBbXG4gICAgICBuZXcgTG9nKC0xMCwgNDAsIDQwLCA3MCksXG4gICAgICBuZXcgTG9nKC0zNzAsIDQwLCA0MCwgNzApLFxuICAgICAgbmV3IExvZygtMjAwLCA5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTMwMCwgOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC02NTAsIDkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtNDAwLCAxNDAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC03MCwgMTQwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtMTAsIDE5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTQwMCwgMTkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtMjAwLCAyOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC0xMCwgMjMwLCA3MCwgNzApXVxuXG4gbGV0IHJvYWRPYnN0YWNsZXNDYXJzID0gW1xuICAgICAgICBuZXcgQ2FyKDEwLCA2MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoNDAwLCA2MDUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoMjUwLCA2MDUsIDM1LCA0NSksICAgIFxuICAgICAgICBuZXcgQ2FyKDEwLCA1NTUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoMjgwLCA1NTUsIDM1LCA0NSksXG4gICAgICAgIG5ldyBDYXIoLTMwMCwgNTU1LCAzNSwgNDUpLCAgICBcbiAgICAgICAgbmV3IENhcig0MDAsIDUwNSwgMzUsIDQ1KSxcbiAgICAgICAgbmV3IENhcig4MDAsIDUwNSwgMzUsIDQ1KSxcbiAgICAgICAgbmV3IENhcig2MCwgNTA1LCAzNSwgNDUpXSBcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZyg2MDAsIDY1MCwgNTAsIDUwKTtcbiAgICAgIHRoaXMucmVzdGFydEdhbWUgPSB0aGlzLnJlc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0NoYXJhY3RlcnMoYykge1xuICAgICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpO1xuXG4gICAgICByb2FkT2JzdGFjbGVzQ2Fycy5mb3JFYWNoKGZ1bmN0aW9uIChjYXIpIHtcbiAgICAgICBjYXIuZHJhd0NhcihjKS5tb3ZlKGMpO1xuICAgICAgfSlcblxuICAgICAgcm9hZE9ic3RhY2xlc1RydWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRydWNrKXtcbiAgICAgICAgdHJ1Y2suZHJhd1RydWNrKGMpLm1vdmUoYyk7XG4gICAgICB9KVxuXG4gICAgICByaXZlck9ic3RhY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGxvZyl7XG4gICAgICAgIGxvZy5kcmF3TG9nKGMpLm1vdmUoYyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdhbWVPdmVyKGMpIHtcbiAgICAgIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIGMuZm9udCA9IFwiMTUwcHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjUwLCAzNTApO1xuICAgICAgYy5mb250ID0gXCIyOHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiUmVmcmVzaCB0byB0cnkgYWdhaW5cIiwgNDYwLCA0NTApO1xuICAgIH1cblxuICAgIGxpdmVzTGVmdChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxpdmVzOiBcIiArIHRoaXMubGl2ZXMsIDIwLCA2OTApO1xuICAgIH1cblxuICAgIGN1cnJlbnRMZXZlbChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxldmVsOiBcIiArIHRoaXMubGV2ZWwsIDIwMCwgNjkwKTtcbiAgICB9XG5cbiAgICByZXNldEZyb2coY8KgKSB7XG4gICAgICB0aGlzLmZyb2cueCA9IDYwMDtcbiAgICAgIHRoaXMuZnJvZy55ID0gNjUwO1xuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgIHRoaXMubGl2ZXMgLS07IFxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoYyk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV2ZWxVcCgpIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWwpXG4gICAgICB0aGlzLnJlc2V0RnJvZygpO1xuICAgIH1cblxuICAgIG1vdmVGcm9nKGV2ZW50LCBmcm9nKSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCl7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueSA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKXtcbiAgICAgICAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPj0gNzAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIHRoaXMuZnJvZy5tb3ZlTGVmdCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgICAgICAgIGlmICh0aGlzLmZyb2cueCA+PSAxMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgfSAgXG4gICAgICB9XG4gICAgIH1cblxuICAgIHJvYWRDb2xsaXNpb24oYykge1xuICAgICAgbGV0IGZyb2cgPSB0aGlzLmZyb2c7XG4gICAgICAvLyBsZXQgcmVzdGFydEdhbWUgPSB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICAgICAgcm9hZE9ic3RhY2xlc0NhcnMuZm9yRWFjaChjYXIgPT4ge1xuICAgICAgICBpZiAoZnJvZy54IDwgY2FyLnggKyBjYXIud2lkdGggXG4gICAgICAgICYmIGZyb2cueCArIGZyb2cud2lkdGggPiBjYXIueCBcbiAgICAgICAgJiYgZnJvZy55IDwgY2FyLnkgKyBjYXIuaGVpZ2h0IFxuICAgICAgICAmJiBmcm9nLmhlaWdodCArIGZyb2cueSA+IGNhci55KSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcm9hZE9ic3RhY2xlc1RydWNrcy5mb3JFYWNoKHRydWNrID0+IHtcbiAgICAgICAgaWYgKGZyb2cueCA8IHRydWNrLnggKyB0cnVjay53aWR0aCBcbiAgICAgICAgJiYgZnJvZy54ICsgZnJvZy53aWR0aCA+IHRydWNrLnggXG4gICAgICAgICYmIGZyb2cueSA8IHRydWNrLnkgKyB0cnVjay5oZWlnaHQgXG4gICAgICAgICYmIGZyb2cuaGVpZ2h0ICsgZnJvZy55ID4gdHJ1Y2sueSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gXG4gICAgcml2ZXJDb2xsaXNpb24oYykge1xuICAgICAgbGV0IGZyb2cgPSB0aGlzLmZyb2c7XG4gICAgICByaXZlck9ic3RhY2xlcy5mb3JFYWNoKGxvZyA9PiB7XG4gICAgICAgICBpZiAoZnJvZy54IDwgbG9nLnggKyBsb2cud2lkdGggXG4gICAgICAgICYmIGZyb2cueCArIGZyb2cud2lkdGggPiBsb2cueCBcbiAgICAgICAgJiYgZnJvZy55IDwgbG9nLnkgKyBsb2cuaGVpZ2h0IFxuICAgICAgICAmJiBmcm9nLmhlaWdodCArIGZyb2cueSA+IGxvZy55KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG59XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbiAgZHJhd0xvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvbG9nLnN2Zyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgICAgdGhpcy54ICs9IDM7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZzsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIFRydWNrIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IFxuICB0aGlzLnkgPSB5OyBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IFxuICB0aGlzLmRyYXdUcnVjayA9IHRoaXMuZHJhd1RydWNrLmJpbmQodGhpcylcbn1cblxuZHJhd1RydWNrKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy90cnVjazIucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbm1vdmUoKSB7XG4gICAgdGhpcy54IC09IDQ7XG4gICAgaWYgKHRoaXMueCA8IC0xNTApIHsgXG4gICAgICB0aGlzLnggPSAxMjAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcnVjazsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxubGV0IGdhbWU7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb3ZlVXApO1xuXG5nYW1lID0gbmV3IEdhbWUoKTtcblxuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyLCBmcm9nKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IFxuICBkcmF3QmFja2dyb3VuZChjKTtcbiAgZ2FtZS5saXZlc0xlZnQoYyk7XG4gIGdhbWUuY3VycmVudExldmVsKGMpO1xuICBnYW1lLmRyYXdDaGFyYWN0ZXJzKGMpO1xuICBnYW1lLnJvYWRDb2xsaXNpb24oYyk7XG4gIGdhbWUucml2ZXJDb2xsaXNpb24oYyk7XG4gIGlmIChnYW1lLmxpdmVzID49IDEpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG4gIFxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=