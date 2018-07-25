/* eslint-disable */


const socket = io();
socket.on('connect', function() {
    console.log('Connected to the server');
});
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.emit('createNewMessage', {
    from: 'khoa25081992@yahoo.com',
    text: 'Hello, How are you?'
});

socket.on('newMessage', function(message) {
    console.log(message);
});