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

// var car = new Car(10, 550, 50, 50)
// var log = new Log(10, 50, 70, 50)

// var enemies = [car, log];

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

    //River Obstales

    //first array of logs -- line one
    this.logLaneOne = new Log(-10, 40, 70, 100);
    this.logLaneOne2 = new Log(-370, 40, 70, 100);

    //second array of logs -- line two
    this.logLaneTwo = new Log(-200, 90, 70, 100);
    this.logLaneTwo2 = new Log(-300, 90, 70, 100);
    this.logLaneTwo3 = new Log(-650, 90, 70, 100);

    //third array of logs -- line three
    this.logLaneThree = new Log(-400, 140, 70, 100);
    this.logLaneThree2 = new Log(-100, 140, 70, 100);

    //fourth array of logs -- line four
    this.log4 = new Log(-10, 190, 70, 100);
    this.log5 = new Log(-400, 190, 70, 100);

    //fifth array of logs -- line five
    this.log6 = new Log(-200, 290, 70, 100);

    //sixth array of logs -- line six
    this.log7 = new Log(-10, 230, 70, 100);

    this.truck = new Truck(10, 380, 90, 140);
    this.truck2 = new Truck(600, 380, 90, 140);
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
      // console.log(this.frog.x)this.frog.x;

      // console.log(this.frog.height)
      // let frogW = this.frog.width;
      // let frogH = this.frog.height;
    }

    // gameOver(c) {
    //   c.clearRect(0, 0, canvas.width, canvas.height);
    //   c.fillStyle = "white";
    //   c.font = "72px Arial";
    //   c.fillText("GAME OVER", 6, 100);
    //   c.font = "28px Arial";
    //   c.fillText("Refresh to try again", 50, 150);
    // }

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
      // if (this.lives === 0) {
      //   this.gameOver();
      // }
      // console.log(this.lives)
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event, frog) {
      event.preventDefault();
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
    key: 'roadCollision',
    value: function roadCollision(x, y, height, width, restartGame) {
      if (this.frog.x < this.car.x + this.car.width && this.frog.x + this.frog.width > this.car.x && this.frog.y < this.car.y + this.car.height && this.frog.height + this.frog.y > this.car.y) {
        return this.restartGame();
      }if (this.frog.x < this.car2.x + this.car2.width && this.frog.x + this.frog.width > this.car2.x && this.frog.y < this.car2.y + this.car2.height && this.frog.height + this.frog.y > this.car2.y) {
        return this.restartGame();
      }if (this.frog.x < this.car3.x + this.car3.width && this.frog.x + this.frog.width > this.car3.x && this.frog.y < this.car3.y + this.car3.height && this.frog.height + this.frog.y > this.car3.y) {
        return this.restartGame();
      }if (this.frog.x < this.car4.x + this.car4.width && this.frog.x + this.frog.width > this.car4.x && this.frog.y < this.car4.y + this.car4.height && this.frog.height + this.frog.y > this.car4.y) {
        return this.restartGame();
      }if (this.frog.x < this.car5.x + this.car5.width && this.frog.x + this.frog.width > this.car5.x && this.frog.y < this.car5.y + this.car5.height && this.frog.height + this.frog.y > this.car5.y) {
        return this.restartGame();
      }if (this.frog.x < this.car6.x + this.car6.width && this.frog.x + this.frog.width > this.car6.x && this.frog.y < this.car6.y + this.car6.height && this.frog.height + this.frog.y > this.car6.y) {
        return this.restartGame();
      }if (this.frog.x < this.car7.x + this.car7.width && this.frog.x + this.frog.width > this.car7.x && this.frog.y < this.car7.y + this.car7.height && this.frog.height + this.frog.y > this.car7.y) {
        return this.restartGame();
      }if (this.frog.x < this.car8.x + this.car8.width && this.frog.x + this.frog.width > this.car8.x && this.frog.y < this.car8.y + this.car8.height && this.frog.height + this.frog.y > this.car8.y) {
        return this.restartGame();
      }if (this.frog.x < this.car9.x + this.car9.width && this.frog.x + this.frog.width > this.car9.x && this.frog.y < this.car9.y + this.car9.height && this.frog.height + this.frog.y > this.car9.y) {
        return this.restartGame();
      }if (this.frog.x < this.truck.x + (this.truck.width - 40) && this.frog.x + this.frog.width > this.truck.x && this.frog.y < this.truck.y + (this.truck.height - 90) && this.frog.height + this.frog.y > this.truck.y) {
        return this.restartGame();
      }if (this.frog.x < this.truck2.x + (this.truck2.width - 40) && this.frog.x + this.frog.width > this.truck2.x && this.frog.y < this.truck2.y + (this.truck2.height - 90) && this.frog.height + this.frog.y > this.truck2.y) {
        return this.restartGame();
      }if (this.frog.x < this.truck3.x + (this.truck3.width - 40) && this.frog.x + this.frog.width > this.truck3.x && this.frog.y < this.truck3.y + (this.truck3.height - 90) && this.frog.height + this.frog.y > this.truck3.y) {
        return this.restartGame();
      }if (this.frog.x < this.truck4.x + (this.truck4.width - 40) && this.frog.x + this.frog.width > this.truck4.x && this.frog.y < this.truck4.y + (this.truck4.height - 90) && this.frog.height + this.frog.y > this.truck4.y) {
        return this.restartGame();
      }
    }
  }, {
    key: 'rideLog',
    value: function rideLog(x, y, height, width) {
      if (this.frog.x < this.logLaneOne.x + this.logLaneOne.width && this.frog.x + this.frog.width > this.logLaneOne.x && this.frog.y < this.logLaneOne.y + this.logLaneOne.height && this.frog.height + this.frog.y > this.logLaneOne.y) {

        this.frog.x = this.logLaneOne.x;
      }if (this.frog.x < this.logLaneOne2.x + this.logLaneOne2.width && this.frog.x + this.frog.width > this.logLaneOne2.x && this.frog.y < this.logLaneOne2.y + this.logLaneOne2.height && this.frog.height + this.frog.y > this.logLaneOne2.y) {
        this.frog.x = this.logLaneOne2.x;
      }if (this.frog.x < this.logLaneTwo.x + this.logLaneTwo.width && this.frog.x + this.frog.width > this.logLaneTwo.x && this.frog.y < this.logLaneTwo.y + this.logLaneTwo.height && this.frog.height + this.frog.y > this.logLaneTwo.y) {
        this.frog.x = this.logLaneTwo.x;
      }if (this.frog.x < this.logLaneTwo2.x + this.logLaneTwo2.width && this.frog.x + this.frog.width > this.logLaneTwo2.x && this.frog.y < this.logLaneTwo2.y + this.logLaneTwo2.height && this.frog.height + this.frog.y > this.logLaneTwo2.y) {
        this.frog.x = this.logLaneTwo2.x;
      }if (this.frog.x < this.logLaneTwo3.x + this.logLaneTwo3.width && this.frog.x + this.frog.width > this.logLaneTwo3.x && this.frog.y < this.logLaneTwo3.y + this.logLaneTwo3.height && this.frog.height + this.frog.y > this.logLaneTwo3.y) {
        this.frog.x = this.logLaneTwo3.x;
      }if (this.frog.x < this.logLaneThree.x + this.logLaneThree.width && this.frog.x + this.frog.width > this.logLaneThree.x && this.frog.y < this.logLaneThree.y + this.logLaneThree.height && this.frog.height + this.frog.y > this.logLaneThree.y) {
        this.frog.x = this.logLaneThree.x;
      }if (this.frog.x < this.logLaneThree2.x + this.logLaneThree2.width && this.frog.x + this.frog.width > this.logLaneThree2.x && this.frog.y < this.logLaneThree2.y + this.logLaneThree2.height && this.frog.height + this.frog.y > this.logLaneThree2.y) {
        this.frog.x = this.logLaneThree2.x;
      }if (this.frog.x < this.log4.x + this.log4.width && this.frog.x + this.frog.width > this.log4.x && this.frog.y < this.log4.y + this.log4.height && this.frog.height + this.frog.y > this.log4.y) {
        this.frog.x = this.log4.x;
      }if (this.frog.x < this.log5.x + this.log5.width && this.frog.x + this.frog.width > this.log5.x && this.frog.y < this.log5.y + this.log5.height && this.frog.height + this.frog.y > this.log5.y) {
        this.frog.x = this.log5.x;
      }if (this.frog.x < this.log6.x + this.log6.width && this.frog.x + this.frog.width > this.log6.x && this.frog.y < this.log6.y + this.log6.height && this.frog.height + this.frog.y > this.log6.y) {
        this.frog.x = this.log6.x;
      }if (this.frog.x < this.log7.x + this.log7.width && this.frog.x + this.frog.width > this.log7.x && this.frog.y < this.logLaneThree2.y + this.logLaneThree2.height && this.frog.height + this.frog.y > this.logLaneThree2.y) {
        this.frog.x = this.log7.x;
      }
    }
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

window.addEventListener('click', startGame);
window.addEventListener('keydown', moveUp);

game = new Game();
// var car = new Car();
gameLoop();

function gameLoop(car, frog) {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.roadCollision(c);
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
  game.truck3.move(c); //draw all characters
  game.truck4.move(c); //draw all characters
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RydWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbmVtaWVzIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2FyIiwiYmluZCIsImNhcnMiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkdhbWUiLCJkZWF0aCIsIkZyb2ciLCJJbmRleCIsIkxvZyIsIlRydWNrIiwiQ29sbGlzaW9uIiwiaW1hZ2UiLCJsaXZlcyIsImZyb2ciLCJjYXIiLCJjYXIyIiwiY2FyMyIsImNhcjQiLCJjYXI1IiwiY2FyNiIsImNhcjciLCJjYXI4IiwiY2FyOSIsImxvZ0xhbmVPbmUiLCJsb2dMYW5lT25lMiIsImxvZ0xhbmVUd28iLCJsb2dMYW5lVHdvMiIsImxvZ0xhbmVUd28zIiwibG9nTGFuZVRocmVlIiwibG9nTGFuZVRocmVlMiIsImxvZzQiLCJsb2c1IiwibG9nNiIsImxvZzciLCJ0cnVjayIsInRydWNrMiIsInRydWNrMyIsInRydWNrNCIsImRyYXdMb2ciLCJkcmF3VHJ1Y2siLCJkcmF3RnJvZyIsInJlc2V0RnJvZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsInJlc3RhcnRHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJyb2FkQ29sbGlzaW9uIiwiZHJhd0NoYXJhY3RlcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwibW92ZU1lZGl1bVJpZ2h0IiwibW92ZUZhc3RSaWdodCIsIm1vdmVTbG93UmlnaHQiLCJtb3ZlRnJvZyIsImUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM5QkEsSUFBRUMsU0FBRixHQUFjLFNBQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FGLElBQUVFLFFBQUYsQ0FBVyxD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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG5jLmZpbGxTdHlsZSA9IFwiIzk2Nzk2N1wiO1xuYy5maWxsUmVjdCgwLDAsIDEyMDAsIDUwKVxuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDQ1MCk7XG5jLmxpbmVUbygxMjAwLCA0NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1MDApO1xuYy5saW5lVG8oMTIwMCwgNTAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTUwKTtcbmMubGluZVRvKDEyMDAsIDU1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDYwMCk7XG5jLmxpbmVUbygxMjAwLCA2MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcbiBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTU1XG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy80MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy83MFxuICB0aGlzLmRyYXdDYXIgPSB0aGlzLmRyYXdDYXIuYmluZCh0aGlzKVxuICB0aGlzLmNhcnMgPSBbXTtcbn1cblxuZHJhd0NhcihjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggKz0gMztcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcjsiLCIvLyBjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG4vLyBjb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuXG4vLyB2YXIgZnJvZyA9IHt4OiBmcm9nWCwgeTogZnJvZ1ksIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MH07XG4vLyB2YXIgY2FyID0ge3g6IGNhclgsIHk6IGNhclksIHdpZHRoOiA0MCwgaGVpZ2h0OiA3MH07XG4vLyBjb25zb2xlLmxvZyh0aGlzKVxuLy8gdmFyIGNhciA9IG5ldyBDYXIge3g6IDEwLHk6IDU1NSx3aWR0aDogNDAsaGVpZ2h0OiA3MH07XG5cblxuLy8gaWYgKClcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBDb2xsaXNpb247IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpXG5cbmNsYXNzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3RvcihjLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgLy8gdGhpcy5pbWcgPSBpbWc7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRlYXRoID0gW107XG4gIH1cblxubW92ZVNsb3dSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNDtcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5tb3ZlTWVkaXVtUmlnaHQoKSB7XG4gIHRoaXMueCArPSA1O1xuICBpZiAodGhpcy54ID4gMTIwMCkge1xuICAgIHRoaXMueCA9IC00MDtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW92ZUZhc3RSaWdodCgpIHtcbiAgdGhpcy54ICs9IDc7XG4gIGlmICh0aGlzLnggPiAxMzAwKSB7XG4gICAgdGhpcy54ID0gLTQwO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBtb3ZlU2xvd0xlZnQoKSB7XG4vLyAgIHRoaXMueCAtPSBcbi8vIH1cblxuLy8gbW92ZVNsb3dMZWZ0KCkge1xuLy8gICB0aGlzLnggLT1cbi8vIH1cblxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW1pZXM7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcbmNvbnN0IEluZGV4ID0gcmVxdWlyZSgnLi9pbmRleC5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IExvZyA9IHJlcXVpcmUoJy4vTG9nLmpzJyk7XG5jb25zdCBUcnVjayA9IHJlcXVpcmUoJy4vVHJ1Y2suanMnKTtcbmNvbnN0IENvbGxpc2lvbiA9IHJlcXVpcmUoJy4vQ29sbGlzaW9uLmpzJyk7XG5cbi8vIHZhciBjYXIgPSBuZXcgQ2FyKDEwLCA1NTAsIDUwLCA1MClcbi8vIHZhciBsb2cgPSBuZXcgTG9nKDEwLCA1MCwgNzAsIDUwKVxuXG4vLyB2YXIgZW5lbWllcyA9IFtjYXIsIGxvZ107XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjLCBpbWFnZSkge1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKDYwMCwgNjUwLCA1MCwgNTApO1xuXG4vLyBSb2FkIE9ic3RhY2xlc1xuXG4gICAgdGhpcy5jYXIgPSBuZXcgQ2FyKDEwLCA2MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXIyID0gbmV3IENhcig0MDAsIDYwNSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjMgPSBuZXcgQ2FyKDI1MCwgNjA1LCAzNSwgNDUpOyAgICBcblxuICAgIHRoaXMuY2FyNCA9IG5ldyBDYXIoMTAsIDU1NSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjUgPSBuZXcgQ2FyKDI4MCwgNTU1LCAzNSwgNDUpO1xuICAgIHRoaXMuY2FyNiA9IG5ldyBDYXIoLTMwMCwgNTU1LCAzNSwgNDUpOyAgICBcblxuICAgIHRoaXMuY2FyNyA9IG5ldyBDYXIoNDAwLCA1MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXI4ID0gbmV3IENhcig4MDAsIDUwNSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjkgPSBuZXcgQ2FyKDYwLCA1MDUsIDM1LCA0NSk7XG5cbi8vUml2ZXIgT2JzdGFsZXNcblxuICAgIC8vZmlyc3QgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIG9uZVxuICAgIHRoaXMubG9nTGFuZU9uZSA9IG5ldyBMb2coLTEwLCA0MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lT25lMiA9IG5ldyBMb2coLTM3MCwgNDAsIDcwLCAxMDApO1xuXG4gICAgLy9zZWNvbmQgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIHR3b1xuICAgIHRoaXMubG9nTGFuZVR3byA9IG5ldyBMb2coLTIwMCwgOTAsIDcwLCAxMDApO1xuICAgIHRoaXMubG9nTGFuZVR3bzIgPSBuZXcgTG9nKC0zMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28zID0gbmV3IExvZygtNjUwLCA5MCwgNzAsIDEwMCk7XG5cblxuICAgIC8vdGhpcmQgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIHRocmVlXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUgPSBuZXcgTG9nKC00MDAsIDE0MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lVGhyZWUyID0gbmV3IExvZygtMTAwLCAxNDAsIDcwLCAxMDApO1xuXG5cbiAgICAvL2ZvdXJ0aCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgZm91clxuICAgIHRoaXMubG9nNCA9IG5ldyBMb2coLTEwLCAxOTAsIDcwLCAxMDApO1xuICAgIHRoaXMubG9nNSA9IG5ldyBMb2coLTQwMCwgMTkwLCA3MCwgMTAwKTtcblxuICAgIC8vZmlmdGggYXJyYXkgb2YgbG9ncyAtLSBsaW5lIGZpdmVcbiAgICB0aGlzLmxvZzYgPSBuZXcgTG9nKC0yMDAsIDI5MCwgNzAsIDEwMCk7XG5cbiAgICAvL3NpeHRoIGFycmF5IG9mIGxvZ3MgLS0gbGluZSBzaXhcbiAgICB0aGlzLmxvZzcgPSBuZXcgTG9nKC0xMCwgMjMwLCA3MCwgMTAwKTtcblxuICAgIHRoaXMudHJ1Y2sgPSBuZXcgVHJ1Y2soMTAsIDM4MCwgOTAsIDE0MCk7XG4gICAgdGhpcy50cnVjazIgPSBuZXcgVHJ1Y2soNjAwLCAzODAsIDkwLCAxNDApO1xuICAgIHRoaXMudHJ1Y2szID0gbmV3IFRydWNrKDMwMCwgNDMwLCA5MCwgMTQwKTtcbiAgICB0aGlzLnRydWNrNCA9IG5ldyBUcnVjayg5MDAsIDQzMCwgOTAsIDE0MCk7XG5cbiAgfVxuXG4gIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICB0aGlzLmxvZ0xhbmVPbmUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5sb2dMYW5lVHdvLmRyYXdMb2coYylcbiAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcbiAgICB0aGlzLmxvZ0xhbmVUd28zLmRyYXdMb2coYylcblxuICAgIHRoaXMubG9nTGFuZVRocmVlLmRyYXdMb2coYylcbiAgICB0aGlzLmxvZ0xhbmVUaHJlZTIuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5sb2c0LmRyYXdMb2coYylcbiAgICB0aGlzLmxvZzUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nNi5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2c3LmRyYXdMb2coYylcblxuICAgIHRoaXMuY2FyLmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjIuZHJhd0NhcihjKVxuICAgIHRoaXMuY2FyMy5kcmF3Q2FyKGMpICAgIFxuXG4gICAgdGhpcy5jYXI0LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjUuZHJhd0NhcihjKVxuICAgIHRoaXMuY2FyNi5kcmF3Q2FyKGMpICAgIFxuXG4gICAgdGhpcy5jYXI3LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjguZHJhd0NhcihjKVxuICAgIHRoaXMuY2FyOS5kcmF3Q2FyKGMpXG4gXG4gICAgdGhpcy50cnVjay5kcmF3VHJ1Y2soYylcbiAgICB0aGlzLnRydWNrMi5kcmF3VHJ1Y2soYylcbiAgICB0aGlzLnRydWNrMy5kcmF3VHJ1Y2soYylcbiAgICB0aGlzLnRydWNrNC5kcmF3VHJ1Y2soYylcbiAgICB0aGlzLmZyb2cuZHJhd0Zyb2coYylcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyb2cueCl0aGlzLmZyb2cueDtcbiBcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyb2cuaGVpZ2h0KVxuICAgIC8vIGxldCBmcm9nVyA9IHRoaXMuZnJvZy53aWR0aDtcbiAgICAvLyBsZXQgZnJvZ0ggPSB0aGlzLmZyb2cuaGVpZ2h0O1xuICB9XG5cbiAgLy8gZ2FtZU92ZXIoYykge1xuICAvLyAgIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIC8vICAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gIC8vICAgYy5mb250ID0gXCI3MnB4IEFyaWFsXCI7XG4gIC8vICAgYy5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCA2LCAxMDApO1xuICAvLyAgIGMuZm9udCA9IFwiMjhweCBBcmlhbFwiO1xuICAvLyAgIGMuZmlsbFRleHQoXCJSZWZyZXNoIHRvIHRyeSBhZ2FpblwiLCA1MCwgMTUwKTtcbiAgLy8gfVxuICAgIHJlc2V0RnJvZyhjwqApIHtcbiAgICAgIHRoaXMuZnJvZy54ID0gNjAwO1xuICAgICAgdGhpcy5mcm9nLnkgPSA2NTA7XG4gICAgfVxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgICAgdGhpcy5saXZlcyAtLSBcbiAgICAgICAgdGhpcy5yZXNldEZyb2coKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcbiAgICAgICAgLy8gICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saXZlcylcbiAgICB9XG4gIFxuIFxuICBtb3ZlRnJvZyhldmVudCwgZnJvZykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgLy8gbGV0IGZyb2dZID0gdGhpcy5mcm9nLnk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgIC8vIGxldCBmcm9nWSA9IHRoaXMuZnJvZy55O1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfVxuICAgIH1cbiAgICB9ICBcbiAgICB9XG4gICAgfVxuICByb2FkQ29sbGlzaW9uKHgsIHksIGhlaWdodCwgd2lkdGgsIHJlc3RhcnRHYW1lKSB7XG4gICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIueCArIHRoaXMuY2FyLndpZHRoIFxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhci54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhci55ICsgdGhpcy5jYXIuaGVpZ2h0IFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIueSkgeyBcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKClcbn0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjIueCArIHRoaXMuY2FyMi53aWR0aCBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXIyLnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyMi55ICsgdGhpcy5jYXIyLmhlaWdodCBcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyMi55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZSgpO1xufSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyMy54ICsgdGhpcy5jYXIzLndpZHRoIFxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjMueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXIzLnkgKyB0aGlzLmNhcjMuaGVpZ2h0IFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIzLnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKCk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI0LnggKyB0aGlzLmNhcjQud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNC54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjQueSArIHRoaXMuY2FyNC5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjQueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoKTtcbn0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjUueCArIHRoaXMuY2FyNS53aWR0aCBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI1LnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyNS55ICsgdGhpcy5jYXI1LmhlaWdodCBcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyNS55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZSgpO1xufSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyNi54ICsgdGhpcy5jYXI2LndpZHRoIFxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjYueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI2LnkgKyB0aGlzLmNhcjYuaGVpZ2h0IFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI2LnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKCk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI3LnggKyB0aGlzLmNhcjcud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNy54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjcueSArIHRoaXMuY2FyNy5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjcueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoKTtcbn0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmNhcjgueCArIHRoaXMuY2FyOC53aWR0aCBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5jYXI4LnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMuY2FyOC55ICsgdGhpcy5jYXI4LmhlaWdodCBcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyOC55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZSgpO1xufSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyOS54ICsgdGhpcy5jYXI5LndpZHRoIFxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhcjkueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5jYXI5LnkgKyB0aGlzLmNhcjkuaGVpZ2h0IFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXI5LnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKCk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjay54ICsgKHRoaXMudHJ1Y2sud2lkdGggLSA0MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjay54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrLnkgICsgKHRoaXMudHJ1Y2suaGVpZ2h0IC0gOTApIFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjay55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZSgpO1xufSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2syLnggKyAodGhpcy50cnVjazIud2lkdGggLSA0MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazIueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazIueSArICh0aGlzLnRydWNrMi5oZWlnaHQgLSA5MCkgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLnRydWNrMi55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZSgpO1xufSAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMudHJ1Y2szLnggKyAodGhpcy50cnVjazMud2lkdGggLSA0MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazMueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazMueSArICh0aGlzLnRydWNrMy5oZWlnaHQgLSA5MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2szLnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKCk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazQueCArICh0aGlzLnRydWNrNC53aWR0aCAtIDQwKSBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazQueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazQueSArICh0aGlzLnRydWNrNC5oZWlnaHQgLSA5MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2s0Lnkpe1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoKTtcbn0gIFxufVxuIHJpZGVMb2coeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUueCArIHRoaXMubG9nTGFuZU9uZS53aWR0aCBcbiAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZS54IFxuICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lT25lLnkgICsgdGhpcy5sb2dMYW5lT25lLmhlaWdodCAgXG4gICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lLnkpICB7XG5cbiAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lT25lLng7XG4gICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUyLnggKyB0aGlzLmxvZ0xhbmVPbmUyLndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lT25lMi54ICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lT25lMi55ICsgdGhpcy5sb2dMYW5lT25lMi5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lMi55KSB7IFxuICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZU9uZTIueDtcbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3by54ICsgdGhpcy5sb2dMYW5lVHdvLndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvLnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28ueSArIHRoaXMubG9nTGFuZVR3by5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvLnkpIHsgXG4gICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvLng7XG4gICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28yLnggKyB0aGlzLmxvZ0xhbmVUd28yLndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvMi54ICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMi55ICsgdGhpcy5sb2dMYW5lVHdvMi5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMi55KSB7IFxuICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVR3bzIueDsgICBcbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzMueCArIHRoaXMubG9nTGFuZVR3bzMud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28zLnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUd28zLnkgKyB0aGlzLmxvZ0xhbmVUd28zLmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28zLnkpIHsgXG4gICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvMy54OyAgIFxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUueCArIHRoaXMubG9nTGFuZVRocmVlLndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVGhyZWUueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlLnkgKyB0aGlzLmxvZ0xhbmVUaHJlZS5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUueSkgeyBcbiAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUaHJlZS54OyAgIFxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnggKyB0aGlzLmxvZ0xhbmVUaHJlZTIud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUaHJlZTIueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlMi55ICsgdGhpcy5sb2dMYW5lVGhyZWUyLmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZTIueSkgeyBcbiAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUaHJlZTIueDsgICBcbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNC54ICsgdGhpcy5sb2c0LndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c0LnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzQueSArIHRoaXMubG9nNC5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c0LnkpIHsgXG4gICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c0Lng7ICAgXG4gICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzUueCArIHRoaXMubG9nNS53aWR0aCAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNS54ICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c1LnkgKyB0aGlzLmxvZzUuaGVpZ2h0ICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNS55KSB7IFxuICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNS54OyAgIFxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c2LnggKyB0aGlzLmxvZzYud2lkdGggJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzYueCAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNi55ICsgdGhpcy5sb2c2LmhlaWdodCAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzYueSkgeyBcbiAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzYueDsgICBcbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNy54ICsgdGhpcy5sb2c3LndpZHRoICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c3LnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUaHJlZTIueSArIHRoaXMubG9nTGFuZVRocmVlMi5oZWlnaHQgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVGhyZWUyLnkpIHsgXG4gICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c3Lng7ICAgXG4gICAgfSBcbn1cbn1cblxuLy8gfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vMzgwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy85MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8xNDBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxuXG5sZXQgZ2FtZTsgXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG4vLyB2YXIgY2FyID0gbmV3IENhcigpO1xuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyLCBmcm9nKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vY2xlYXIsIGRyYXcsIG1vdmUgbG9vcCBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUucm9hZENvbGxpc2lvbihjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlKGMpO1xuICBnYW1lLmNhcjUubW92ZShjKTtcbiAgZ2FtZS5jYXI2Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlKGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlKGMpO1xuICBnYW1lLmNhcjkubW92ZShjKTtcbiAgXG4gIGdhbWUubG9nTGFuZU9uZS5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZU9uZTIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuXG4gIGdhbWUubG9nTGFuZVR3by5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28zLm1vdmVNZWRpdW1SaWdodChjKTtcblxuXG4gIGdhbWUubG9nTGFuZVRocmVlLm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVRocmVlMi5tb3ZlRmFzdFJpZ2h0KGMpO1xuXG4gIGdhbWUubG9nNC5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzUubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c2Lm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2c3Lm1vdmVGYXN0UmlnaHQoYyk7XG5cbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyAvL2RyYXcgYWxsIGNoYXJhY3RlcnNcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IC8vZHJhdyBhbGwgY2hhcmFjdGVyc1xufTtcblxuXG5cbmZ1bmN0aW9uIG1vdmVVcChldmVudCkge1xuICBnYW1lLm1vdmVGcm9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgbW92ZURvd24pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgbW92ZUxlZnQpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgbW92ZVJpZ2h0KTtcblxuLy8gZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuLy8gICBnYW1lID0gbmV3IEdhbWUoKVxuLy8gfVxuXG4vLyB2YXIgZnJvZyA9IG5ldyBGcm9nKGZyb2dJbWcsIDYwMCwgNjUwLCA1MCwgNTApO1xuLy8gdmFyIGZyb2dJbWcgPSBuZXcgSW1hZ2UoKTtcbi8vIGZyb2dJbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG5cbi8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjLCBmcm9nSW1nKTtcbi8vIGdhbWUuZ2FtZUxvb3AoKSBcbi8vIGdhbWUuZHJhd0Zyb2coZnJvZ0ltZylcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IHggPSBjLnhcbi8vIGxldCB5ID0gYy55XG5cbi8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4vLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgYy5jbGVhclJlY3QoeCwgeSwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG4vLyB9O1xuXG5cbi8vTW92ZW1lbnRcblxuXG4vLyBhbmltYXRlKCk7ICBcblxuLy8gdmFyIG1vdmVGcm9nID0gW107XG5cbi8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICAgIGMuY2xlYXJSZWN0KDAsIDAgLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodFxuLy8gICAgICAgICApO1xuXG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3ZlRnJvZy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgbW92ZUZyb2dbaV0udXBkYXRlKClcbi8vIH07XG5cblxuLy9pbmRleC5qcyB3aWxsIHJ1biB0aGUgZ2FtZSBsb29wLiBcblxuLy9HYW1lIGNsYXNzIGlzIGdvaW5nIHRvIGJlIHRvcCBsZXZlbCAtIHdoZXJlIHdlIGNyZWF0ZSBmcm9nLCBlbmVtaWVzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=