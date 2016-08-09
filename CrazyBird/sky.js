define(function(require, exports, module) {

  // the constructor of sky
  function Sky(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.03;
  }

  Sky.prototype.update = function(dt) {
    //if the sky move out the screen, it will fly back to the rightmost
    if (this.x < -800) {

      this.x = this.x + 1600;
    }
    this.x = this.x + dt * this.speed;
  };

  Sky.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, 0);
  };

  module.exports = Sky;

});
