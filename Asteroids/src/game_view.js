const Game = require('./game.js');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  let gameView = this;
  setInterval(function() {
    gameView.game.step();
    gameView.game.draw(gameView.ctx);
  },20);
};

module.exports = GameView;
