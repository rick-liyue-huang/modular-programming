define(function(require, exports, module) {
  // load image
  var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
  // set the tag to store the image
  var imgObjects = [];

  // get image like that
  // imgObjects[0]

  var game = require('./game.js');

  var loadCount = 0;
  // the listener after loaded image
  function listener() {
    loadCount++;

    if (loadCount >= imgs.length) {
      console.log('all loaded：', loadCount);
      game.run(imgObjects);
    }
  }

  imgs.forEach(function(imgurl) {
    // create five image tags by loop
    var img = new Image(); // this is img tag
    img.addEventListener('load', listener);
    img.src = './imgs/' + imgurl;
    imgObjects.push(img);
  });
});
