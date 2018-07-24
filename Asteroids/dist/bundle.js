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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Asteroid(pos, game) {\n  this.COLOR = 'gray';\n  this.RADIUS = 10;\n  const opt = {\n    color: this.COLOR,\n    radius: this.RADIUS,\n    pos: pos,\n    vel: Util.randomVec(2),\n    game: game\n  };\n  MovingObject.call(this, opt);\n}\nAsteroid.prototype.collideWith = function(otherObject) {\n  if ((Math.abs(this.pos[0] - otherObject.pos[0]) < this.radius*2) &&\n    Math.abs(this.pos[1] - otherObject.pos[1]) < this.radius*2) {\n    otherObject.relocate();\n  }\n  return false;\n};\n\nUtil.inherits(Asteroid,MovingObject);\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/asteroids.js":
/*!**************************!*\
  !*** ./src/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  const gameView = new GameView(ctx);\n  gameView.start();\n });\n\n\n//# sourceURL=webpack:///./src/asteroids.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n  this.DIM_X = 500;\n  this.DIM_Y = 500;\n  this.NUM_ASTEROIDS = 5;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship(this.randomPosition(),this);\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid([Math.random() * 500, Math.random() * 500], this));\n  }\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);\n  let allObj = this.allObjects();\n  for (var i = 0; i < allObj.length; i++) {\n    allObj[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n    let allObj = this.allObjects();\n  for (var i = 0; i < allObj.length; i++) {\n    allObj[i].move();\n  }\n};\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] > this.DIM_X) {\n      pos[0] = 0;\n    } else if (pos[0] < 0) {\n      pos[0] = this.DIM_X;\n    }\n    if (pos[1] > this.DIM_Y) {\n      pos[1] = 0;\n    } else if (pos[1] < 0) {\n      pos[1] = this.DIM_Y;\n    }\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n      this.ship.isCollidedWith(this.asteroids[i]);\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n  this.asteroids = this.asteroids.filter(a => a !== asteroid);\n};\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * 500, Math.random() * 500];\n};\n\nGame.prototype.allObjects = function() {\n    let all = this.asteroids.slice(0);\n    all.push(this.ship);\n    return all;\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n  let gameView = this;\n  setInterval(function() {\n    gameView.game.step();\n    gameView.game.draw(gameView.ctx);\n  },20);\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(opt) {\n  this.pos = opt.pos;\n  this.vel = opt.vel;\n  this.radius = opt.radius;\n  this.color = opt.color;\n  this.game = opt.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n  ctx.closePath();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n// this.pos = opt.pos;\n// this.vel = opt.vel;\n// this.radius = opt.radius;\n// this.color = opt.color;\n// this.game = opt.game;\nfunction Ship(pos, game) {\n  this.RADIUS = 10;\n  this.COLOR = 'green';\n  let opt = {\n    pos: pos,\n    vel: [0,0],\n    radius: this.RADIUS,\n    color: this.COLOR,\n    game: game\n  };\n  MovingObject.call(this,opt);\n}\nUtil.inherits(Ship,MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale(vec, m) {\n   return [vec[0] * m, vec[1] * m];\n }\n};\n\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });