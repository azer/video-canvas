var video = require("media").video;
var newElement = require('new-element');
var select = require("select-dom");
var style = require('style-dom');

module.exports = videoCanvas;

function videoCanvas (src, parent) {
  var player = video(src);
  var element = player.element();

  style(element, {
    position: 'absolute',
    top: '-250px',
    visibility: 'hidden',
    width: '0px',
    height: '0px'
  });

  var canvas = newElement('<canvas></canvas>');
  var ctx = canvas.getContext('2d');

  player.on('play', function () {
    (function loop () {
      if (element.paused || element.ended) return;

      ctx.drawImage(element, 0, 0);
      setTimeout(loop, 1000 / 30);
    }());
  });

  if (typeof parent == 'string') {
    parent = select(parent);
  } else if (parent == undefined) {
    parent = document.documentElement;
  }

  parent.appendChild(canvas);

  player.canvas = function () {
    return canvas;
  };

  return player;
}
