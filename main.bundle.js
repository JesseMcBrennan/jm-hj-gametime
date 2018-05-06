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
        this.x = -20;
      }
      return this;
    }
  }, {
    key: 'moveFastRight',
    value: function moveFastRight() {
      this.x += 7;
      if (this.x > 1300) {
        this.x = -20;
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

    this.frog = new Frog(600, 650, 50, 50);

    this.car1 = new Car(250, 605, 40, 70);
    this.car2 = new Car(10, 555, 40, 70);
    this.car3 = new Car(400, 505, 40, 70);

    //first array of logs -- line one
    this.logLaneOne = new Log(10, 40, 70, 100);
    this.logLaneOne2 = new Log(370, 40, 70, 100);

    //second array of logs -- line two
    this.logLaneTwo = new Log(-200, 90, 70, 100);
    this.logLaneTwo2 = new Log(300, 90, 70, 100);
    this.logLaneTwo3 = new Log(650, 90, 70, 100);

    //third array of logs -- line three
    this.logLaneThree = new Log(-400, 140, 70, 100);
    this.logLaneThree2 = new Log(100, 140, 70, 100);

    //fourth array of logs -- line four
    this.log4 = new Log(-10, 190, 70, 100);
    this.log5 = new Log(-400, 190, 70, 100);

    //fifth array of logs -- line five
    this.log6 = new Log(-200, 290, 70, 100);

    //sixth array of logs -- line six
    this.log7 = new Log(-10, 230, 70, 100);

    this.truck = new Truck(10, 380, 90, 140);
    this.truck2 = new Truck(400, 430, 90, 140);
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

      this.car1.drawCar(c);
      var car1X = this.car1.x;
      var car1Y = this.car1.y;
      // console.log(this.car1.x)

      this.car2.drawCar(c);
      this.car3.drawCar(c);

      this.truck.drawTruck(c);
      this.truck2.drawTruck(c);
      this.frog.drawFrog(c);
      var frogX = this.frog.x;
      var frogY = this.frog.y;
      var frogW = this.frog.width;
      var frogH = this.frog.height;
      // console.log(this.frog.x)
    }
  }, {
    key: 'moveFrog',
    value: function moveFrog(even, frog) {
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
    key: 'collision',
    value: function collision(car, frog) {
      // console.log('hi')
      if (this.frog.x === this.car1.x) {
        console.log(this.frog.x);
        // if (this.frog.x === this.car.x + this.car.width && this.frog.x + this.frog.width) {
        console.log('hi');
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

function gameLoop(car) {
  c.clearRect(0, 0, canvas.width, canvas.height); //clear, draw, move loop 
  drawBackground(c);
  game.drawCharacters(c);
  game.collision(c);
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
  game.car1.move(c);
  game.car2.move(c);
  game.car3.move(c);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RydWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbmVtaWVzIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2FyIiwiYmluZCIsImltZyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiR2FtZSIsImRlYXRoIiwiRnJvZyIsIkluZGV4IiwiTG9nIiwiVHJ1Y2siLCJDb2xsaXNpb24iLCJpbWFnZSIsImZyb2ciLCJjYXIxIiwiY2FyMiIsImNhcjMiLCJsb2dMYW5lT25lIiwibG9nTGFuZU9uZTIiLCJsb2dMYW5lVHdvIiwibG9nTGFuZVR3bzIiLCJsb2dMYW5lVHdvMyIsImxvZ0xhbmVUaHJlZSIsImxvZ0xhbmVUaHJlZTIiLCJsb2c0IiwibG9nNSIsImxvZzYiLCJsb2c3IiwidHJ1Y2siLCJ0cnVjazIiLCJkcmF3TG9nIiwiY2FyMVgiLCJjYXIxWSIsImRyYXdUcnVjayIsImRyYXdGcm9nIiwiZnJvZ1giLCJmcm9nWSIsImZyb2dXIiwiZnJvZ0giLCJldmVuIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImNhciIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsImRyYXdDaGFyYWN0ZXJzIiwiY29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSIsIm1vdmVNZWRpdW1SaWdodCIsIm1vdmVGYXN0UmlnaHQiLCJtb3ZlU2xvd1JpZ2h0IiwibW92ZUZyb2ciLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM5QkEsSUFBRUMsU0FBRixHQUFjLFNBQWQ7QUFDQUQsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FGLElBQUVFLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixF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R0E7O0FBRUEscUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCIvL0dyYXNzXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IChjKSA9PiB7XG5jLmZpbGxTdHlsZSA9IFwiIzRDQTQzMlwiO1xuYy5maWxsUmVjdCgwLCA2NTAsIDEyMDAsIDUwKTtcbmMuZmlsbFJlY3QoMCwgMzUwLCAxMjAwLCA1MCk7XG5cbi8vUm9hZFxuXG5jLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmMuZmlsbFJlY3QoMCwgNDAwLCAxMjAwLCAyNTApO1xuXG4vLyBXYXRlciBcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG4gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgLy8xMFxuICB0aGlzLnkgPSB5OyAvLzU1NVxuICB0aGlzLndpZHRoID0gd2lkdGg7IC8vNDBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vNzBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbn1cblxuZHJhd0NhcihjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggKz0gMztcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyOyIsIi8vIGNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbi8vIGNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5cbi8vIHZhciBmcm9nID0ge3g6IGZyb2dYLCB5OiBmcm9nWSwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwfTtcbi8vIHZhciBjYXIgPSB7eDogY2FyWCwgeTogY2FyWSwgd2lkdGg6IDQwLCBoZWlnaHQ6IDcwfTtcbi8vIGNvbnNvbGUubG9nKHRoaXMpXG4vLyB2YXIgY2FyID0gbmV3IENhciB7eDogMTAseTogNTU1LHdpZHRoOiA0MCxoZWlnaHQ6IDcwfTtcblxuXG4vLyBpZiAoKVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENvbGxpc2lvbjsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAvLyB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG5tb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbm1vdmVNZWRpdW1SaWdodCgpIHtcbiAgdGhpcy54ICs9IDU7XG4gIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgdGhpcy54ID0gLTIwO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb3ZlRmFzdFJpZ2h0KCkge1xuICB0aGlzLnggKz0gNztcbiAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICB0aGlzLnggPSAtMjA7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIG1vdmVTbG93TGVmdCgpIHtcbi8vICAgdGhpcy54IC09IFxuLy8gfVxuXG4vLyBtb3ZlU2xvd0xlZnQoKSB7XG4vLyAgIHRoaXMueCAtPVxuLy8gfVxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgSW5kZXggPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuY29uc3QgQ29sbGlzaW9uID0gcmVxdWlyZSgnLi9Db2xsaXNpb24uanMnKTtcblxuLy8gdmFyIGNhciA9IG5ldyBDYXIoMTAsIDU1MCwgNTAsIDUwKVxuLy8gdmFyIGxvZyA9IG5ldyBMb2coMTAsIDUwLCA3MCwgNTApXG5cbi8vIHZhciBlbmVtaWVzID0gW2NhciwgbG9nXTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG5cblxuICAgIHRoaXMuY2FyMSA9IG5ldyBDYXIoMjUwLCA2MDUsIDQwLCA3MCk7XG4gICAgdGhpcy5jYXIyID0gbmV3IENhcigxMCwgNTU1LCA0MCwgNzApO1xuICAgIHRoaXMuY2FyMyA9IG5ldyBDYXIoNDAwLCA1MDUsNDAsIDcwKTtcblxuICAgIC8vZmlyc3QgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIG9uZVxuICAgIHRoaXMubG9nTGFuZU9uZSA9IG5ldyBMb2coMTAsIDQwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVPbmUyID0gbmV3IExvZygzNzAsIDQwLCA3MCwgMTAwKTtcblxuICAgIC8vc2Vjb25kIGFycmF5IG9mIGxvZ3MgLS0gbGluZSB0d29cbiAgICB0aGlzLmxvZ0xhbmVUd28gPSBuZXcgTG9nKC0yMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28yID0gbmV3IExvZygzMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28zID0gbmV3IExvZyg2NTAsIDkwLCA3MCwgMTAwKTtcblxuXG4gICAgLy90aGlyZCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgdGhyZWVcbiAgICB0aGlzLmxvZ0xhbmVUaHJlZSA9IG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUaHJlZTIgPSBuZXcgTG9nKDEwMCwgMTQwLCA3MCwgMTAwKTtcblxuXG4gICAgLy9mb3VydGggYXJyYXkgb2YgbG9ncyAtLSBsaW5lIGZvdXJcbiAgICB0aGlzLmxvZzQgPSBuZXcgTG9nKC0xMCwgMTkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZzUgPSBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDEwMCk7XG5cbiAgICAvL2ZpZnRoIGFycmF5IG9mIGxvZ3MgLS0gbGluZSBmaXZlXG4gICAgdGhpcy5sb2c2ID0gbmV3IExvZygtMjAwLCAyOTAsIDcwLCAxMDApO1xuXG4gICAgLy9zaXh0aCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgc2l4XG4gICAgdGhpcy5sb2c3ID0gbmV3IExvZygtMTAsIDIzMCwgNzAsIDEwMCk7XG5cbiAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCAzODAsIDkwLCAxNDApO1xuICAgIHRoaXMudHJ1Y2syID0gbmV3IFRydWNrKDQwMCwgNDMwLCA5MCwgMTQwKTtcbiAgfVxuXG4gIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICB0aGlzLmxvZ0xhbmVPbmUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuXG5cbiAgICB0aGlzLmxvZ0xhbmVUd28uZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZVR3bzMuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZVRocmVlMi5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmxvZzQuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nNS5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2c2LmRyYXdMb2coYylcbiAgICB0aGlzLmxvZzcuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5jYXIxLmRyYXdDYXIoYylcbiAgICBsZXQgY2FyMVggPSB0aGlzLmNhcjEueDtcbiAgICBsZXQgY2FyMVkgPSB0aGlzLmNhcjEueTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhcjEueClcblxuICAgIHRoaXMuY2FyMi5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXIzLmRyYXdDYXIoYylcblxuICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazIuZHJhd1RydWNrKGMpXG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gICAgbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgbGV0IGZyb2dZID0gdGhpcy5mcm9nLnk7XG4gICAgbGV0IGZyb2dXID0gdGhpcy5mcm9nLndpZHRoO1xuICAgIGxldCBmcm9nSCA9IHRoaXMuZnJvZy5oZWlnaHQ7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLngpXG4gIH1cbiBcbiAgbW92ZUZyb2coZXZlbiwgZnJvZykge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCl7XG4gICAgdGhpcy5mcm9nLm1vdmVVcCgpO1xuICAgIC8vIGxldCBmcm9nWSA9IHRoaXMuZnJvZy55O1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKXtcbiAgICB0aGlzLmZyb2cubW92ZURvd24oKTtcbiAgICAvLyBsZXQgZnJvZ1kgPSB0aGlzLmZyb2cueTtcbiAgICB9IGVsc2Uge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMuZnJvZy5tb3ZlTGVmdCgpO1xuICAgIC8vIGxldCBmcm9nWCA9IHRoaXMuZnJvZy54O1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVSaWdodCgpO1xuICAgIC8vIGxldCBmcm9nWCA9IHRoaXMuZnJvZy54O1xuICAgIH1cbiAgICB9XG4gICAgfSAgXG4gICAgfVxuICAgIH1cbiAgY29sbGlzaW9uKGNhciwgZnJvZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdoaScpXG4gICAgaWYgKHRoaXMuZnJvZy54ID09PSB0aGlzLmNhcjEueCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5mcm9nLngpXG4gICAgICAvLyBpZiAodGhpcy5mcm9nLnggPT09IHRoaXMuY2FyLnggKyB0aGlzLmNhci53aWR0aCAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGknKVxuICAgIH0gXG4gICAgfVxufVxuXG4vLyB9XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKTtcblxuY2xhc3MgTG9nIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy81MFxuICB0aGlzLndpZHRoID0gd2lkdGg7IC8vNTBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vNzBcbiAgdGhpcy5kcmF3TG9nID0gdGhpcy5kcmF3TG9nLmJpbmQodGhpcylcbn1cblxuZHJhd0xvZyhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvbG9nLnN2Zyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgXG5cblxuICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZzsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIFRydWNrIGV4dGVuZHMgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkgXG4gIHRoaXMueCA9IHg7IC8vMTBcbiAgdGhpcy55ID0geTsgLy8zODBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzkwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzE0MFxuICB0aGlzLmRyYXdUcnVjayA9IHRoaXMuZHJhd1RydWNrLmJpbmQodGhpcylcbn1cblxuZHJhd1RydWNrKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy90cnVjazIucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cbm1vdmUoKSB7XG4gICAgdGhpcy54IC09IDQ7XG4gICAgaWYgKHRoaXMueCA8IC0xNTApIHsgXG4gICAgICB0aGlzLnggPSAxMjAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcnVjazsiLCJjbGFzcyBGcm9nIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICAgZHJhd0Zyb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcbiAgICBjLmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7ICAgXG4gIH1cblxuICBtb3ZlVXAoKSB7XG4gICAgdGhpcy55IC09IDUwO1xuICB9XG5cbiAgbW92ZURvd24oKSB7XG4gICAgdGhpcy55ICs9IDUwO1xuICB9XG5cbiAgbW92ZUxlZnQoKSB7XG4gICAgdGhpcy54IC09IDUwO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIHRoaXMueCArPSA1MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG52YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuXG5cbmxldCBnYW1lOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW92ZVVwKTtcblxuZ2FtZSA9IG5ldyBHYW1lKCk7XG4vLyB2YXIgY2FyID0gbmV3IENhcigpO1xuZ2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoY2FyKSB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vY2xlYXIsIGRyYXcsIG1vdmUgbG9vcCBcbiAgZHJhd0JhY2tncm91bmQoYyk7XG4gIGdhbWUuZHJhd0NoYXJhY3RlcnMoYyk7XG4gIGdhbWUuY29sbGlzaW9uKGMpO1xuICAvLyBnYW1lLmFuaW1hdGUoKTsgLy9tb3ZlcyBlbmVtaWVzXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIGdhbWUuY2FyMS5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcblxuICBnYW1lLmxvZ0xhbmVUd28ubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28yLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMy5tb3ZlTWVkaXVtUmlnaHQoYyk7XG5cblxuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcblxuICBnYW1lLmxvZzQubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c1Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nNy5tb3ZlRmFzdFJpZ2h0KGMpO1xuXG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG59O1xuXG5cblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xuXG5cblxufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlRG93bik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlTGVmdCk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlUmlnaHQpO1xuXG4vLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4vLyAgIGdhbWUgPSBuZXcgR2FtZSgpXG4vLyB9XG5cbi8vIHZhciBmcm9nID0gbmV3IEZyb2coZnJvZ0ltZywgNjAwLCA2NTAsIDUwLCA1MCk7XG4vLyB2YXIgZnJvZ0ltZyA9IG5ldyBJbWFnZSgpO1xuLy8gZnJvZ0ltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcblxuLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGMsIGZyb2dJbWcpO1xuLy8gZ2FtZS5nYW1lTG9vcCgpIFxuLy8gZ2FtZS5kcmF3RnJvZyhmcm9nSW1nKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgeCA9IGMueFxuLy8gbGV0IHkgPSBjLnlcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICBjLmNsZWFyUmVjdCh4LCB5LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbi8vIH07XG5cblxuLy9Nb3ZlbWVudFxuXG5cbi8vIGFuaW1hdGUoKTsgIFxuXG4vLyB2YXIgbW92ZUZyb2cgPSBbXTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0XG4vLyAgICAgICAgICk7XG5cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVGcm9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBtb3ZlRnJvZ1tpXS51cGRhdGUoKVxuLy8gfTtcblxuXG4vL2luZGV4LmpzIHdpbGwgcnVuIHRoZSBnYW1lIGxvb3AuIFxuXG4vL0dhbWUgY2xhc3MgaXMgZ29pbmcgdG8gYmUgdG9wIGxldmVsIC0gd2hlcmUgd2UgY3JlYXRlIGZyb2csIGVuZW1pZXNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==