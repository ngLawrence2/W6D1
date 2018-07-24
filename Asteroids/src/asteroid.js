const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

function Asteroid(pos, game) {
  this.COLOR = 'gray';
  this.RADIUS = 10;
  const opt = {
    color: this.COLOR,
    radius: this.RADIUS,
    pos: pos,
    vel: Util.randomVec(2),
    game: game
  };
  MovingObject.call(this, opt);
}
Asteroid.prototype.collideWith = function(otherObject) {
  if ((Math.abs(this.pos[0] - otherObject.pos[0]) < this.radius*2) &&
    Math.abs(this.pos[1] - otherObject.pos[1]) < this.radius*2) {
    otherObject.relocate();
  }
  return false;
};

Util.inherits(Asteroid,MovingObject);

module.exports = Asteroid;
