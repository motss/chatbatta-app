const app = require('express')();
const PORT = 8000;
const server = require('spdy').createServer(require('spdy-keys'), app);
const io = require('socket.io')(server, {
  transports: [ 'websocket', 'polling', ],
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat-app.html');
});

io.on('connection', function (socket) {
  console.log('A user connected.', socket.id);

  socket.on('chat-message', function (msg) {
    console.log(`\nUser: ${socket.id}`);
    console.log(`Message: ${msg}`);

    // Broadcast msg to all conncted users.
    io.emit('chat-message', msg);
  });
});

// HTTP/2 server with spdy.
server.listen(PORT, function(res, req) {
  console.log('server listening...', res, req);
  console.log(`express-spdy v0 running at port ${PORT}.`);
});
