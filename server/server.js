const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
  const message = {
    from: 'test',
    text: 'test',
    createdAt: 123,
  };
  socket.on('createNewMessage', (newMessage) => {
    message.from = newMessage.from;
    message.text = newMessage.text;
    message.createdAt = new Date().getDate;
    console.log('createNewMessage', message);
  });
  socket.emit('newMessage', message);
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
