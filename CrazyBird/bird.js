// the code in the define method can not conflict with the others
define(function(require, exports, module) {
  // the bird spirit
  var foo = 'bar';
  var $ = '';
  function Bird(img, cvs) {
    var _this = this;
    // when click the button the bird will fly upward
    cvs.addEventListener('click', function(event) {
      var x = event.layerX;
      var y = event.layerY;
      _this.fly();
    });
    // image source
    this.img = img;
    // position
    this.x = 200;
    this.y = 100;
    // current frame
    this.index = 0;
    // speed and acceleration
    this.speed = 0;
    this.a = 0.0005;
    // how long does the bird spirit wait on current frame
    this.waitTime = 0;
  }

  Bird.prototype.update = function(dt) {
    // update the bird sprite data based on the interval
    // update the current frame data
    this.waitTime = this.waitTime + dt;
    if (this.waitTime > 100) {
      this.index = (this.index + 1) % 3;
      this.waitTime = this.waitTime - 100;
    }

    // update position data
    this.speed = this.speed + this.a * dt;
    this.y = this.y + this.speed * dt;
  };

  Bird.prototype.draw = function() {

    // draw the spirit on the canvas based on the spirit data

    ctx.save();

    // firstly translate then rotate
    ctx.translate(this.x, this.y);

    // when speed is 0.3 the angle is 30 degree
    // guarantee the degree is less than 45
    var speed = this.speed > 0.3 ? 0.3 : this.speed;

    var angle = speed / 0.3 * 45;

    ctx.rotate(angle / 180 * Math.PI);


    ctx.drawImage(this.img,
      52 * this.index, 0, 52, 45,
      // -26 and -22.5 confirm the center of the image of bird
      //  coincide with the center of current coordinate system.
      // because rotate is setting the original point of coordinate system
      //  as rotate center.
      -26, -22.5, 52, 45
    );

    ctx.restore(); // after the bird drawn, restore the
  //  the context to the before state.
  };


  // when click the canvas, the bird will fly upward and forward
  Bird.prototype.fly = function() {

    this.speed = -0.3;
  };

  // the module exports is define at the end of the module file.
  module.exports = Bird;
});
