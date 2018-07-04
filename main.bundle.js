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


c; //Grass
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

  function Car(x, y, height, width) {
    _classCallCheck(this, Car);

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, x, y, width, height));

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

var Enemies = function Enemies(x, y, height, width) {
  _classCallCheck(this, Enemies);

  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
};

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

var roadObstaclesTrucks = [new Truck(10, 430, 90, 140), new Truck(600, 430, 90, 140), new Truck(300, 380, 90, 140), new Truck(900, 380, 90, 140)];

var riverObstacles = [new Log(-10, 40, 70, 70), new Log(-370, 40, 70, 70), new Log(-200, 90, 70, 70), new Log(-300, 90, 70, 70), new Log(-650, 90, 70, 70), new Log(-400, 140, 70, 70), new Log(-70, 140, 70, 70), new Log(-10, 190, 70, 70), new Log(-400, 190, 70, 70), new Log(-200, 290, 70, 70), new Log(-10, 230, 70, 70)];

var roadObstaclesCars = [new Car(10, 605, 45, 35), new Car(400, 605, 45, 35), new Car(250, 605, 45, 35), new Car(10, 555, 45, 35), new Car(280, 555, 45, 35), new Car(-300, 555, 45, 35), new Car(400, 505, 45, 35), new Car(800, 505, 45, 35), new Car(60, 505, 45, 35)];

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
        value: function resetFrog() {
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
            this.resetFrog();
        }
    }, {
        key: 'moveFrog',
        value: function moveFrog(event, frog) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiYyIsImRyYXdCYWNrZ3JvdW5kIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiZHJhd0NhciIsImJpbmQiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkZyb2ciLCJMb2ciLCJUcnVjayIsInJvYWRPYnN0YWNsZXNUcnVja3MiLCJyaXZlck9ic3RhY2xlcyIsInJvYWRPYnN0YWNsZXNDYXJzIiwiR2FtZSIsImltYWdlIiwibGl2ZXMiLCJsZXZlbCIsImZyb2ciLCJkcmF3RnJvZyIsImZvckVhY2giLCJjYXIiLCJtb3ZlIiwidHJ1Y2siLCJkcmF3VHJ1Y2siLCJsb2ciLCJkcmF3TG9nIiwiY2xlYXJSZWN0IiwiY2FudmFzIiwicmVzZXRGcm9nIiwiZ2FtZU92ZXIiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJsZXZlbFVwIiwibW92ZURvd24iLCJyZXN0YXJ0R2FtZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJsaXZlc0xlZnQiLCJjdXJyZW50TGV2ZWwiLCJkcmF3Q2hhcmFjdGVycyIsInJvYWRDb2xsaXNpb24iLCJyaXZlckNvbGxpc2lvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmVGcm9nIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBQSxFLENBQUM7QUFDRCxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNELENBQUQsRUFBTztBQUM5QkEsSUFBRUUsU0FBRixHQUFjLFNBQWQ7QUFDQUYsSUFBRUcsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FILElBQUVHLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixFQUF6Qjs7QUFFQTs7QUFFQUgsSUFBRUUsU0FBRixHQUFjLE9BQWQ7QUFDQUYsSUFBRUcsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCOztBQUVBOztBQUVBOztBQUVBSCxJ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QW9CckUsQ0FBcEI7QUFDQThELE9BQUtRLGFBQUwsQ0FBbUJ0RSxDQUFuQjtBQUNBOEQsT0FBS1MsY0FBTCxDQUFvQnZFLENBQXBCO0FBQ0EsTUFBSThELEtBQUsxQixLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDbkJvQywwQkFBc0JOLFFBQXRCO0FBQ0Q7QUFFRjs7QUFFRCxTQUFTYixNQUFULENBQWdCRixLQUFoQixFQUF1QjtBQUNyQlcsT0FBS1csUUFBTCxDQUFjdEIsS0FBZDtBQUNEOztBQUVELFNBQVNjLFNBQVQsQ0FBbUJTLENBQW5CLEVBQXNCO0FBQ3BCQSxJQUFFQyxjQUFGO0FBQ0Q7O0FBRUQsMEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjLy9HcmFzc1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSAoYykgPT4ge1xuYy5maWxsU3R5bGUgPSBcIiM0Q0E0MzJcIjtcbmMuZmlsbFJlY3QoMCwgNjUwLCAxMjAwLCA1MCk7XG5jLmZpbGxSZWN0KDAsIDM1MCwgMTIwMCwgNTApO1xuXG4vL1JvYWRcblxuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG5jLmZpbGxSZWN0KDAsIDQwMCwgMTIwMCwgMjUwKTtcblxuLy8gV2F0ZXIgXG5cbi8vIFNhbmRcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcbmMuZmlsbFN0eWxlID0gXCIjNDM5QTJDXCI7XG5jLmZvbnQgPSBcIjU1cHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbmMuZmlsbFRleHQoXCJGUk9HR0VSXCIsIDUwMCwgNDApO1xuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbiAgfVxuXG4gIGRyYXdDYXIoYykge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy92b2xrc3dhZ29uLnBuZyc7XG4gICAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7IFxuICAgICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxuICBtb3ZlKCkge1xuICAgICAgdGhpcy54ICs9IDM7XG4gICAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgICAgdGhpcy54ID0gLTIwXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcjtcblxuXG5cbiIsImNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiIGNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuXG5cbmxldCByb2FkT2JzdGFjbGVzVHJ1Y2tzID0gW1xuICAgIG5ldyBUcnVjaygxMCwgNDMwLCA5MCwgMTQwKSxcbiAgICBuZXcgVHJ1Y2soNjAwLCA0MzAsIDkwLCAxNDApLFxuICAgIG5ldyBUcnVjaygzMDAsIDM4MCwgOTAsIDE0MCksXG4gICAgbmV3IFRydWNrKDkwMCwgMzgwLCA5MCwgMTQwKVxuXVxuXG5sZXQgcml2ZXJPYnN0YWNsZXMgPSBbXG4gICAgbmV3IExvZygtMTAsIDQwLCA3MCwgNzApLFxuICAgIG5ldyBMb2coLTM3MCwgNDAsIDcwLCA3MCksXG4gICAgbmV3IExvZygtMjAwLCA5MCwgNzAsIDcwKSxcbiAgICBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgNzApLFxuICAgIG5ldyBMb2coLTY1MCwgOTAsIDcwLCA3MCksXG4gICAgbmV3IExvZygtNDAwLCAxNDAsIDcwLCA3MCksXG4gICAgbmV3IExvZygtNzAsIDE0MCwgNzAsIDcwKSxcbiAgICBuZXcgTG9nKC0xMCwgMTkwLCA3MCwgNzApLFxuICAgIG5ldyBMb2coLTQwMCwgMTkwLCA3MCwgNzApLFxuICAgIG5ldyBMb2coLTIwMCwgMjkwLCA3MCwgNzApLFxuICAgIG5ldyBMb2coLTEwLCAyMzAsIDcwLCA3MClcbl1cblxubGV0IHJvYWRPYnN0YWNsZXNDYXJzID0gW1xuICAgIG5ldyBDYXIoMTAsIDYwNSwgNDUsIDM1KSxcbiAgICBuZXcgQ2FyKDQwMCwgNjA1LCA0NSwgMzUpLFxuICAgIG5ldyBDYXIoMjUwLCA2MDUsIDQ1LCAzNSksXG4gICAgbmV3IENhcigxMCwgNTU1LCA0NSwgMzUpLFxuICAgIG5ldyBDYXIoMjgwLCA1NTUsIDQ1LCAzNSksXG4gICAgbmV3IENhcigtMzAwLCA1NTUsIDQ1LCAzNSksXG4gICAgbmV3IENhcig0MDAsIDUwNSwgNDUsIDM1KSxcbiAgICBuZXcgQ2FyKDgwMCwgNTA1LCA0NSwgMzUpLFxuICAgIG5ldyBDYXIoNjAsIDUwNSwgNDUsIDM1KVxuXVxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgICAgICB0aGlzLmxpdmVzID0gMztcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKDYwMCwgNjUwLCA1MCwgNTApO1xuICAgIH1cblxuICAgIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICAgICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpO1xuXG4gICAgICAgIHJvYWRPYnN0YWNsZXNDYXJzLmZvckVhY2goZnVuY3Rpb24oY2FyKSB7XG4gICAgICAgICAgICBjYXIuZHJhd0NhcihjKS5tb3ZlKGMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJvYWRPYnN0YWNsZXNUcnVja3MuZm9yRWFjaChmdW5jdGlvbih0cnVjaykge1xuICAgICAgICAgICAgdHJ1Y2suZHJhd1RydWNrKGMpLm1vdmUoYyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcml2ZXJPYnN0YWNsZXMuZm9yRWFjaChmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgIGxvZy5kcmF3TG9nKGMpLm1vdmUoYyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoYykge1xuICAgICAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgYy5mb250ID0gXCIxNTBweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgICBjLmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI1MCwgMzUwKTtcbiAgICAgICAgYy5mb250ID0gXCIyOHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICAgIGMuZmlsbFRleHQoXCJSZWZyZXNoIHRvIHRyeSBhZ2FpblwiLCA0NjAsIDQ1MCk7XG4gICAgfVxuXG4gICAgbGl2ZXNMZWZ0KGMpIHtcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgICBjLmZpbGxUZXh0KFwibGl2ZXM6IFwiICsgdGhpcy5saXZlcywgMjAsIDY5MCk7XG4gICAgfVxuXG4gICAgY3VycmVudExldmVsKGMpIHtcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgICBjLmZpbGxUZXh0KFwibGV2ZWw6IFwiICsgdGhpcy5sZXZlbCwgMjAwLCA2OTApO1xuICAgIH1cblxuICAgIHJlc2V0RnJvZygpIHtcbiAgICAgICAgdGhpcy5mcm9nLnggPSA2MDA7XG4gICAgICAgIHRoaXMuZnJvZy55ID0gNjUwO1xuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgICAgdGhpcy5saXZlcy0tO1xuICAgICAgICB0aGlzLnJlc2V0RnJvZygpO1xuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcihjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldmVsVXAoKSB7XG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICB9XG5cbiAgICBtb3ZlRnJvZyhldmVudCwgZnJvZykge1xuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJvZy55ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcm9nLnkgPj0gNzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb2cubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJvZy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcm9nLnggPj0gMTIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvYWRDb2xsaXNpb24oYykge1xuICAgICAgICBsZXQgZnJvZyA9IHRoaXMuZnJvZztcbiAgICAgICAgcm9hZE9ic3RhY2xlc0NhcnMuZm9yRWFjaChjYXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb2cueCA8IGNhci54ICsgY2FyLndpZHRoICYmXG4gICAgICAgICAgICAgICAgZnJvZy54ICsgZnJvZy53aWR0aCA+IGNhci54ICYmXG4gICAgICAgICAgICAgICAgZnJvZy55IDwgY2FyLnkgKyBjYXIuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiBjYXIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJvYWRPYnN0YWNsZXNUcnVja3MuZm9yRWFjaCh0cnVjayA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvZy54IDwgdHJ1Y2sueCArIHRydWNrLndpZHRoICYmXG4gICAgICAgICAgICAgICAgZnJvZy54ICsgZnJvZy53aWR0aCA+IHRydWNrLnggJiZcbiAgICAgICAgICAgICAgICBmcm9nLnkgPCB0cnVjay55ICsgdHJ1Y2suaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiB0cnVjay55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJpdmVyQ29sbGlzaW9uKGMpIHtcbiAgICAgICAgbGV0IGZyb2cgPSB0aGlzLmZyb2c7XG4gICAgICAgIHJpdmVyT2JzdGFjbGVzLmZvckVhY2gobG9nID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9nLnggPCBsb2cueCArIGxvZy53aWR0aCAmJlxuICAgICAgICAgICAgICAgIGZyb2cueCArIGZyb2cud2lkdGggPiBsb2cueCAmJlxuICAgICAgICAgICAgICAgIGZyb2cueSA8IGxvZy55ICsgbG9nLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIGZyb2cuaGVpZ2h0ICsgZnJvZy55ID4gbG9nLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCk7IFxuICAgIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG4gIH1cblxuICBkcmF3TG9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9sb2cuc3ZnJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgICB0aGlzLnggKz0gMztcbiAgICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgICB0aGlzLnggPSAtMjBcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgVHJ1Y2sgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLndpZHRoID0gd2lkdGg7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMuZHJhd1RydWNrID0gdGhpcy5kcmF3VHJ1Y2suYmluZCh0aGlzKVxufVxuXG5kcmF3VHJ1Y2soYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL3RydWNrMi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggLT0gNDtcbiAgICBpZiAodGhpcy54IDwgLTE1MCkgeyBcbiAgICAgIHRoaXMueCA9IDEyMDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRydWNrOyIsImNsYXNzIEZyb2cge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gICBkcmF3RnJvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgICBcbiAgfVxuXG4gIG1vdmVVcCgpIHtcbiAgICB0aGlzLnkgLT0gNTA7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcbiAgICB0aGlzLnkgKz0gNTA7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICB0aGlzLnggLT0gNTA7XG4gIH1cblxuICBtb3ZlUmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDUwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuXG5sZXQgZ2FtZTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVVcCk7XG5cbmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChjYXIsIGZyb2cpIHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmxpdmVzTGVmdChjKTtcbiAgZ2FtZS5jdXJyZW50TGV2ZWwoYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIGdhbWUucm9hZENvbGxpc2lvbihjKTtcbiAgZ2FtZS5yaXZlckNvbGxpc2lvbihjKTtcbiAgaWYgKGdhbWUubGl2ZXMgPj0gMSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxufTtcblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=