var app = require('app')
var BrowserWindow = require('browser-window')


app.on('ready', function() {
  var searchWindow = new BrowserWindow({
    width: 1000,
    height: 300,
    resizable: true,
    frame: false
  })

  var bottomWindow = new BrowserWindow({
    width: 1000,
    height: 100,
    transparent: true,
    frame: false,
    x: 200,
    y: 2999
  })
  searchWindow.loadUrl('file://' + __dirname + '/search.html'),
  bottomWindow.loadUrl('file://' + __dirname + '/bottom-carousel.html')

})
