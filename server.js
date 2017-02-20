#!/usr/bin/env node

const express = require('express');
const debug = require('debug');
const path = require('path');

const PORT = 8000;

const app = express();
// const server = require('spdy').createServer(require('spdy-keys'), app);
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  transports: [ 'websocket', 'polling', ],
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname));

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
server.listen(PORT, function() {
  console.log(`express-spdy v0 running at port ${PORT}.`);
});
