var app = require('app')
var BrowserWindow = require('browser-window')


app.on('ready', function() {
  var searchWindow = new BrowserWindow({
    width: 900,
    height: 600,
    resizable: false,
    frame: false,
    "node-integration": true
  })

  var bottomWindow = new BrowserWindow({
    width: 1700,
    height: 100,
    transparent: true,
    frame: false,
    resizable: true,
    x: 0,
    "always-on-top": true,
    y: 2699
  })
  searchWindow.loadUrl('file://' + __dirname + '/templates/search.html'),
  bottomWindow.loadUrl('file://' + __dirname + '/templates/bottom-carousel.html')
})






// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the javascript object is GCed.
// var mainWindow = null;

// // Quit when all windows are closed.
// app.on('window-all-closed', function() {
//   if (process.platform != 'darwin')
//     app.quit();
// });

// // This method will be called when Electron has done everything
// // initialization and ready for creating browser windows.
// app.on('ready', function() {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({width: 800, height: 600});

//   // and load the index.html of the app.
//   mainWindow.loadUrl('file://' + __dirname + '/index.html');

//   // Open the devtools.
//   mainWindow.openDevTools();

//   // Emitted when the window is closed.
//   mainWindow.on('closed', function() {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     mainWindow = null;
//   });
// });
