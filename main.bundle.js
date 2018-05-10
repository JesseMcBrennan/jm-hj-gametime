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
      var _this = this;

      // event.preventDefault();
      var keyCommands = {
        'key38': function key38() {
          return _this.frog.moveUp('up', canvas);
        },
        'key40': function key40() {
          return _this.frog.moveDown('down', canvas);
        },
        'key37': function key37() {
          return _this.frog.moveLeft('left', canvas);
        },
        'key39': function key39() {
          return _this.frog.moveRight('right', canvas);
        }
      };

      function evalInput(event) {
        if (keyboard[event]) {
          keyboard['key' + event]();
        }
      }
    }
    //   if (event.keyCode === 38){
    //      this.frog.moveUp();
    //      if (this.frog.y === 0){
    //        this.levelUp();
    //      }
    //    } else {
    //   if (event.keyCode === 40){
    //      this.frog.moveDown();
    //      if (this.frog.y >= 700) {
    //        this.restartGame();
    //      }
    //    } else {
    //   if (event.keyCode === 37) {
    //      this.frog.moveLeft();
    //      if (this.frog.x < 0) {
    //        this.restartGame();
    //      }
    //    } else {
    //   if (event.keyCode === 39) {
    //      this.frog.moveRight();
    //      if (this.frog.x >= 1200) {
    //        this.restartGame();
    //      }
    //     }
    //    }
    //   }  
    //  }
    // }

  }, {
    key: 'roadCollision',
    value: function roadCollision(c) {
      var _this2 = this;

      var frog = this.frog;
      roadObstaclesCars.forEach(function (car) {
        if (frog.x < car.x + car.width && frog.x + frog.width > car.x && frog.y < car.y + car.height && frog.height + frog.y > car.y) {
          return _this2.restartGame(c);
        }
      });

      roadObstaclesTrucks.forEach(function (truck) {
        if (frog.x < truck.x + truck.width && frog.x + frog.width > truck.x && frog.y < truck.y + truck.height && frog.height + frog.y > truck.y) {
          return _this2.restartGame(c);
        }
      });
    }
  }, {
    key: 'riverCollision',
    value: function riverCollision(c) {
      var _this3 = this;

      var frog = this.frog;
      riverObstacles.forEach(function (log) {
        if (frog.x < log.x + log.width && frog.x + frog.width > log.x && frog.y < log.y + log.height && frog.height + frog.y > log.y) {
          return _this3.restartGame(c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRW5lbWllcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9UcnVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZHJhd0JhY2tncm91bmQiLCJjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiRW5lbWllcyIsInJlcXVpcmUiLCJDYXIiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiZHJhd0NhciIsImJpbmQiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkZyb2ciLCJMb2ciLCJUcnVjayIsInJvYWRPYnN0YWNsZXNUcnVja3MiLCJyaXZlck9ic3RhY2xlcyIsInJvYWRPYnN0YWNsZXNDYXJzIiwiR2FtZSIsImltYWdlIiwibGl2ZXMiLCJsZXZlbCIsImZyb2ciLCJkcmF3RnJvZyIsImZvckVhY2giLCJjYXIiLCJtb3ZlIiwidHJ1Y2siLCJkcmF3VHJ1Y2siLCJsb2ciLCJkcmF3TG9nIiwiY2xlYXJSZWN0IiwiY2FudmFzIiwicmVzZXRGcm9nIiwiZ2FtZU92ZXIiLCJldmVudCIsImtleUNvbW1hbmRzIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImV2YWxJbnB1dCIsImtleWJvYXJkIiwicmVzdGFydEdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsImxpdmVzTGVmdCIsImN1cnJlbnRMZXZlbCIsImRyYXdDaGFyYWN0ZXJzIiwicm9hZENvbGxpc2lvbiIsInJpdmVyQ29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZUZyb2ciLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM5QkEsSUFBRUMsU0FBRixHQUFjLFNBQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FGLElBQUVFLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixFQUF6Qjs7QUFFQTs7QUFFQUYsSUFBRUMsU0FBRixHQUFjLE9BQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCOztBQUVBOztBQUVB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QW9CdkUsQ0FBcEI7QUFDQSxNQUFJOEQsS0FBSzNCLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNuQnFDLDBCQUFzQk4sUUFBdEI7QUFDRDtBQUVGOztBQUVELFNBQVNkLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCWSxPQUFLVyxRQUFMLENBQWN2QixLQUFkO0FBQ0Q7O0FBRUQsU0FBU2UsU0FBVCxDQUFtQlMsQ0FBbkIsRUFBc0I7QUFDcEJBLElBQUVDLGNBQUY7QUFDRDs7QUFFRCwwQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG4vLyBTYW5kXG5cbmMuZmlsbFN0eWxlID0gXCIjOTY3OTY3XCI7XG5jLmZpbGxSZWN0KDAsMCwgMTIwMCwgNTApXG5jLmZpbGxTdHlsZSA9IFwiIzQzOUEyQ1wiO1xuYy5mb250ID0gXCI1NXB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG5jLmZpbGxUZXh0KFwiRlJPR0dFUlwiLCA1MDAsIDQwKTtcbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNDUwKTtcbmMubGluZVRvKDEyMDAsIDQ1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1NTApO1xuYy5saW5lVG8oMTIwMCwgNTUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNjAwKTtcbmMubGluZVRvKDEyMDAsIDYwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgXG4gIHRoaXMueSA9IHk7IFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuZHJhd0NhciA9IHRoaXMuZHJhd0Nhci5iaW5kKHRoaXMpXG4gIH1cblxuICBkcmF3Q2FyKGMpIHtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyBcbiAgICAgIHJldHVybiB0aGlzOyAgXG4gIH1cbiAgbW92ZSgpIHtcbiAgICAgIHRoaXMueCArPSAzO1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7XG5cblxuXG4iLCJjbGFzcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmVtaWVzOyIsImNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuXG5cbmxldCByb2FkT2JzdGFjbGVzVHJ1Y2tzID0gW1xuICAgICAgbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApLFxuICAgICAgbmV3IFRydWNrKDYwMCwgNDMwLCA5MCwgMTQwKSxcbiAgICAgIG5ldyBUcnVjaygzMDAsIDM4MCwgOTAsIDE0MCksICAgXG4gICAgICBuZXcgVHJ1Y2soOTAwLCAzODAsIDkwLCAxNDApXG4gIF1cblxubGV0IHJpdmVyT2JzdGFjbGVzID0gW1xuICAgICAgbmV3IExvZygtMTAsIDQwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtMzcwLCA0MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTIwMCwgOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtNjUwLCA5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtNzAsIDE0MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTEwLCAxOTAsIDcwLCA3MCksXG4gICAgICBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDcwKSxcbiAgICAgIG5ldyBMb2coLTIwMCwgMjkwLCA3MCwgNzApLFxuICAgICAgbmV3IExvZygtMTAsIDIzMCwgNzAsIDcwKV1cblxuIGxldCByb2FkT2JzdGFjbGVzQ2FycyA9IFtcbiAgICAgICAgbmV3IENhcigxMCwgNjA1LCA0NSwgMzUpLFxuICAgICAgICBuZXcgQ2FyKDQwMCwgNjA1LCA0NSwgMzUpLFxuICAgICAgICBuZXcgQ2FyKDI1MCwgNjA1LCA0NSwgMzUpLCAgICBcbiAgICAgICAgbmV3IENhcigxMCwgNTU1LCA0NSwgMzUpLFxuICAgICAgICBuZXcgQ2FyKDI4MCwgNTU1LCA0NSwgMzUpLFxuICAgICAgICBuZXcgQ2FyKC0zMDAsIDU1NSwgNDUsIDM1KSwgICAgXG4gICAgICAgIG5ldyBDYXIoNDAwLCA1MDUsIDQ1LCAzNSksXG4gICAgICAgIG5ldyBDYXIoODAwLCA1MDUsIDQ1LCAzNSksXG4gICAgICAgIG5ldyBDYXIoNjAsIDUwNSwgNDUsIDM1KV0gXG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgICB0aGlzLmxpdmVzID0gMztcbiAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG4gICAgfVxuXG4gICAgZHJhd0NoYXJhY3RlcnMoYykge1xuICAgICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpO1xuXG4gICAgICByb2FkT2JzdGFjbGVzQ2Fycy5mb3JFYWNoKGZ1bmN0aW9uIChjYXIpIHtcbiAgICAgICBjYXIuZHJhd0NhcihjKS5tb3ZlKGMpO1xuICAgICAgfSlcblxuICAgICAgcm9hZE9ic3RhY2xlc1RydWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRydWNrKXtcbiAgICAgICAgdHJ1Y2suZHJhd1RydWNrKGMpLm1vdmUoYyk7XG4gICAgICB9KVxuXG4gICAgICByaXZlck9ic3RhY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGxvZyl7XG4gICAgICAgIGxvZy5kcmF3TG9nKGMpLm1vdmUoYyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdhbWVPdmVyKGMpIHtcbiAgICAgIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIGMuZm9udCA9IFwiMTUwcHggJ0luZGllIEZsb3dlcicsIGN1cnNpdmVcIjtcbiAgICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjUwLCAzNTApO1xuICAgICAgYy5mb250ID0gXCIyOHB4ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlXCI7XG4gICAgICBjLmZpbGxUZXh0KFwiUmVmcmVzaCB0byB0cnkgYWdhaW5cIiwgNDYwLCA0NTApO1xuICAgIH1cblxuICAgIGxpdmVzTGVmdChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxpdmVzOiBcIiArIHRoaXMubGl2ZXMsIDIwLCA2OTApO1xuICAgIH1cblxuICAgIGN1cnJlbnRMZXZlbChjKSB7XG4gICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgIGMuZm9udCA9IFwiNDVweCAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZVwiO1xuICAgICAgYy5maWxsVGV4dChcImxldmVsOiBcIiArIHRoaXMubGV2ZWwsIDIwMCwgNjkwKTtcbiAgICB9XG5cbiAgICByZXNldEZyb2coKSB7XG4gICAgICB0aGlzLmZyb2cueCA9IDYwMDtcbiAgICAgIHRoaXMuZnJvZy55ID0gNjUwO1xuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgIHRoaXMubGl2ZXMgLS07IFxuICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoYyk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV2ZWxVcCgpIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgfVxuXG4gICAgbW92ZUZyb2coZXZlbnQsIGZyb2cpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBrZXlDb21tYW5kcyA9IHtcbiAgICAgICAgJ2tleTM4JzogKCkgPT4gdGhpcy5mcm9nLm1vdmVVcCgndXAnLCBjYW52YXMpLFxuICAgICAgICAna2V5NDAnOiAoKSA9PiB0aGlzLmZyb2cubW92ZURvd24oJ2Rvd24nLCBjYW52YXMpLFxuICAgICAgICAna2V5MzcnOiAoKSA9PiB0aGlzLmZyb2cubW92ZUxlZnQoJ2xlZnQnLCBjYW52YXMpLFxuICAgICAgICAna2V5MzknOiAoKSA9PiB0aGlzLmZyb2cubW92ZVJpZ2h0KCdyaWdodCcsIGNhbnZhcyksXG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBldmFsSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGtleWJvYXJkW2V2ZW50XSkge1xuICAgICAgICAgIGtleWJvYXJkW2BrZXkke2V2ZW50fWBdKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB9XG4gICAgIC8vICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICAgLy8gICAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgIC8vICAgICAgaWYgKHRoaXMuZnJvZy55ID09PSAwKXtcbiAgICAgLy8gICAgICAgIHRoaXMubGV2ZWxVcCgpO1xuICAgICAvLyAgICAgIH1cbiAgICAgLy8gICAgfSBlbHNlIHtcbiAgICAgLy8gICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgICAvLyAgICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgICAvLyAgICAgIGlmICh0aGlzLmZyb2cueSA+PSA3MDApIHtcbiAgICAgLy8gICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgLy8gICAgICB9XG4gICAgIC8vICAgIH0gZWxzZSB7XG4gICAgIC8vICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgIC8vICAgICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgIC8vICAgICAgaWYgKHRoaXMuZnJvZy54IDwgMCkge1xuICAgICAvLyAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAvLyAgICAgIH1cbiAgICAgLy8gICAgfSBlbHNlIHtcbiAgICAgLy8gICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgLy8gICAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgIC8vICAgICAgaWYgKHRoaXMuZnJvZy54ID49IDEyMDApIHtcbiAgICAgLy8gICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgLy8gICAgICB9XG4gICAgIC8vICAgICB9XG4gICAgIC8vICAgIH1cbiAgICAgLy8gICB9ICBcbiAgICAgLy8gIH1cbiAgICAgLy8gfVxuXG4gICAgcm9hZENvbGxpc2lvbihjKSB7XG4gICAgICBsZXQgZnJvZyA9IHRoaXMuZnJvZztcbiAgICAgIHJvYWRPYnN0YWNsZXNDYXJzLmZvckVhY2goY2FyID0+IHtcbiAgICAgICAgaWYgKGZyb2cueCA8IGNhci54ICsgY2FyLndpZHRoIFxuICAgICAgICAmJiBmcm9nLnggKyBmcm9nLndpZHRoID4gY2FyLnggXG4gICAgICAgICYmIGZyb2cueSA8IGNhci55ICsgY2FyLmhlaWdodCBcbiAgICAgICAgJiYgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiBjYXIueSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJvYWRPYnN0YWNsZXNUcnVja3MuZm9yRWFjaCh0cnVjayA9PiB7XG4gICAgICAgIGlmIChmcm9nLnggPCB0cnVjay54ICsgdHJ1Y2sud2lkdGggXG4gICAgICAgICYmIGZyb2cueCArIGZyb2cud2lkdGggPiB0cnVjay54IFxuICAgICAgICAmJiBmcm9nLnkgPCB0cnVjay55ICsgdHJ1Y2suaGVpZ2h0IFxuICAgICAgICAmJiBmcm9nLmhlaWdodCArIGZyb2cueSA+IHRydWNrLnkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IFxuICAgIHJpdmVyQ29sbGlzaW9uKGMpIHtcbiAgICAgIGxldCBmcm9nID0gdGhpcy5mcm9nO1xuICAgICAgcml2ZXJPYnN0YWNsZXMuZm9yRWFjaChsb2cgPT4ge1xuICAgICAgICAgaWYgKGZyb2cueCA8IGxvZy54ICsgbG9nLndpZHRoIFxuICAgICAgICAmJiBmcm9nLnggKyBmcm9nLndpZHRoID4gbG9nLnggXG4gICAgICAgICYmIGZyb2cueSA8IGxvZy55ICsgbG9nLmhlaWdodCBcbiAgICAgICAgJiYgZnJvZy5oZWlnaHQgKyBmcm9nLnkgPiBsb2cueSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgTG9nIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoKTsgXG4gICAgdGhpcy5kcmF3TG9nID0gdGhpcy5kcmF3TG9nLmJpbmQodGhpcylcbiAgfVxuXG4gIGRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICAgIHRoaXMueCArPSAzO1xuICAgICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICAgIHRoaXMueCA9IC0yMFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyBcbiAgdGhpcy55ID0geTsgXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJylcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cbmxldCBnYW1lOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGNhciwgZnJvZykge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUubGl2ZXNMZWZ0KGMpO1xuICBnYW1lLmN1cnJlbnRMZXZlbChjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgZ2FtZS5yb2FkQ29sbGlzaW9uKGMpO1xuICBnYW1lLnJpdmVyQ29sbGlzaW9uKGMpO1xuICBpZiAoZ2FtZS5saXZlcyA+PSAxKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBcbn07XG5cbmZ1bmN0aW9uIG1vdmVVcChldmVudCkge1xuICBnYW1lLm1vdmVGcm9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9