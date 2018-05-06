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

    this.car = new Car(10, 605, 40, 45);
    this.car2 = new Car(400, 555, 40, 70);
    this.car3 = new Car(250, 505, 40, 70);

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

      this.car.drawCar(c);
      // console.log(this.car.x)
      var carX = this.car.x;
      var carY = this.car.y;

      this.car2.drawCar(c);
      this.car3.drawCar(c);

      this.truck.drawTruck(c);
      this.truck2.drawTruck(c);
      this.frog.drawFrog(c);
      // console.log(this.frog.x)this.frog.x;
      var frogX = this.frog.x;
      var frogY = this.frog.y;
      // console.log(this.frog.height)
      // let frogW = this.frog.width;
      // let frogH = this.frog.height;
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
    value: function collision(x, y, height, width) {
      if (this.frog.x < this.car.x + this.car.width && this.frog.x + this.frog.width > this.car.x && this.frog.y < this.car.y + this.car.height && this.frog.height + this.frog.y > this.car.y) {
        console.log('work');
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
  game.collision(c);
  game.drawCharacters(c);
  // game.animate(); //moves enemies
  requestAnimationFrame(gameLoop);
  game.car.move(c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9FbmVtaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RydWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9mcm9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkcmF3QmFja2dyb3VuZCIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbmVtaWVzIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2FyIiwiYmluZCIsImltZyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiR2FtZSIsImRlYXRoIiwiRnJvZyIsIkluZGV4IiwiTG9nIiwiVHJ1Y2siLCJDb2xsaXNpb24iLCJpbWFnZSIsImZyb2ciLCJjYXIiLCJjYXIyIiwiY2FyMyIsImxvZ0xhbmVPbmUiLCJsb2dMYW5lT25lMiIsImxvZ0xhbmVUd28iLCJsb2dMYW5lVHdvMiIsImxvZ0xhbmVUd28zIiwibG9nTGFuZVRocmVlIiwibG9nTGFuZVRocmVlMiIsImxvZzQiLCJsb2c1IiwibG9nNiIsImxvZzciLCJ0cnVjayIsInRydWNrMiIsImRyYXdMb2ciLCJjYXJYIiwiY2FyWSIsImRyYXdUcnVjayIsImRyYXdGcm9nIiwiZnJvZ1giLCJmcm9nWSIsImV2ZW4iLCJldmVudCIsImtleUNvZGUiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiY29sbGlzaW9uIiwiZHJhd0NoYXJhY3RlcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwibW92ZU1lZGl1bVJpZ2h0IiwibW92ZUZhc3RSaWdodCIsIm1vdmVTbG93UmlnaHQiLCJtb3ZlRnJvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxJQUFFQyxTQUFGLEdBQWMsU0FBZDtBQUNBRCxJQUFFRSxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekI7QUFDQUYsSUFBRUUsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCOztBQUVBOztBQUVBRixJ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QUFFQyxjQUFGO0FBQ0Q7O0FBSUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFzQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEscUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCIvL0dyYXNzXG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IChjKSA9PiB7XG5jLmZpbGxTdHlsZSA9IFwiIzRDQTQzMlwiO1xuYy5maWxsUmVjdCgwLCA2NTAsIDEyMDAsIDUwKTtcbmMuZmlsbFJlY3QoMCwgMzUwLCAxMjAwLCA1MCk7XG5cbi8vUm9hZFxuXG5jLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmMuZmlsbFJlY3QoMCwgNDAwLCAxMjAwLCAyNTApO1xuXG4vLyBXYXRlciBcblxuYy5maWxsU3R5bGUgPSBcIiM5Njc5NjdcIjtcbmMuZmlsbFJlY3QoMCwwLCAxMjAwLCA1MClcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTAwKTtcbmMubGluZVRvKDEyMDAsIDUwMCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDU1MCk7XG5jLmxpbmVUbygxMjAwLCA1NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG4gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhd0JhY2tncm91bmQ7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBDYXIgZXh0ZW5kcyBFbmVtaWVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSBcbiAgdGhpcy54ID0geDsgLy8xMFxuICB0aGlzLnkgPSB5OyAvLzU1NVxuICB0aGlzLndpZHRoID0gd2lkdGg7IC8vNDBcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vNzBcbiAgdGhpcy5kcmF3Q2FyID0gdGhpcy5kcmF3Q2FyLmJpbmQodGhpcylcbn1cblxuZHJhd0NhcihjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdm9sa3N3YWdvbi5wbmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgXG4gICAgcmV0dXJuIHRoaXM7ICBcbiAgfVxubW92ZSgpIHtcbiAgICB0aGlzLnggKz0gMztcbiAgICBpZiAodGhpcy54ID4gMTIwMCkgeyBcbiAgICAgIHRoaXMueCA9IC0yMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FyOyIsIi8vIGNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL2Zyb2cuanMnKTtcbi8vIGNvbnN0IENhciA9IHJlcXVpcmUoJy4vQ2FyLmpzJyk7XG5cbi8vIHZhciBmcm9nID0ge3g6IGZyb2dYLCB5OiBmcm9nWSwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwfTtcbi8vIHZhciBjYXIgPSB7eDogY2FyWCwgeTogY2FyWSwgd2lkdGg6IDQwLCBoZWlnaHQ6IDcwfTtcbi8vIGNvbnNvbGUubG9nKHRoaXMpXG4vLyB2YXIgY2FyID0gbmV3IENhciB7eDogMTAseTogNTU1LHdpZHRoOiA0MCxoZWlnaHQ6IDcwfTtcblxuXG4vLyBpZiAoKVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENvbGxpc2lvbjsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJylcblxuY2xhc3MgRW5lbWllcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAvLyB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZGVhdGggPSBbXTtcbiAgfVxuXG5tb3ZlU2xvd1JpZ2h0KCkge1xuICAgIHRoaXMueCArPSA0O1xuICAgIGlmICh0aGlzLnggPiAxMjAwKSB7IFxuICAgICAgdGhpcy54ID0gLTIwXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbm1vdmVNZWRpdW1SaWdodCgpIHtcbiAgdGhpcy54ICs9IDU7XG4gIGlmICh0aGlzLnggPiAxMjAwKSB7XG4gICAgdGhpcy54ID0gLTIwO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb3ZlRmFzdFJpZ2h0KCkge1xuICB0aGlzLnggKz0gNztcbiAgaWYgKHRoaXMueCA+IDEzMDApIHtcbiAgICB0aGlzLnggPSAtMjA7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIG1vdmVTbG93TGVmdCgpIHtcbi8vICAgdGhpcy54IC09IFxuLy8gfVxuXG4vLyBtb3ZlU2xvd0xlZnQoKSB7XG4vLyAgIHRoaXMueCAtPVxuLy8gfVxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW5lbWllczsiLCJjb25zdCBGcm9nID0gcmVxdWlyZSgnLi9mcm9nLmpzJyk7XG5jb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5jb25zdCBkcmF3QmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vQmFja2dyb3VuZC5qcycpO1xuY29uc3QgSW5kZXggPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5jb25zdCBDYXIgPSByZXF1aXJlKCcuL0Nhci5qcycpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cuanMnKTtcbmNvbnN0IFRydWNrID0gcmVxdWlyZSgnLi9UcnVjay5qcycpO1xuY29uc3QgQ29sbGlzaW9uID0gcmVxdWlyZSgnLi9Db2xsaXNpb24uanMnKTtcblxuLy8gdmFyIGNhciA9IG5ldyBDYXIoMTAsIDU1MCwgNTAsIDUwKVxuLy8gdmFyIGxvZyA9IG5ldyBMb2coMTAsIDUwLCA3MCwgNTApXG5cbi8vIHZhciBlbmVtaWVzID0gW2NhciwgbG9nXTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGMsIGltYWdlKSB7XG4gICAgdGhpcy5mcm9nID0gbmV3IEZyb2coNjAwLCA2NTAsIDUwLCA1MCk7XG5cblxuICAgIHRoaXMuY2FyID0gbmV3IENhcigxMCwgNjA1LCA0MCwgNDUpO1xuICAgIHRoaXMuY2FyMiA9IG5ldyBDYXIoNDAwLCA1NTUsIDQwLCA3MCk7XG4gICAgdGhpcy5jYXIzID0gbmV3IENhcigyNTAsIDUwNSwgNDAsIDcwKTtcblxuICAgIC8vZmlyc3QgYXJyYXkgb2YgbG9ncyAtLSBsaW5lIG9uZVxuICAgIHRoaXMubG9nTGFuZU9uZSA9IG5ldyBMb2coMTAsIDQwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVPbmUyID0gbmV3IExvZygzNzAsIDQwLCA3MCwgMTAwKTtcblxuICAgIC8vc2Vjb25kIGFycmF5IG9mIGxvZ3MgLS0gbGluZSB0d29cbiAgICB0aGlzLmxvZ0xhbmVUd28gPSBuZXcgTG9nKC0yMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28yID0gbmV3IExvZygzMDAsIDkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUd28zID0gbmV3IExvZyg2NTAsIDkwLCA3MCwgMTAwKTtcblxuXG4gICAgLy90aGlyZCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgdGhyZWVcbiAgICB0aGlzLmxvZ0xhbmVUaHJlZSA9IG5ldyBMb2coLTQwMCwgMTQwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZ0xhbmVUaHJlZTIgPSBuZXcgTG9nKDEwMCwgMTQwLCA3MCwgMTAwKTtcblxuXG4gICAgLy9mb3VydGggYXJyYXkgb2YgbG9ncyAtLSBsaW5lIGZvdXJcbiAgICB0aGlzLmxvZzQgPSBuZXcgTG9nKC0xMCwgMTkwLCA3MCwgMTAwKTtcbiAgICB0aGlzLmxvZzUgPSBuZXcgTG9nKC00MDAsIDE5MCwgNzAsIDEwMCk7XG5cbiAgICAvL2ZpZnRoIGFycmF5IG9mIGxvZ3MgLS0gbGluZSBmaXZlXG4gICAgdGhpcy5sb2c2ID0gbmV3IExvZygtMjAwLCAyOTAsIDcwLCAxMDApO1xuXG4gICAgLy9zaXh0aCBhcnJheSBvZiBsb2dzIC0tIGxpbmUgc2l4XG4gICAgdGhpcy5sb2c3ID0gbmV3IExvZygtMTAsIDIzMCwgNzAsIDEwMCk7XG5cbiAgICB0aGlzLnRydWNrID0gbmV3IFRydWNrKDEwLCAzODAsIDkwLCAxNDApO1xuICAgIHRoaXMudHJ1Y2syID0gbmV3IFRydWNrKDQwMCwgNDMwLCA5MCwgMTQwKTtcbiAgfVxuXG4gIGRyYXdDaGFyYWN0ZXJzKGMpIHtcbiAgICB0aGlzLmxvZ0xhbmVPbmUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuXG5cbiAgICB0aGlzLmxvZ0xhbmVUd28uZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZU9uZTIuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZVR3bzMuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5sb2dMYW5lVGhyZWUuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nTGFuZVRocmVlMi5kcmF3TG9nKGMpXG5cbiAgICB0aGlzLmxvZzQuZHJhd0xvZyhjKVxuICAgIHRoaXMubG9nNS5kcmF3TG9nKGMpXG4gICAgdGhpcy5sb2c2LmRyYXdMb2coYylcbiAgICB0aGlzLmxvZzcuZHJhd0xvZyhjKVxuXG4gICAgdGhpcy5jYXIuZHJhd0NhcihjKVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FyLngpXG4gICAgbGV0IGNhclggPSB0aGlzLmNhci54O1xuICAgIGxldCBjYXJZID0gdGhpcy5jYXIueTtcblxuICAgIHRoaXMuY2FyMi5kcmF3Q2FyKGMpXG4gICAgdGhpcy5jYXIzLmRyYXdDYXIoYylcblxuICAgIHRoaXMudHJ1Y2suZHJhd1RydWNrKGMpXG4gICAgdGhpcy50cnVjazIuZHJhd1RydWNrKGMpXG4gICAgdGhpcy5mcm9nLmRyYXdGcm9nKGMpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLngpdGhpcy5mcm9nLng7XG4gICAgbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgbGV0IGZyb2dZID0gdGhpcy5mcm9nLnk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9nLmhlaWdodClcbiAgICAvLyBsZXQgZnJvZ1cgPSB0aGlzLmZyb2cud2lkdGg7XG4gICAgLy8gbGV0IGZyb2dIID0gdGhpcy5mcm9nLmhlaWdodDtcbiAgfVxuIFxuICBtb3ZlRnJvZyhldmVuLCBmcm9nKSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KXtcbiAgICB0aGlzLmZyb2cubW92ZVVwKCk7XG4gICAgLy8gbGV0IGZyb2dZID0gdGhpcy5mcm9nLnk7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApe1xuICAgIHRoaXMuZnJvZy5tb3ZlRG93bigpO1xuICAgIC8vIGxldCBmcm9nWSA9IHRoaXMuZnJvZy55O1xuICAgIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5mcm9nLm1vdmVMZWZ0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLmZyb2cubW92ZVJpZ2h0KCk7XG4gICAgLy8gbGV0IGZyb2dYID0gdGhpcy5mcm9nLng7XG4gICAgfVxuICAgIH1cbiAgICB9ICBcbiAgICB9XG4gICAgfVxuICBjb2xsaXNpb24oeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIGlmICh0aGlzLmZyb2cueCA8IHRoaXMuY2FyLnggKyB0aGlzLmNhci53aWR0aCAmJiB0aGlzLmZyb2cueCArIHRoaXMuZnJvZy53aWR0aCA+IHRoaXMuY2FyLnggJiYgdGhpcy5mcm9nLnkgPCB0aGlzLmNhci55ICsgdGhpcy5jYXIuaGVpZ2h0ICYmIHRoaXMuZnJvZy5oZWlnaHQgKyB0aGlzLmZyb2cueSA+IHRoaXMuY2FyLnkpIHsgXG4gICAgICBjb25zb2xlLmxvZygnd29yaycpXG4gICAgfVxufVxufVxuLy8gfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCBFbmVtaWVzID0gcmVxdWlyZSgnLi9FbmVtaWVzLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vNTBcbiAgdGhpcy53aWR0aCA9IHdpZHRoOyAvLzUwXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyAvLzcwXG4gIHRoaXMuZHJhd0xvZyA9IHRoaXMuZHJhd0xvZy5iaW5kKHRoaXMpXG59XG5cbmRyYXdMb2coYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAnLi4vaW1hZ2VzL2xvZy5zdmcnO1xuICAgIGMuZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTsgIFxuXG5cbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2c7IiwiY29uc3QgRW5lbWllcyA9IHJlcXVpcmUoJy4vRW5lbWllcy5qcycpO1xuXG5jbGFzcyBUcnVjayBleHRlbmRzIEVuZW1pZXMge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpIFxuICB0aGlzLnggPSB4OyAvLzEwXG4gIHRoaXMueSA9IHk7IC8vMzgwXG4gIHRoaXMud2lkdGggPSB3aWR0aDsgLy85MFxuICB0aGlzLmhlaWdodCA9IGhlaWdodDsgLy8xNDBcbiAgdGhpcy5kcmF3VHJ1Y2sgPSB0aGlzLmRyYXdUcnVjay5iaW5kKHRoaXMpXG59XG5cbmRyYXdUcnVjayhjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9ICcuLi9pbWFnZXMvdHJ1Y2syLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5tb3ZlKCkge1xuICAgIHRoaXMueCAtPSA0O1xuICAgIGlmICh0aGlzLnggPCAtMTUwKSB7IFxuICAgICAgdGhpcy54ID0gMTIwMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJ1Y2s7IiwiY2xhc3MgRnJvZyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgIGRyYXdGcm9nKGMpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gJy4uL2ltYWdlcy9mcm9nLnBuZyc7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpOyAgIFxuICB9XG5cbiAgbW92ZVVwKCkge1xuICAgIHRoaXMueSAtPSA1MDtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuICAgIHRoaXMueSArPSA1MDtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIHRoaXMueCAtPSA1MDtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICB0aGlzLnggKz0gNTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcm9nO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IEVuZW1pZXMgPSByZXF1aXJlKCcuL0VuZW1pZXMuanMnKVxuY29uc3QgZHJhd0JhY2tncm91bmQgPSByZXF1aXJlKCcuL0JhY2tncm91bmQuanMnKTtcblxuXG5sZXQgZ2FtZTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vdmVVcCk7XG5cbmdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gdmFyIGNhciA9IG5ldyBDYXIoKTtcbmdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGNhciwgZnJvZykge1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvL2NsZWFyLCBkcmF3LCBtb3ZlIGxvb3AgXG4gIGRyYXdCYWNrZ3JvdW5kKGMpO1xuICBnYW1lLmNvbGxpc2lvbihjKTtcbiAgZ2FtZS5kcmF3Q2hhcmFjdGVycyhjKTtcbiAgLy8gZ2FtZS5hbmltYXRlKCk7IC8vbW92ZXMgZW5lbWllc1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICBnYW1lLmNhci5tb3ZlKGMpO1xuICBnYW1lLmNhcjIubW92ZShjKTtcbiAgZ2FtZS5jYXIzLm1vdmUoYyk7XG4gIFxuICBnYW1lLmxvZ0xhbmVPbmUubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVPbmUyLm1vdmVNZWRpdW1SaWdodChjKTtcblxuICBnYW1lLmxvZ0xhbmVUd28ubW92ZU1lZGl1bVJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUd28yLm1vdmVNZWRpdW1SaWdodChjKTtcbiAgZ2FtZS5sb2dMYW5lVHdvMy5tb3ZlTWVkaXVtUmlnaHQoYyk7XG5cblxuICBnYW1lLmxvZ0xhbmVUaHJlZS5tb3ZlRmFzdFJpZ2h0KGMpO1xuICBnYW1lLmxvZ0xhbmVUaHJlZTIubW92ZUZhc3RSaWdodChjKTtcblxuICBnYW1lLmxvZzQubW92ZVNsb3dSaWdodChjKTtcbiAgZ2FtZS5sb2c1Lm1vdmVTbG93UmlnaHQoYyk7XG4gIGdhbWUubG9nNi5tb3ZlTWVkaXVtUmlnaHQoYyk7XG4gIGdhbWUubG9nNy5tb3ZlRmFzdFJpZ2h0KGMpO1xuXG4gIGdhbWUudHJ1Y2subW92ZShjKTtcbiAgZ2FtZS50cnVjazIubW92ZShjKTsgLy9kcmF3IGFsbCBjaGFyYWN0ZXJzXG59O1xuXG5cblxuZnVuY3Rpb24gbW92ZVVwKGV2ZW50KSB7XG4gIGdhbWUubW92ZUZyb2coZXZlbnQpO1xuXG5cblxufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlRG93bik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlTGVmdCk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBtb3ZlUmlnaHQpO1xuXG4vLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4vLyAgIGdhbWUgPSBuZXcgR2FtZSgpXG4vLyB9XG5cbi8vIHZhciBmcm9nID0gbmV3IEZyb2coZnJvZ0ltZywgNjAwLCA2NTAsIDUwLCA1MCk7XG4vLyB2YXIgZnJvZ0ltZyA9IG5ldyBJbWFnZSgpO1xuLy8gZnJvZ0ltZy5zcmMgPSAnLi4vaW1hZ2VzL2Zyb2cucG5nJztcblxuLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGMsIGZyb2dJbWcpO1xuLy8gZ2FtZS5nYW1lTG9vcCgpIFxuLy8gZ2FtZS5kcmF3RnJvZyhmcm9nSW1nKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgeCA9IGMueFxuLy8gbGV0IHkgPSBjLnlcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICBjLmNsZWFyUmVjdCh4LCB5LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbi8vIH07XG5cblxuLy9Nb3ZlbWVudFxuXG5cbi8vIGFuaW1hdGUoKTsgIFxuXG4vLyB2YXIgbW92ZUZyb2cgPSBbXTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0XG4vLyAgICAgICAgICk7XG5cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVGcm9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBtb3ZlRnJvZ1tpXS51cGRhdGUoKVxuLy8gfTtcblxuXG4vL2luZGV4LmpzIHdpbGwgcnVuIHRoZSBnYW1lIGxvb3AuIFxuXG4vL0dhbWUgY2xhc3MgaXMgZ29pbmcgdG8gYmUgdG9wIGxldmVsIC0gd2hlcmUgd2UgY3JlYXRlIGZyb2csIGVuZW1pZXNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==