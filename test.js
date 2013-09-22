var videoCanvas = require("./");

var set1 = ['https://dl.dropboxusercontent.com/u/52141482/totoro.mp4', 'https://dl.dropboxusercontent.com/u/52141482/totoro.webm'];

it('plays a video', function(done){
  videoCanvas(set1).volume(0).autoplay().on('ended', function () {
    done();
  });
});
