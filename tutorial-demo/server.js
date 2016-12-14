// var server = require('http').createServer()
//   , url = require('url')
//   , WebSocketServer = require('ws').Server
//   , wss = new WebSocketServer({ server: server })
//   , express = require('express')
//   , app = express()
//   , port = 4080;

// app.use(function (req, res) {
//   res.send({ msg: "hello" });
// });

// wss.on('connection', function connection(ws) {
//   var location = url.parse(ws.upgradeReq.url, true);
//   // you might use location.query.access_token to authenticate or share sessions
//   // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });

//   ws.send('something');
// });

// server.on('request', app);
// server.listen(port, function () { console.log('Listening on ' + server.address().port) });

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  transports: [ 'websocket', 'polling', ],
});

server.listen(8000);

app.get('/', function (req, res) {
  console.log('accessing /. serving index.html...');
  res.sendFile(__dirname + '/index.html');
});

console.log('Server started');

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });

  console.log('io started.');
});