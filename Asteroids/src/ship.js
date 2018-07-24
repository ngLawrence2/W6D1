MovingObject = require('./moving_object.js');
Util = require('./utils.js');

// this.pos = opt.pos;
// this.vel = opt.vel;
// this.radius = opt.radius;
// this.color = opt.color;
// this.game = opt.game;
function Ship(pos, game) {
  this.RADIUS = 10;
  this.COLOR = 'green';
  let opt = {
    pos: pos,
    vel: [0,0],
    radius: this.RADIUS,
    color: this.COLOR,
    game: game
  };
  MovingObject.call(this,opt);
}
Util.inherits(Ship,MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
};

module.exports = Ship;
