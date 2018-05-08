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
// const Index = require('./index.js');
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
      // console.log(this.frog.x)this.frog.x;

      // console.log(this.frog.height)
      // let frogW = this.frog.width;
      // let frogH = this.frog.height;
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
      console.log(this.lives);
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(event, frog) {
      event.preventDefault();
      if (event.keyCode === 38) {
        this.frog.moveUp();
        // this.drownFrog();
      } else {
        if (event.keyCode === 40) {
          this.frog.moveDown();
          // this.drownFrog();

        } else {
          if (event.keyCode === 37) {
            this.frog.moveLeft();
            // this.drownFrog();

          } else {
            if (event.keyCode === 39) {
              this.frog.moveRight();
              // this.drownFrog();
            }
          }
        }
      }
    }
    //   drownFrog(c) {
    // if (this.frog.y <= 300 && !this.rideLog()) {
    //   return this.restartGame(c);
    // }


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
  }, {
    key: 'drownFrog',
    value: function drownFrog(c) {
      // if (this.frog.y <= 300 &&  !(this.frog.x < this.logLaneOne.x + (this.logLaneOne.width - 50) 
      //   && this.frog.x + this.frog.width > this.logLaneOne.x 
      //   && this.frog.y < this.logLaneOne.y + (this.logLaneOne.height - 50)
      //   && this.frog.height + this.frog.y > this.logLaneOne.y)) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && !(this.frog.x < this.logLaneOne2.x + (this.logLaneOne2.width - 50)
      //   && this.frog.x + this.frog.width > this.logLaneOne2.x 
      //   && this.frog.y < this.logLaneOne2.y + (this.logLaneOne2.height - 50)
      //   && this.frog.height + this.frog.y > this.logLaneOne2.y)) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && !(this.frog.x < this.logLaneTwo.x + (this.logLaneTwo.width - 50) 
      //   && this.frog.x + this.frog.width > this.logLaneTwo.x 
      //   && this.frog.y < this.logLaneTwo.y + (this.logLaneTwo.height - 50)
      //   && this.frog.height + this.frog.y > this.logLaneTwo.y)) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && !(this.frog.x < this.logLaneTwo2.x + (this.logLaneTwo2.width - 50)
      //   && this.frog.x + this.frog.width > this.logLaneTwo2.x 
      //   && this.frog.y < this.logLaneTwo2.y + (this.logLaneTwo2.height - 50)
      //   && this.frog.height + this.frog.y > this.logLaneTwo2.y)) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && !(this.frog.x < this.logLaneTwo3.x + (this.logLaneTwo3.width - 50) 
      //   && this.frog.x + this.frog.width > this.logLaneTwo3.x 
      //   && this.frog.y < this.logLaneTwo3.y + (this.logLaneTwo3.height - 50) 
      //   && this.frog.height + this.frog.y > this.logLaneTwo3.y)) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && !(this.frog.x < this.logLaneThree.x + (this.logLaneThree.width - 50) 
      //   && this.frog.x + this.frog.width > this.logLaneThree.x 
      //   && this.frog.y !< this.logLaneThree.y + (this.logLaneThree.height - 50)
      //   && this.frog.height !+ this.frog.y > this.logLaneThree.y) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 
      //   && this.frog.x !< this.logLaneThree2.x + (this.logLaneThree2.width - 50)
      //   && this.frog.x !+ this.frog.width > this.logLaneThree2.x 
      //   && this.frog.y !< this.logLaneThree2.y + (this.logLaneThree2.height - 50)
      //   && this.frog.height !+ this.frog.y > this.logLaneThree2.y) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && this.frog.x !== this.log4.x) {
      //   // && this.frog.x !< this.log4.x + (this.log4.width - 50)
      //   // && this.frog.x !+ this.frog.width > this.log4.x
      //   // && this.frog.y !< this.log4.y + (this.log4.height - 50)
      //   // && this.frog.height !+ this.frog.y > this.log4.y) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && this.frog.x !== this.log5.x) {
      //   // && this.frog.x !< this.log5.x + (this.log5.width - 50)
      //   // && this.frog.x !+ this.frog.width > this.log5.x 
      //   // && this.frog.y !< this.log5.y + (this.log5.height - 50)
      //   // && this.frog.height !+ this.frog.y > this.log5.y) { 
      //   return this.restartGame(c);


      // } if (this.frog.y <= 300 && this.frog.x !== this.log6.x) {
      //   // && this.frog.x !< this.log6.x + (this.log6.width - 50)
      //   // && this.frog.x !+ this.frog.width > this.log6.x 
      //   // && this.frog.y !< this.log6.y + (this.log6.height - 50)
      //   // && this.frog.height !+ this.frog.y > this.log6.y) { 
      //   return this.restartGame(c);

      // }
      if (!this.frog.x < this.log7.x + (this.log7.width - 50) && this.frog.x + this.frog.width > this.log7.x && this.frog.y < this.log7.y + (this.log7.height - 50) && this.frog.height + this.frog.y > this.log7.y) {
        return this.restartGame(c);
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


var canvas = document.querySelector('#canvas');
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
  game.rideLog(c);
  // game.animate(); //moves enemies
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
  game.truck2.move(c); //draw all characters
  game.truck3.move(c); //draw all characters
  game.truck4.move(c); //draw all characters

  // game.gameOver(c);
};

// function gameOver(game) {
//   if (game.lives === 0) {
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     c.fillStyle = "white";
//     c.font = "72px Arial";
//     c.fillText("GAME OVER", 6, 100);
//     c.font = "28px Arial";
//     c.fillText("Refresh to try again", 50, 150);
//   }
// }


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

module.exports = Index;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RydWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbmVtaWVzIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2FyIiwiYmluZCIsImNhcnMiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIkdhbWUiLCJkZWF0aCIsIkZyb2ciLCJMb2ciLCJUcnVjayIsIkNvbGxpc2lvbiIsImltYWdlIiwibGl2ZXMiLCJmcm9nIiwiY2FyIiwiY2FyMiIsImNhcjMiLCJjYXI0IiwiY2FyNSIsImNhcjYiLCJjYXI3IiwiY2FyOCIsImNhcjkiLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwidHJ1Y2siLCJ0cnVjazIiLCJ0cnVjazMiLCJ0cnVjazQiLCJkcmF3TG9nIiwiZHJhd1RydWNrIiwiZHJhd0Zyb2ciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJmb250IiwiZmlsbFRleHQiLCJyZXNldEZyb2ciLCJnYW1lT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJyZXN0YXJ0R2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicm9hZENvbGxpc2lvbiIsImRyYXdDaGFyYWN0ZXJzIiwicmlkZUxvZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiLCJtb3ZlTWVkaXVtUmlnaHQiLCJtb3ZlRmFzdFJpZ2h0IiwibW92ZVNsb3dSaWdodCIsIm1vdmVGcm9nIiwiZSIsIkluZGV4Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLElBQUVDLFNBQUYsR0FBYyxTQUFkO0FBQ0FELElBQUVFLFFBQUYsQ0FBVyxDQUFYLEVB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LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIi8vR3Jhc3NcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGMpID0+IHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG5jLmZpbGxTdHlsZSA9IFwiIzk2Nzk2N1wiO1xuYy5maWxsUmVjdCgwLDAsIDEyMDAsIDUwKVxuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDQ1MCk7XG5jLmxpbmVUbygxMjAwLCA0NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1MDApO1xuYy5saW5lVG8oMTIwMCwgNTAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTUwKTtcbmMubGluZVRvKDEyMDAsIDU1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDYwMCk7XG5jLmxpbmVUbygxMjAwLCA2MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcbiBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcmF3QmFja2dyb3VuZDsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIENhciBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTU1XG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy80MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy83MFxuICB0aGlzLmRyYXdDYXIgPSB0aGlzLmRyYXdDYXIuYmluZCh0aGlzKVxuICB0aGlzLmNhcnMgPSBbXTtcbn1cblxuZHJhd0NhcihjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggKz0gMztcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcjtcblxuLy90ZXN0IGRlZmF1bHQgYmVoYXZpb3Igb24gbGluZSAyMS4gSXQgc2hvdWxkIG1vdmUgdGhlIHggY29vcmRpbmF0ZSBieSAzXG5cbi8vQ3JlYXRlIGEgY2FyIHRoYXQgaGFzIGFuIHggY29vcmRpbmF0ZSBvZiAxMTk4LiBDYWxsIG1vdmUsIGV4cGVjdCBYIHdvdWxkIGJlIGxlc3MgMjAuIiwiLy8gY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vZnJvZy5qcycpO1xuLy8gY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcblxuLy8gdmFyIGZyb2cgPSB7eDogZnJvZ1gsIHk6IGZyb2dZLCB3aWR0aDogNTAsIGhlaWdodDogNTB9O1xuLy8gdmFyIGNhciA9IHt4OiBjYXJYLCB5OiBjYXJZLCB3aWR0aDogNDAsIGhlaWdodDogNzB9O1xuLy8gY29uc29sZS5sb2codGhpcylcbi8vIHZhciBjYXIgPSBuZXcgQ2FyIHt4OiAxMCx5OiA1NTUsd2lkdGg6IDQwLGhlaWdodDogNzB9O1xuXG5cbi8vIGlmICgpXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQ29sbGlzaW9uOyIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKVxuXG5jbGFzcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoYywgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIC8vIHRoaXMuaW1nID0gaW1nO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5kZWF0aCA9IFtdO1xuICB9XG5cbm1vdmVTbG93UmlnaHQoKSB7XG4gICAgdGhpcy54ICs9IDQ7XG4gICAgaWYgKHRoaXMueCA+IDEyMDApIHsgXG4gICAgICB0aGlzLnggPSAtMjBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxubW92ZU1lZGl1bVJpZ2h0KCkge1xuICB0aGlzLnggKz0gNTtcbiAgaWYgKHRoaXMueCA+IDEyMDApIHtcbiAgICB0aGlzLnggPSAtNDA7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vdmVGYXN0UmlnaHQoKSB7XG4gIHRoaXMueCArPSA3O1xuICBpZiAodGhpcy54ID4gMTMwMCkge1xuICAgIHRoaXMueCA9IC00MDtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gbW92ZVNsb3dMZWZ0KCkge1xuLy8gICB0aGlzLnggLT0gXG4vLyB9XG5cbi8vIG1vdmVTbG93TGVmdCgpIHtcbi8vICAgdGhpcy54IC09XG4vLyB9XG5cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBFbmVtaWVzOyIsImNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG4vLyBjb25zdCBJbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcbmNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgVHJ1Y2sgPSByZXF1aXJlKCcuL1RydWNrLmpzJyk7XG5jb25zdCBDb2xsaXNpb24gPSByZXF1aXJlKCcuL0NvbGxpc2lvbi5qcycpO1xuXG4vLyB2YXIgY2FyID0gbmV3IENhcigxMCwgNTUwLCA1MCwgNTApXG4vLyB2YXIgbG9nID0gbmV3IExvZygxMCwgNTAsIDcwLCA1MClcblxuLy8gdmFyIGVuZW1pZXMgPSBbY2FyLCBsb2ddO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYywgaW1hZ2UpIHtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmZyb2cgPSBuZXcgRnJvZyg2MDAsIDY1MCwgNTAsIDUwKTtcblxuLy8gUm9hZCBPYnN0YWNsZXNcblxuICAgIHRoaXMuY2FyID0gbmV3IENhcigxMCwgNjA1LCAzNSwgNDUpO1xuICAgIHRoaXMuY2FyMiA9IG5ldyBDYXIoNDAwLCA2MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXIzID0gbmV3IENhcigyNTAsIDYwNSwgMzUsIDQ1KTsgICAgXG5cbiAgICB0aGlzLmNhcjQgPSBuZXcgQ2FyKDEwLCA1NTUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXI1ID0gbmV3IENhcigyODAsIDU1NSwgMzUsIDQ1KTtcbiAgICB0aGlzLmNhcjYgPSBuZXcgQ2FyKC0zMDAsIDU1NSwgMzUsIDQ1KTsgICAgXG5cbiAgICB0aGlzLmNhcjcgPSBuZXcgQ2FyKDQwMCwgNTA1LCAzNSwgNDUpO1xuICAgIHRoaXMuY2FyOCA9IG5ldyBDYXIoODAwLCA1MDUsIDM1LCA0NSk7XG4gICAgdGhpcy5jYXI5ID0gbmV3IENhcig2MCwgNTA1LCAzNSwgNDUpO1xuXG4vL1JpdmVyIE9ic3RhbGVzXG5cbiAgICAvL2ZpcnN0IGFycmF5IG9mIGxvZ3MgLS0gbGluZSBvbmVcbiAgICB0aGlzLmxvZ0xhbmVPbmUgPSBuZXcgTG9nKC0xMCwgNDAsIDcwLCAxMDApO1xuICAgIHRoaXMubG9nTGFuZU9uZTIgPSBuZXcgTG9nKC0zNzAsIDQwLCA3MCwgMTAwKTtcblxuICAgIC8vc2Vjb25kIGFycmF5IG9mIGxvZ3MgLS0gbGluZSB0d29cbiAgICB0aGlzLmxvZ0xhbmVUd28gPSBuZXcgTG9nKC0yMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28yID0gbmV3IExvZygtMzAwLCA5MCwgNzAsIDEwMCk7XG4gICAgdGhpcy5sb2dMYW5lVHdvMyA9IG5ldyBMb2coLTY1MCwgOTAsIDcwLCAxMDApO1xuXG5cbiAgICAvL3RoaXJkIGFycmF5IG9mIGxvZ3MgLS0gbGluZSB0aHJlZVxuICAgIHRoaXMubG9nTGFuZVRocmVlID0gbmV3IExvZygtNDAwLCAxNDAsIDcwLCAxMDApO1xuICAgIHRoaXMubG9nTGFuZVRocmVlMiA9IG5ldyBMb2coLTEwMCwgMTQwLCA3MCwgMTAwKTtcblxuXG4gICAgLy9mb3VydGggYXJyYXkgb2YgbG9ncyAtLSBsaW5lIGZvdXJcbiAgICB0aGlzLmxvZzQgPSBuZXcgTG9nKC0xMCwgMTkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZzUgPSBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDEwMCk7XG5cbiAgICAvL2ZpZnRoIGFycmF5IG9mIGxvZ3MgLS0gbGluZSBmaXZlXG4gICAgdGhpcy5sb2c2ID0gbmV3IExvZygtMjAwLCAyOTAsIDcwLCAxMDApO1xuXG4gICAgLy9zaXh0aCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgc2l4XG4gICAgdGhpcy5sb2c3ID0gbmV3IExvZygtMTAsIDIzMCwgNzAsIDEwMCk7XG5cbiAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCA0MzAsIDkwLCAxNDApO1xuICAgIHRoaXMudHJ1Y2syID0gbmV3IFRydWNrKDYwMCwgNDMwLCA5MCwgMTQwKTtcbiAgICB0aGlzLnRydWNrMyA9IG5ldyBUcnVjaygzMDAsIDQzMCwgOTAsIDE0MCk7XG4gICAgdGhpcy50cnVjazQgPSBuZXcgVHJ1Y2soOTAwLCA0MzAsIDkwLCAxNDApO1xuXG4gIH1cblxuICBkcmF3Q2hhcmFjdGVycyhjKSB7XG4gICAgdGhpcy5sb2dMYW5lT25lLmRyYXdMb2coYylcbiAgICB0aGlzLmxvZ0xhbmVPbmUyLmRyYXdMb2coYylcblxuICAgIHRoaXMubG9nTGFuZVR3by5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lT25lMi5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lVHdvMy5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmxvZ0xhbmVUaHJlZS5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUyLmRyYXdMb2coYylcblxuICAgIHRoaXMubG9nNC5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2c1LmRyYXdMb2coYylcbiAgICB0aGlzLmxvZzYuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nNy5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmNhci5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXIyLmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjMuZHJhd0NhcihjKSAgICBcblxuICAgIHRoaXMuY2FyNC5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXI1LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjYuZHJhd0NhcihjKSAgICBcblxuICAgIHRoaXMuY2FyNy5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXI4LmRyYXdDYXIoYylcbiAgICB0aGlzLmNhcjkuZHJhd0NhcihjKVxuIFxuICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazIuZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazMuZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazQuZHJhd1RydWNrKGMpXG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLngpdGhpcy5mcm9nLng7XG4gXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLmhlaWdodClcbiAgICAvLyBsZXQgZnJvZ1cgPSB0aGlzLmZyb2cud2lkdGg7XG4gICAgLy8gbGV0IGZyb2dIID0gdGhpcy5mcm9nLmhlaWdodDtcbiAgfVxuXG4gIGdhbWVPdmVyKGMpIHtcbiAgICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGMuZm9udCA9IFwiNzJweCBBcmlhbFwiO1xuICAgIGMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgNiwgMTAwKTtcbiAgICBjLmZvbnQgPSBcIjI4cHggQXJpYWxcIjtcbiAgICBjLmZpbGxUZXh0KFwiUmVmcmVzaCB0byB0cnkgYWdhaW5cIiwgNTAsIDE1MCk7XG4gIH1cblxuICAgIHJlc2V0RnJvZyhjwqApIHtcbiAgICAgIHRoaXMuZnJvZy54ID0gNjAwO1xuICAgICAgdGhpcy5mcm9nLnkgPSA2NTA7XG4gICAgfVxuICAgIHJlc3RhcnRHYW1lKGMpIHtcbiAgICAgICAgdGhpcy5saXZlcyAtLTsgXG4gICAgICAgIHRoaXMucmVzZXRGcm9nKCk7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5nYW1lT3ZlcihjKTtcbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXZlcylcbiAgICB9XG4gIFxuIFxuICBtb3ZlRnJvZyhldmVudCwgZnJvZykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgLy8gdGhpcy5kcm93bkZyb2coKTtcblxuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKXtcbiAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAvLyB0aGlzLmRyb3duRnJvZygpO1xuXG5cbiAgICB9IGVsc2Uge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMuZnJvZy5tb3ZlTGVmdCgpO1xuICAgIC8vIHRoaXMuZHJvd25Gcm9nKCk7XG5cblxuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgIC8vIHRoaXMuZHJvd25Gcm9nKCk7XG5cbiAgICB9XG4gICAgfVxuICAgIH0gIFxuICAgIH1cbiAgICB9XG4gICAgLy8gICBkcm93bkZyb2coYykge1xuICAgIC8vIGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgIXRoaXMucmlkZUxvZygpKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICAvLyB9XG5cbiAgXG5cblxuXG5cbiAgcm9hZENvbGxpc2lvbihjKSB7XG4gICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIueCArIHRoaXMuY2FyLndpZHRoIFxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmNhci54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhci55ICsgdGhpcy5jYXIuaGVpZ2h0IFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5jYXIueSkgeyBcbiAgICAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpXG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIyLnggKyB0aGlzLmNhcjIud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMi54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjIueSArIHRoaXMuY2FyMi5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjIueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXIzLnggKyB0aGlzLmNhcjMud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyMy54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjMueSArIHRoaXMuY2FyMy5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjMueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI0LnggKyB0aGlzLmNhcjQud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNC54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjQueSArIHRoaXMuY2FyNC5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjQueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI1LnggKyB0aGlzLmNhcjUud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNS54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjUueSArIHRoaXMuY2FyNS5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjUueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI2LnggKyB0aGlzLmNhcjYud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNi54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjYueSArIHRoaXMuY2FyNi5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjYueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI3LnggKyB0aGlzLmNhcjcud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyNy54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjcueSArIHRoaXMuY2FyNy5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjcueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI4LnggKyB0aGlzLmNhcjgud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyOC54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjgueSArIHRoaXMuY2FyOC5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjgueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5jYXI5LnggKyB0aGlzLmNhcjkud2lkdGggXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyOS54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhcjkueSArIHRoaXMuY2FyOS5oZWlnaHQgXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmNhcjkueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjay54ICsgKHRoaXMudHJ1Y2sud2lkdGggLSA0MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjay54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrLnkgICsgKHRoaXMudHJ1Y2suaGVpZ2h0IC0gOTApIFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjay55KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbn0gICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLnRydWNrMi54ICsgKHRoaXMudHJ1Y2syLndpZHRoIC0gNDApXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMudHJ1Y2syLnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMudHJ1Y2syLnkgKyAodGhpcy50cnVjazIuaGVpZ2h0IC0gOTApIFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazIueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazMueCArICh0aGlzLnRydWNrMy53aWR0aCAtIDQwKVxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLnRydWNrMy54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLnRydWNrMy55ICsgKHRoaXMudHJ1Y2szLmhlaWdodCAtIDkwKVxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy50cnVjazMueSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICAgaWYgKHRoaXMuZnJvZy54IDwgdGhpcy50cnVjazQueCArICh0aGlzLnRydWNrNC53aWR0aCAtIDQwKSBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy50cnVjazQueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy50cnVjazQueSArICh0aGlzLnRydWNrNC5oZWlnaHQgLSA5MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMudHJ1Y2s0Lnkpe1xuICAgICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG59ICBcbn1cbiByaWRlTG9nKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUueCArICh0aGlzLmxvZ0xhbmVPbmUud2lkdGggLSA1MCkgXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZU9uZS54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVPbmUueSArICh0aGlzLmxvZ0xhbmVPbmUuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVPbmUueSkgeyBcbiAgICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lT25lLng7IFxuXG4gICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUyLnggKyAodGhpcy5sb2dMYW5lT25lMi53aWR0aCAtIDUwKVxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVPbmUyLnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZTIueSArICh0aGlzLmxvZ0xhbmVPbmUyLmhlaWdodCAtIDUwKVxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lMi55KSB7IFxuICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZU9uZTIueDsgXG5cbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3by54ICsgKHRoaXMubG9nTGFuZVR3by53aWR0aCAtIDUwKSBcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvLnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3by55ICsgKHRoaXMubG9nTGFuZVR3by5oZWlnaHQgLSA1MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3by55KSB7IFxuICAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUd28ueDsgXG5cbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzIueCArICh0aGlzLmxvZ0xhbmVUd28yLndpZHRoIC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzIueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMi55ICsgKHRoaXMubG9nTGFuZVR3bzIuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUd28yLnkpIHsgXG4gICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2dMYW5lVHdvMi54OyBcblxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVHdvMy54ICsgKHRoaXMubG9nTGFuZVR3bzMud2lkdGggLSA1MCkgXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVR3bzMueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2dMYW5lVHdvMy55ICsgKHRoaXMubG9nTGFuZVR3bzMuaGVpZ2h0IC0gNTApIFxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMy55KSB7IFxuICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVR3bzMueDsgXG5cbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVRocmVlLnggKyAodGhpcy5sb2dMYW5lVGhyZWUud2lkdGggLSA1MCkgXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlLnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVRocmVlLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZS55KSB7IFxuICAgICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nTGFuZVRocmVlLng7ICBcblxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2dMYW5lVGhyZWUyLnggKyAodGhpcy5sb2dMYW5lVGhyZWUyLndpZHRoIC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlMi54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZ0xhbmVUaHJlZTIueSArICh0aGlzLmxvZ0xhbmVUaHJlZTIuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZ0xhbmVUaHJlZTIueSkgeyBcbiAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZ0xhbmVUaHJlZTIueDsgXG5cbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNC54ICsgKHRoaXMubG9nNC53aWR0aCAtIDUwKVxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzQueFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzQueSArICh0aGlzLmxvZzQuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzQueSkgeyBcbiAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzQueDsgXG5cbiAgICB9IGlmICh0aGlzLmZyb2cueCA8IHRoaXMubG9nNS54ICsgKHRoaXMubG9nNS53aWR0aCAtIDUwKVxuICAgICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZzUueCBcbiAgICAgICYmIHRoaXMuZnJvZy55IDwgdGhpcy5sb2c1LnkgKyAodGhpcy5sb2c1LmhlaWdodCAtIDUwKVxuICAgICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2c1LnkpIHsgXG4gICAgICAgIHRoaXMuZnJvZy54ID0gdGhpcy5sb2c1Lng7ICBcblxuICAgIH0gaWYgKHRoaXMuZnJvZy54IDwgdGhpcy5sb2c2LnggKyAodGhpcy5sb2c2LndpZHRoIC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNi54IFxuICAgICAgJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmxvZzYueSArICh0aGlzLmxvZzYuaGVpZ2h0IC0gNTApXG4gICAgICAmJiB0aGlzLmZyb2cuaGVpZ2h0ICsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzYueSkgeyBcbiAgICAgICAgdGhpcy5mcm9nLnggPSB0aGlzLmxvZzYueDsgIFxuXG4gICAgfSBpZiAodGhpcy5mcm9nLnggPCB0aGlzLmxvZzcueCArICh0aGlzLmxvZzcud2lkdGggLSA1MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c3LnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNy55ICsgKHRoaXMubG9nNy5oZWlnaHQgLSA1MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNy55KSB7IFxuICAgICB0aGlzLmZyb2cueCA9IHRoaXMubG9nNy54OyBcblxuICAgIH1cblxuICB9XG5cblxuXG4gIGRyb3duRnJvZyhjKSB7XG4gICAgLy8gaWYgKHRoaXMuZnJvZy55IDw9IDMwMCAmJiAgISh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZU9uZS54ICsgKHRoaXMubG9nTGFuZU9uZS53aWR0aCAtIDUwKSBcbiAgICAvLyAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lT25lLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZS55ICsgKHRoaXMubG9nTGFuZU9uZS5oZWlnaHQgLSA1MClcbiAgICAvLyAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZU9uZS55KSkgeyBcbiAgICAvLyAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuIFxuXG4gICAgLy8gfSBpZiAodGhpcy5mcm9nLnkgPD0gMzAwICYmICEodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVPbmUyLnggKyAodGhpcy5sb2dMYW5lT25lMi53aWR0aCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVPbmUyLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZU9uZTIueSArICh0aGlzLmxvZ0xhbmVPbmUyLmhlaWdodCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lT25lMi55KSkgeyBcbiAgICAvLyAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgISh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3by54ICsgKHRoaXMubG9nTGFuZVR3by53aWR0aCAtIDUwKSBcbiAgICAvLyAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2dMYW5lVHdvLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3by55ICsgKHRoaXMubG9nTGFuZVR3by5oZWlnaHQgLSA1MClcbiAgICAvLyAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3by55KSkgeyBcbiAgICAvLyAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuIFxuXG4gICAgLy8gfSBpZiAodGhpcy5mcm9nLnkgPD0gMzAwICYmICEodGhpcy5mcm9nLnggPCB0aGlzLmxvZ0xhbmVUd28yLnggKyAodGhpcy5sb2dMYW5lVHdvMi53aWR0aCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28yLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3bzIueSArICh0aGlzLmxvZ0xhbmVUd28yLmhlaWdodCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLmhlaWdodCArIHRoaXMuZnJvZy55ID4gdGhpcy5sb2dMYW5lVHdvMi55KSkgeyBcbiAgICAvLyAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgISh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVR3bzMueCArICh0aGlzLmxvZ0xhbmVUd28zLndpZHRoIC0gNTApIFxuICAgIC8vICAgJiYgdGhpcy5mcm9nLnggKyB0aGlzLmZyb2cud2lkdGggPiB0aGlzLmxvZ0xhbmVUd28zLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nTGFuZVR3bzMueSArICh0aGlzLmxvZ0xhbmVUd28zLmhlaWdodCAtIDUwKSBcbiAgICAvLyAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVR3bzMueSkpIHsgXG4gICAgLy8gICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcblxuXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgISh0aGlzLmZyb2cueCA8IHRoaXMubG9nTGFuZVRocmVlLnggKyAodGhpcy5sb2dMYW5lVGhyZWUud2lkdGggLSA1MCkgXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlLnggXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueSAhPCB0aGlzLmxvZ0xhbmVUaHJlZS55ICsgKHRoaXMubG9nTGFuZVRocmVlLmhlaWdodCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLmhlaWdodCAhKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVRocmVlLnkpIHsgXG4gICAgLy8gICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgXG4gICAgLy8gICAmJiB0aGlzLmZyb2cueCAhPCB0aGlzLmxvZ0xhbmVUaHJlZTIueCArICh0aGlzLmxvZ0xhbmVUaHJlZTIud2lkdGggLSA1MClcbiAgICAvLyAgICYmIHRoaXMuZnJvZy54ICErIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nTGFuZVRocmVlMi54IFxuICAgIC8vICAgJiYgdGhpcy5mcm9nLnkgITwgdGhpcy5sb2dMYW5lVGhyZWUyLnkgKyAodGhpcy5sb2dMYW5lVGhyZWUyLmhlaWdodCAtIDUwKVxuICAgIC8vICAgJiYgdGhpcy5mcm9nLmhlaWdodCAhKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nTGFuZVRocmVlMi55KSB7IFxuICAgIC8vICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG5cblxuICAgIC8vIH0gaWYgKHRoaXMuZnJvZy55IDw9IDMwMCAmJiB0aGlzLmZyb2cueCAhPT0gdGhpcy5sb2c0LngpIHtcbiAgICAvLyAgIC8vICYmIHRoaXMuZnJvZy54ICE8IHRoaXMubG9nNC54ICsgKHRoaXMubG9nNC53aWR0aCAtIDUwKVxuICAgIC8vICAgLy8gJiYgdGhpcy5mcm9nLnggISsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c0LnhcbiAgICAvLyAgIC8vICYmIHRoaXMuZnJvZy55ICE8IHRoaXMubG9nNC55ICsgKHRoaXMubG9nNC5oZWlnaHQgLSA1MClcbiAgICAvLyAgIC8vICYmIHRoaXMuZnJvZy5oZWlnaHQgISsgdGhpcy5mcm9nLnkgPiB0aGlzLmxvZzQueSkgeyBcbiAgICAvLyAgIHJldHVybiB0aGlzLnJlc3RhcnRHYW1lKGMpO1xuXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgdGhpcy5mcm9nLnggIT09IHRoaXMubG9nNS54KSB7XG4gICAgLy8gICAvLyAmJiB0aGlzLmZyb2cueCAhPCB0aGlzLmxvZzUueCArICh0aGlzLmxvZzUud2lkdGggLSA1MClcbiAgICAvLyAgIC8vICYmIHRoaXMuZnJvZy54ICErIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNS54IFxuICAgIC8vICAgLy8gJiYgdGhpcy5mcm9nLnkgITwgdGhpcy5sb2c1LnkgKyAodGhpcy5sb2c1LmhlaWdodCAtIDUwKVxuICAgIC8vICAgLy8gJiYgdGhpcy5mcm9nLmhlaWdodCAhKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNS55KSB7IFxuICAgIC8vICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gXG5cbiAgICAvLyB9IGlmICh0aGlzLmZyb2cueSA8PSAzMDAgJiYgdGhpcy5mcm9nLnggIT09IHRoaXMubG9nNi54KSB7XG4gICAgLy8gICAvLyAmJiB0aGlzLmZyb2cueCAhPCB0aGlzLmxvZzYueCArICh0aGlzLmxvZzYud2lkdGggLSA1MClcbiAgICAvLyAgIC8vICYmIHRoaXMuZnJvZy54ICErIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMubG9nNi54IFxuICAgIC8vICAgLy8gJiYgdGhpcy5mcm9nLnkgITwgdGhpcy5sb2c2LnkgKyAodGhpcy5sb2c2LmhlaWdodCAtIDUwKVxuICAgIC8vICAgLy8gJiYgdGhpcy5mcm9nLmhlaWdodCAhKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNi55KSB7IFxuICAgIC8vICAgcmV0dXJuIHRoaXMucmVzdGFydEdhbWUoYyk7XG4gXG4vLyB9XG4gICAgIGlmICghdGhpcy5mcm9nLnggPCB0aGlzLmxvZzcueCArICh0aGlzLmxvZzcud2lkdGggLSA1MClcbiAgICAgICYmIHRoaXMuZnJvZy54ICsgdGhpcy5mcm9nLndpZHRoID4gdGhpcy5sb2c3LnggXG4gICAgICAmJiB0aGlzLmZyb2cueSA8IHRoaXMubG9nNy55ICsgKHRoaXMubG9nNy5oZWlnaHQgLSA1MClcbiAgICAgICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMubG9nNy55KXsgXG4gICAgICByZXR1cm4gdGhpcy5yZXN0YXJ0R2FtZShjKTtcbiAgICB9XG5cblxufVxuXG59XG5cblxuXG5cblxuXG5cblxuLy8gfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vMzgwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy85MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8xNDBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJylcbmNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9CYWNrZ3JvdW5kLmpzJyk7XG5cblxubGV0IGdhbWU7IFxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVVcCk7XG5cbmdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gdmFyIGNhciA9IG5ldyBDYXIoKTtcbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGNhciwgZnJvZykge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvL2NsZWFyLCBkcmF3LCBtb3ZlIGxvb3AgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLnJvYWRDb2xsaXNpb24oYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIGdhbWUucmlkZUxvZyhjKTtcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICBpZiAoZ2FtZS5saXZlcyA+PSAxKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIGdhbWUuY2FyNC5tb3ZlKGMpO1xuICBnYW1lLmNhcjUubW92ZShjKTtcbiAgZ2FtZS5jYXI2Lm1vdmUoYyk7XG4gIGdhbWUuY2FyNy5tb3ZlKGMpOyAgXG4gIGdhbWUuY2FyOC5tb3ZlKGMpO1xuICBnYW1lLmNhcjkubW92ZShjKTtcbiAgXG4gIGdhbWUubG9nTGFuZU9uZS5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZU9uZTIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuXG4gIGdhbWUubG9nTGFuZVR3by5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVR3bzIubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28zLm1vdmVNZWRpdW1SaWdodChjKTtcblxuXG4gIGdhbWUubG9nTGFuZVRocmVlLm1vdmVGYXN0UmlnaHQoYyk7XG4gIGdhbWUubG9nTGFuZVRocmVlMi5tb3ZlRmFzdFJpZ2h0KGMpO1xuXG4gIGdhbWUubG9nNC5tb3ZlU2xvd1JpZ2h0KGMpO1xuICBnYW1lLmxvZzUubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c2Lm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2c3Lm1vdmVGYXN0UmlnaHQoYyk7XG5cbiAgZ2FtZS50cnVjay5tb3ZlKGMpO1xuICBnYW1lLnRydWNrMi5tb3ZlKGMpOyAvL2RyYXcgYWxsIGNoYXJhY3RlcnNcbiAgZ2FtZS50cnVjazMubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG4gIGdhbWUudHJ1Y2s0Lm1vdmUoYyk7IC8vZHJhdyBhbGwgY2hhcmFjdGVyc1xuXG4gIC8vIGdhbWUuZ2FtZU92ZXIoYyk7XG59O1xuXG4vLyBmdW5jdGlvbiBnYW1lT3ZlcihnYW1lKSB7XG4vLyAgIGlmIChnYW1lLmxpdmVzID09PSAwKSB7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbi8vICAgICBjLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbi8vICAgICBjLmZvbnQgPSBcIjcycHggQXJpYWxcIjtcbi8vICAgICBjLmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDYsIDEwMCk7XG4vLyAgICAgYy5mb250ID0gXCIyOHB4IEFyaWFsXCI7XG4vLyAgICAgYy5maWxsVGV4dChcIlJlZnJlc2ggdG8gdHJ5IGFnYWluXCIsIDUwLCAxNTApO1xuLy8gICB9XG4vLyB9XG5cblxuXG5mdW5jdGlvbiBtb3ZlVXAoZXZlbnQpIHtcbiAgZ2FtZS5tb3ZlRnJvZyhldmVudCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVEb3duKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVMZWZ0KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIG1vdmVSaWdodCk7XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbi8vICAgZ2FtZSA9IG5ldyBHYW1lKClcbi8vIH1cblxuLy8gdmFyIGZyb2cgPSBuZXcgRnJvZyhmcm9nSW1nLCA2MDAsIDY1MCwgNTAsIDUwKTtcbi8vIHZhciBmcm9nSW1nID0gbmV3IEltYWdlKCk7XG4vLyBmcm9nSW1nLnNyYyA9ICcuLi9pbWFnZXMvZnJvZy5wbmcnO1xuXG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoYywgZnJvZ0ltZyk7XG4vLyBnYW1lLmdhbWVMb29wKCkgXG4vLyBnYW1lLmRyYXdGcm9nKGZyb2dJbWcpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCB4ID0gYy54XG4vLyBsZXQgeSA9IGMueVxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgIGMuY2xlYXJSZWN0KHgsIHksIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuLy8gfTtcblxuXG4vL01vdmVtZW50XG5cblxuLy8gYW5pbWF0ZSgpOyAgXG5cbi8vIHZhciBtb3ZlRnJvZyA9IFtdO1xuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgICBjLmNsZWFyUmVjdCgwLCAwICwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHRcbi8vICAgICAgICAgKTtcblxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW92ZUZyb2cubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIG1vdmVGcm9nW2ldLnVwZGF0ZSgpXG4vLyB9O1xuXG5cbi8vaW5kZXguanMgd2lsbCBydW4gdGhlIGdhbWUgbG9vcC4gXG5cbi8vR2FtZSBjbGFzcyBpcyBnb2luZyB0byBiZSB0b3AgbGV2ZWwgLSB3aGVyZSB3ZSBjcmVhdGUgZnJvZywgZW5lbWllc1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGV4O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9