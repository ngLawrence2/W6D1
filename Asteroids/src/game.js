const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(),this);
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid([Math.random() * 500, Math.random() * 500], this));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
  let allObj = this.allObjects();
  for (var i = 0; i < allObj.length; i++) {
    allObj[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
    let allObj = this.allObjects();
  for (var i = 0; i < allObj.length; i++) {
    allObj[i].move();
  }
};

Game.prototype.wrap = function(pos) {
    if (pos[0] > this.DIM_X) {
      pos[0] = 0;
    } else if (pos[0] < 0) {
      pos[0] = this.DIM_X;
    }
    if (pos[1] > this.DIM_Y) {
      pos[1] = 0;
    } else if (pos[1] < 0) {
      pos[1] = this.DIM_Y;
    }
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
      this.ship.isCollidedWith(this.asteroids[i]);
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  this.asteroids = this.asteroids.filter(a => a !== asteroid);
};

Game.prototype.randomPosition = function() {
  return [Math.random() * 500, Math.random() * 500];
};

Game.prototype.allObjects = function() {
    let all = this.asteroids.slice(0);
    all.push(this.ship);
    return all;
};

module.exports = Game;
