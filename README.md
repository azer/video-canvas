## video-canvas

Display Videos In Canvas Element

```js
videoCanvas = require('video-canvas')

player = videoCanvas('totoro.mp4', 'body.foo').autoplay.volume(0.5).on('ended', function () {
  // end
})

player.element()
// => <video>

player.canvas()
// => <canvas>
```

Multiple video formats for browser compatibility:

```js
videoCanvas(['totoro.mp4', 'totoro.webm'], document.body)
```

## Install

```bash
$ npm install video-canvas
```


## API Reference

See [media](http://github.com/azer/media)

