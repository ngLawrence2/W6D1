const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const gameView = new GameView(ctx);
  gameView.start();
 });
