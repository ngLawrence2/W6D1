function MovingObject(opt) {
  this.pos = opt.pos;
  this.vel = opt.vel;
  this.radius = opt.radius;
  this.color = opt.color;
  this.game = opt.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {

};

module.exports = MovingObject;
