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

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

c.fillStyle = "#4CA432";
c.fillRect(0, 650, 1200, 50);
c.fillRect(0, 350, 1200, 50);
c.fillStyle = "black";
c.fillRect(0, 400, 1200, 250);
c.fillStyle = "#967967";
c.fillRect(0, 0, 1200, 50);

c.beginPath();
c.moveTo(0, 450);
c.lineTo(1200, 450);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

c.beginPath();
c.moveTo(0, 500);
c.lineTo(1200, 500);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

c.beginPath();
c.moveTo(0, 550);
c.lineTo(1200, 550);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

c.beginPath();
c.moveTo(0, 600);
c.lineTo(1200, 600);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

function drawFrog() {
  c.Frog(frog, sx, sy, swidth, sheight, x, y, width, height);
}

// function () {
//   requestAnimationFrame(draw);
//   drawBackground():
//   drawFrog();

// }


//index.js will run the game loop. 

//Game class is going to be top level - where we create frog, enemies

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImMiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInNldExpbmVEYXNoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJkcmF3RnJvZyIsIkZyb2ciLCJmcm9nIiwic3giLCJzeSIsInN3aWR0aCIsInNoZWlnaHQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQUlBLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7QUFFQSxJQUFJQyxJQUFJSCxPQUFPSSxVQUFQLENBQWtCLElBQWxCLENBQVI7O0FBRUFELEVBQUVFLFNBQUYsR0FBYyxTQUFkO0FBQ0FGLEVBQUVHLFFBQUYsQ0FBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixFQUF6QjtBQUNBSCxFQUFFRyxRQUFGLENBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekI7QUFDQUgsRUFBRUUsU0FBRixHQUFjLE9BQWQ7QUFDQUYsRUFBRUcsUUFBRixDQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCO0FBQ0FILEVBQUVFLFNBQUYsR0FBYyxTQUFkO0FBQ0FGLEVBQUVHLFFBQUYsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFnQixJQUFoQixFQUFzQixFQUF0Qjs7QUFFQUgsRUFBRUksU0FBRjtBQUNBSixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUwsRUFBRU0sTUFBRixDQUFTLElBQVQsRUFBZSxHQUFmO0FBQ0FOLEVBQUVPLFdBQUYsR0FBZ0IsT0FBaEI7QUFDQVAsRUFBRVEsV0FBRixDQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0FSLEVBQUVTLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQVQsRUFBRVUsTUFBRjs7QUFFQVYsRUFBRUksU0FBRjtBQUNBSixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUwsRUFBRU0sTUFBRixDQUFTLElBQVQsRUFBZSxHQUFmO0FBQ0FOLEVBQUVPLFdBQUYsR0FBZ0IsT0FBaEI7QUFDQVAsRUFBRVEsV0FBRixDQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0FSLEVBQUVTLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQVQsRUFBRVUsTUFBRjs7QUFFQVYsRUFBRUksU0FBRjtBQUNBSixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUwsRUFBRU0sTUFBRixDQUFTLElBQVQsRUFBZSxHQUFmO0FBQ0FOLEVBQUVPLFdBQUYsR0FBZ0IsT0FBaEI7QUFDQVAsRUFBRVEsV0FBRixDQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0FSLEVBQUVTLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQVQsRUFBRVUsTUFBRjs7QUFFQVYsRUFBRUksU0FBRjtBQUNBSixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUwsRUFBRU0sTUFBRixDQUFTLElBQVQsRUFBZSxHQUFmO0FBQ0FOLEVBQUVPLFdBQUYsR0FBZ0IsT0FBaEI7QUFDQVAsRUFBRVEsV0FBRixDQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0FSLEVBQUVTLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQVQsRUFBRVUsTUFBRjs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCWCxJQUFFWSxJQUFGLENBQU9DLElBQVAsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLE1BQXJCLEVBQTZCQyxPQUE3QixFQUFzQ0MsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDQyxLQUE1QyxFQUFtREMsTUFBbkQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEscUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJ2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5cbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmMuZmlsbFN0eWxlID0gXCIjNENBNDMyXCI7XG5jLmZpbGxSZWN0KDAsIDY1MCwgMTIwMCwgNTApO1xuYy5maWxsUmVjdCgwLCAzNTAsIDEyMDAsIDUwKTtcbmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuYy5maWxsUmVjdCgwLCA0MDAsIDEyMDAsIDI1MCk7XG5jLmZpbGxTdHlsZSA9IFwiIzk2Nzk2N1wiO1xuYy5maWxsUmVjdCgwLDAsIDEyMDAsIDUwKVxuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw0NTApO1xuYy5saW5lVG8oMTIwMCwgNDUwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbmMuYmVnaW5QYXRoKCk7XG5jLm1vdmVUbygwLDUwMCk7XG5jLmxpbmVUbygxMjAwLCA1MDApO1xuYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbmMuc2V0TGluZURhc2goWzVdKTtcbmMuc3Ryb2tlV2lkdGggPSA0O1xuYy5zdHJva2UoKTtcblxuYy5iZWdpblBhdGgoKTtcbmMubW92ZVRvKDAsNTUwKTtcbmMubGluZVRvKDEyMDAsIDU1MCk7XG5jLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuYy5zZXRMaW5lRGFzaChbNV0pO1xuYy5zdHJva2VXaWR0aCA9IDQ7XG5jLnN0cm9rZSgpO1xuXG5jLmJlZ2luUGF0aCgpO1xuYy5tb3ZlVG8oMCw2MDApO1xuYy5saW5lVG8oMTIwMCwgNjAwKTtcbmMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG5jLnNldExpbmVEYXNoKFs1XSk7XG5jLnN0cm9rZVdpZHRoID0gNDtcbmMuc3Ryb2tlKCk7XG5cbmZ1bmN0aW9uIGRyYXdGcm9nKCkge1xuICBjLkZyb2coZnJvZywgc3gsIHN5LCBzd2lkdGgsIHNoZWlnaHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG59XG5cbi8vIGZ1bmN0aW9uICgpIHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuLy8gICBkcmF3QmFja2dyb3VuZCgpOlxuLy8gICBkcmF3RnJvZygpO1xuXG4vLyB9XG5cblxuLy9pbmRleC5qcyB3aWxsIHJ1biB0aGUgZ2FtZSBsb29wLiBcblxuLy9HYW1lIGNsYXNzIGlzIGdvaW5nIHRvIGJlIHRvcCBsZXZlbCAtIHdoZXJlIHdlIGNyZWF0ZSBmcm9nLCBlbmVtaWVzXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=