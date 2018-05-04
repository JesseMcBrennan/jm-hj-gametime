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

/***/ "./lib/Car.js":
/*!********************!*\
  !*** ./lib/Car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var carImg = new Image();
carImg.src = "images/car.png";
var x = x;
var y = y;

// class Car {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

function Car(height, width, x, y) {
  this.x = x;
  this.y = y;
}

// class Enemies {
//   constructor(img, x, y)
//   this.img = 
// }

carImg.onload = function () {
  c.drawImage(carImg, 10, 600, 50, 50);
};

module.exports = Car;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

//Grass
function drawBackground() {
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
}

module.exports = Game;

/***/ }),

/***/ "./lib/frog.js":
/*!*********************!*\
  !*** ./lib/frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var frogImg = new Image();
frogImg.src = "images/frog.png";

frogImg.onload = function () {
  c.drawImage(frogImg, 600, 650, 50, 50);
};

function Frog(x, y) {
  x = x;

  y = y;
}

// function frogMove() {

// });


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
var Frog = __webpack_require__(/*! ../lib/frog.js */ "./lib/frog.js");
var Car = __webpack_require__(/*! ../lib/Car.js */ "./lib/Car.js");
var Game = __webpack_require__(/*! ../lib/Game.js */ "./lib/Game.js");

draw();
//Frog

function draw() {
  drawBackground();
  Frog();
  Car();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYyIsImdldENvbnRleHQiLCJjYXJJbWciLCJJbWFnZSIsInNyYyIsIngiLCJ5IiwiQ2FyIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZHJhd0JhY2tncm91bmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsIkdhbWUiLCJmcm9nSW1nIiwiRnJvZyIsInJlcXVpcmUiLCJkcmF3Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQUlBLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FB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OztBQUVBLHFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGNhckltZyA9IG5ldyBJbWFnZSgpO1xuY2FySW1nLnNyYyA9IFwiaW1hZ2VzL2Nhci5wbmdcIjtcbnZhciB4ID0geDtcbnZhciB5ID0geTtcblxuLy8gY2xhc3MgQ2FyIHtcbi8vICAgY29uc3RydWN0b3IoeCwgeSkge1xuLy8gICAgIHRoaXMueCA9IHg7XG4vLyAgICAgdGhpcy55ID0geTtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBDYXIoaGVpZ2h0LCB3aWR0aCwgeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5cbi8vIGNsYXNzIEVuZW1pZXMge1xuLy8gICBjb25zdHJ1Y3RvcihpbWcsIHgsIHkpXG4vLyAgIHRoaXMuaW1nID0gXG4vLyB9XG5cbmNhckltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjLmRyYXdJbWFnZShjYXJJbWcsIDEwLCA2MDAsIDUwLCA1MClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXI7IiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xudmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG4vL0dyYXNzXG5mdW5jdGlvbiBkcmF3QmFja2dyb3VuZCgpIHtcbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcblxuLy9Sb2FkXG5cbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5cbi8vIFdhdGVyIFxuXG5jLmZpbGxTdHlsZSA9IFwiIzk2Nzk2N1wiO1xuYy5maWxsUmVjdCgwLDAsIDEyMDAsIDUwKVxuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDQ1MCk7XG5jLmxpbmVUbygxMjAwLCA0NTApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuLy9MYW5lc1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw1MDApO1xuYy5saW5lVG8oMTIwMCwgNTAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbi8vTGFuZXNcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTUwKTtcbmMubGluZVRvKDEyMDAsIDU1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG4vL0xhbmVzXG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDYwMCk7XG5jLmxpbmVUbygxMjAwLCA2MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcbiBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBmcm9nSW1nID0gbmV3IEltYWdlKCk7XG5mcm9nSW1nLnNyYyA9IFwiaW1hZ2VzL2Zyb2cucG5nXCJcblxuZnJvZ0ltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjLmRyYXdJbWFnZShmcm9nSW1nLCA2MDAsIDY1MCwgNTAsIDUwKVxufVxuXG5mdW5jdGlvbiBGcm9nKHgsIHkpIHtcbiAgeCA9IHg7XG4gIFxuICB5ID0geTtcbn1cblxuXG4vLyBmdW5jdGlvbiBmcm9nTW92ZSgpIHtcbiAgXG4vLyB9KTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRnJvZztcbiIsInZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG52YXIgRnJvZyA9IHJlcXVpcmUoJy4uL2xpYi9mcm9nLmpzJyk7XG52YXIgQ2FyID0gcmVxdWlyZSgnLi4vbGliL0Nhci5qcycpO1xudmFyIEdhbWUgPSByZXF1aXJlKCcuLi9saWIvR2FtZS5qcycpO1xuXG5kcmF3KCk7XG4vL0Zyb2dcblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgZHJhd0JhY2tncm91bmQoKTtcbiAgRnJvZygpO1xuICBDYXIoKTtcbn1cblxuXG4vLyBsZXQgeCA9IGMueFxuLy8gbGV0IHkgPSBjLnlcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuLy8gICBjLmNsZWFyUmVjdCh4LCB5LCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcbi8vIH07XG5cblxuLy9Nb3ZlbWVudFxuXG5cbi8vIGFuaW1hdGUoKTsgIFxuXG4vLyB2YXIgbW92ZUZyb2cgPSBbXTtcblxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgYy5jbGVhclJlY3QoMCwgMCAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0XG4vLyAgICAgICAgICk7XG5cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVGcm9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBtb3ZlRnJvZ1tpXS51cGRhdGUoKVxuLy8gfTtcblxuXG4vL2luZGV4LmpzIHdpbGwgcnVuIHRoZSBnYW1lIGxvb3AuIFxuXG4vL0dhbWUgY2xhc3MgaXMgZ29pbmcgdG8gYmUgdG9wIGxldmVsIC0gd2hlcmUgd2UgY3JlYXRlIGZyb2csIGVuZW1pZXNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==